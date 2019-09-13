import React from 'react'
// import { timer } from '../Config/function';
// import { async } from 'q';
class Timer extends React.Component {
    constructor(){
      super()
      this.state={
        quizTime: 60 
      }
    }

    timer(){
      let { quizTime } = this.state
     let interval= setTimeout(() => {
        this.setState({
          quizTime: quizTime -1
        })
      }, 1000);
      if(quizTime === 0){
        clearInterval(interval)
       this.props.getValue(true)
      }

      
    }
 

  render() {
    return (
      <div>
        <h4 onLoad={this.timer()}>Time: {this.state.quizTime}  </h4>
      </div>
    )
  }
}
export default Timer