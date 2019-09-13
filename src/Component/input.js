import React from 'react';


class Input extends React.Component{
    render(){
        return(
                <input style={{backgroundColor: 'black', width: '20px', height: '20px', marginTop: '5px'}} onChange={this.props.onChange} type = {this.props.type} onClick = {this.props.onClick}  name = {this.props.name} key={this.props.key} checked = {this.props.checked} value={this.props.answer} /> 
        )
    }
    }
    
    export default Input