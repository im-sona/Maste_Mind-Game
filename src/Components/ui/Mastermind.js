// Mastermind.js
import React, { Component } from 'react';
import Repeat from 'react-repeat-component';
import MastermindAPI from '../api/mastermind';
import './Mastermind.css';
import {Link} from 'react-router-dom';

const PEGS_PER_ROW = MastermindAPI.PEGS_PER_ROW;

class Mastermind extends Component {
  constructor(props) {
    super(props);
    this.state = { ...MastermindAPI.startGame(props.level) };
  }

  checkCombination = (combination) => {
    const { secret } = this.state;
    const hints = MastermindAPI.getHints(combination, secret);
    const status = (hints.black === PEGS_PER_ROW) ? 'win' : 
                   (this.state.level.attempts > this.state.currentAttempt) ? 'playing' : 'lose';
    const currentAttempt = (status === 'playing') ? this.state.currentAttempt + 1 : this.state.currentAttempt;
    
    console.log('Secret Color:', secret);
    
    this.setState({
      currentAttempt,
      status,
      secret: (status === 'lose') ? secret : this.state.secret,
    });

    return hints;
  };

  render() {
    const { restart } = this.props;
    const { level, status, currentAttempt, secret = [] } = this.state;
    const { attempts, colors } = level;
    const playing = status === 'playing';
    const winMsg = status === 'win' && (
      <div className='text-white'> 
        <span role="img" aria-label="smile">😊</span> You win! Total attempts: {currentAttempt}
      </div>
    );
    const loseMsg = status === 'lose' && (
      <div className='text-white'>
        <span role="img" aria-label="frown">😞</span> You lose! Secret key was: {secret.join(', ')}
      </div>
    );

    return (
      <div className='ii'>
       
        <div className="wrapper">
          <Repeat times={attempts} order="desc" className="board">
            {(i) => <Row key={i+1} attempt={i+1} isActive={(currentAttempt === i+1) && playing} colors={colors} check={this.checkCombination} />}
          </Repeat>
          <div>
            <p>{winMsg || loseMsg}</p>
            {!playing && <button onClick={restart}>New Game</button>}
          </div>
          <h1 className='pt-5 text-white'>Master Mind Game</h1>
          <p className='px-5 text-white '>Mastermind is an addictive puzzle game that you can spend 
            a lot of time playing. Here, your task is to
             guess the color of the four circles on the decoding board. At the beginning of the game, you will see a board with
              eight rows of four empty circles each. The color pattern is encrypted, and your task is to guess what color each circle 
              is and in what order the colors should be arranged. There are nine possible colors to choose from, but be careful - each 
              color can appear more than once in a row. When you crack the code, the game will be won. You have 
            eight attempts to win the game, and after each failed attempt, you will receive colored hints.</p>
            <Link to='/home' className='px-5 mt-5 text-white'>  Click here to Home</Link>
        </div>
        
      </div>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pegs: [],
      hints: { black: 0, white: 0 },
    };
  }

  changePeg = (pegIndex) => {
    this.setState((prevState, props) => {
      const { pegs, lastColorIndex } = prevState;
      const { colors } = props;
      const currentColor = pegs[pegIndex];
      const currentColorIndex = (currentColor === undefined) ? lastColorIndex - 1 : colors.indexOf(currentColor);
      const nextColorIndex = currentColorIndex < colors.length - 1 ? currentColorIndex + 1 : 0;
      const nextColor = colors[nextColorIndex];

      const newPegs = [...pegs];
      newPegs[pegIndex] = nextColor;

      return {
        pegs: newPegs,
        lastColorIndex: nextColorIndex,
      };
    });
  };

  onConfirmClick = () => {
    const hints = this.props.check(this.state.pegs);
    this.setState({ hints });
  };
  
  render() {
    const { isActive } = this.props;
    const { pegs, hints } = this.state;
    const rowClass = isActive ? 'rows active' : 'rows';
    const disabled = pegs.filter(Boolean).length < PEGS_PER_ROW;

    const hintsArray = [
      ...Array.from({ length: hints.black }, () => 'green'),
      ...Array.from({ length: hints.white }, () => 'orange'),
    ];
    
    return (
      <div >

      
      <div className={rowClass}>
        <Repeat times={PEGS_PER_ROW} className="hints">
          {(i) => {
            const hintColor = hintsArray[i];
            const hintClass = hintColor ? `hole peg ${hintColor}` : 'hole';
            return (<div className={hintClass} key={`hint-${i}`}></div>);
          }}
        </Repeat>
        <Repeat times={PEGS_PER_ROW} className="combination">
          {(i) => {
            const pegColor = pegs[i];
            const pegClass = pegColor ? `hole peg ${pegColor}` : 'hole';
            return (<div className={pegClass} key={`peg-${i}`} onClick={() => isActive && this.changePeg(i)}></div>);
          }}
        </Repeat>
        <button className="confirm" disabled={disabled} hidden={!isActive} onClick={this.onConfirmClick}>Confirm</button>
      </div>
      
      </div>
    );
  }
}

export default Mastermind;
