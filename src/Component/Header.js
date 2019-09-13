import React from 'react';
import Button from './Button'

class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            is: true
        }
    }

    logout = () => {
        this.props.logout(false)
        this.setState({
            is: false
        })
    }
    render() {
        return (
            <div className="navbar navbar-inverse bg-primary" style={{ color: 'white' }}>
                <h1 style={{ display: 'inline' }}>Quiz App</h1>

                {
                    this.state.is ?
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><span >{this.props.currentUser}<img style={{ borderRadius: '5px' }} src={this.props.profile} alt={this.props.currentUser} /></span ></button>
                            <div class="dropdown-menu dropdown-primary">
                                <Button class="dropdown-item" btn='Log Out' login={ this.logout} />
                            </div>
                        </div>
                        :
                        <div>
                        </div>
                }

            </div>
        )
    }
}

export default Header