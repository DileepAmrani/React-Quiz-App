import React from 'react'
import { apifetcher } from './Config/function'
import Button from './Component/Button'
import Input from './Component/input'
import QuizImage from './Images/quiz.png'
import './Home.css';
import Timer from './Component/Timer'



export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            quiz: '',
            counter: 0,
            startQuiz: false,
            percentage: 0,
            isQuizEnd: false
        }
    }
    newxtQ = () => {

        let { counter, quiz, selectedValue, percentage } = this.state
        if (counter === quiz.length - 1) {
            alert('Quiz End')
            this.setState({
                isQuizEnd: true
            })
        }
        else {
            console.log(quiz[counter+1].incorrect_answers)
            quiz[counter + 1].incorrect_answers.push(quiz[counter + 1].correct_answer)
            let i = quiz[counter + 1].incorrect_answers.length - 1;
            for (; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = quiz[counter + 1].incorrect_answers[i];
              quiz[counter + 1].incorrect_answers[i] = quiz[counter + 1].incorrect_answers[j];
              quiz[counter + 1].incorrect_answers[j] = temp;
            }
            this.setState({
                counter: counter + 1,
                allAnswer: quiz[counter + 1].incorrect_answers,
            })
        }
        if (selectedValue === quiz[counter].correct_answer) {
            this.setState({
                percentage: percentage + 10
            })
        }
    }

    async componentDidMount() {
        let data = await apifetcher()
        console.log(data)
        let { counter } = this.state
        data[counter].incorrect_answers.push(data[counter].correct_answer)
        let i = data[counter].incorrect_answers.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[counter].incorrect_answers[i];
          data[counter].incorrect_answers[i] = data[counter].incorrect_answers[j];
          data[counter].incorrect_answers[j] = temp;
        }

        this.setState({
            quiz: data,
            allAnswer: data[counter].incorrect_answers,
        })
    }

    checkAnswer = (i, val) => {
        console.log(i, val)
        this.setState({ selectedValue: val })
    }


    getValue=(value)=>{
        console.log(value)
        this.setState({
            isQuizEnd: true
        })
    }
    
    retake = () =>{
        alert('Retake Quiz')
        this.setState({ startQuiz: false, isQuizEnd : false, counter: 0 }) 
    }
    render() {
        let { quiz, counter, startQuiz, allAnswer, percentage, isQuizEnd } = this.state;
        console.log(percentage)
        console.log(this.state.quiz)
        return (
            <div className='body'>
                {
                    startQuiz ?
                        <div>
                            {quiz ?
                                <div  >
                                    {
                                        isQuizEnd ?
                                            <div class="container App">
                                                <div class="jumbotron">
                                                    <h2 className="text-muted">Here is Your Result</h2>
                                                    {percentage >= 70 ? <h2 className="text-success">Congratulations Your Are Pass</h2> : <h2 className="text-danger"> Sorry You are Fail</h2>}
                                                    <h2 class="text-info" >Your Score {percentage}%</h2>
                                                    <Button class='btn btn-info'  btn='Retake Quiz' login={this.retake}/>
                                                </div>
                                            </div>
                                            :
                                            <div className='questionArea'>
                                                <Timer getValue={this.getValue} />
                                                <h2 style={{ textAlign: 'center', fontWeight: 'bolder' }}>{quiz[counter].category}</h2>
                                                <h5>{counter + 1}. {quiz[counter].question}</h5>
                                                {
                                                    allAnswer.map((v, i) =>
                                                        <div className='quizInput' >
                                                            {i + 1}.<Input key={i} checked={this.state['option' + i]} onChange={() => this.checkAnswer(i, v)} type='radio' key={i} name='questions' answer={v} />  {v}
                                                        </div>
                                                    )
                                                }
                                                <Button class='btn btn-primary float-right' login={this.newxtQ} btn='Next' />
                                            </div>

                                    }
                                </div>
                                :
                                <div>
                                    <h2 style={{ textAlign: 'center' }}>Wait Questions are getting ready</h2>
                                </div>
                            }

                        </div>
                        :
                        <div className='App' >
                            <div className='image'>
                                <img src={QuizImage} />
                            </div>

                            <div style={{ maxWidth: '700px', margin: 'auto' }}>
                                <h5>These questions were selected randomly from our database containing hundreds of GK questions. Users will have to select one option out of the four option given which they think is the correct answer.</h5>
                                <h4>Questions : 10</h4>
                                <h4>Passing Marks : 70</h4>
                                <h2>Click here to Start Your Quiz</h2>
                                <Button class='btn btn-primary ' login={() => { this.setState({ startQuiz: true }) }} btn='Start Quiz' />
                            </div>

                        </div>
                }
            </div>
        )
    }
}
