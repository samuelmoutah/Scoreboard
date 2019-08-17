import React from 'react'
import Counter from './Counter'
import Icon from './Icon'

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          
          <Icon isHighScore={props.isHighScore} />
          { props.name }
        </span>
  
        <Counter 
            score={props.score}
            index={props.index}
            changeScore={props.changeScore}
        />
      </div>
    );
  }

  export default Player