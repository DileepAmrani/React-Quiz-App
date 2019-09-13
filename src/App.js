import React from 'react';
import './App.css';
import Login from './Login'
import Header from './Component/Header'
import Home from './Home'
import {authFunc, logout} from './Config/function'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isSignedIn: false
    }
  }
  userData=(ans , user)=>{
    console.log(ans,user)
    this.setState({
      isSignedIn:ans,
      userData:user
    })
  }

 async componentDidMount(){
    try{
      let user = await authFunc()
      console.log(user)
      this.setState({
        isSignedIn:true,
        userData:user
      })
    }
    catch(err){
      console.log(err)

    }
  }
   logout = async (logValue) => {
    await logout()
    this.setState({
      isSignedIn: logValue
    })
 }
  
  render() {
    console.log(this.state)
    return (
      <div>
        {
          this.state.isSignedIn ? 
          <div>
          <Header profile={this.state.userData.photoURL} currentUser={this.state.userData.displayName}  logout={this.logout}/>
          <Home loginUser={this.state.userData} />

          </div>
          :
          <div>
          <Header  />
          <Login userData={this.userData} />
          </div>
        }
      </div>
    )
  }
}

export default App;
