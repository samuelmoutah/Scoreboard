import React, { Component } from 'react'

class Counter extends Component {

    
  
    // state = {
    //   score: 0
    // }
  
    // incrementScore() {
    //   this.setState( prevState => ({
    //     score: prevState.score + 1
    //   }))
      
    // }
  
    // decrementScore() {
    //   this.setState( prevState => {
    //     return {
    //       score: prevState.score - 1
    //     }
        
    //   })
      
    // }
  
    render() {

        let index = this.props.index

      return (
        <div className='counter'>
            <button className='counter-action decrement' onClick={() => this.props.changeScore(index, -1)}> - </button>
            <span className='counter-score'>{this.props.score}</span>
            <button className='counter-action increment' onClick={() => this.props.changeScore(index, 1)}> + </button>
        </div>
      )
    }
    
  }

  export default Counter