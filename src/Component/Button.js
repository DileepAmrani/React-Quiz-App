import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <div>
           <button onClick={this.props.login} className={this.props.class}>{this.props.btn}</button>
            </div>
        )
    }
    }
    
export default Button