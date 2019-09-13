import React  from 'react';
import Button from './Component/Button'
import { loginWithFacebook}  from './Config/function'

class Login extends React.Component{
    constructor(){
        super()
        this.login = this.login.bind(this)
    }
    async login(){  
        try{
            let user = await  loginWithFacebook()
            console.log(user)    
            this.props.userData(true, user)
      }
      catch(err){
          console.log(err)
          alert('Log in Failed')
      }
      
    }
    render(){
        return(
        <div className='text-center'>
            <h2 className='p-3 font-weight-bold '>Log in With Facebook</h2>
           { 
           <Button btn='Log In With Facebook' class='btn btn-primary' login={this.login.bind(this)}/>       
           }
        </div>
        )
    }
    }
    
export default Login