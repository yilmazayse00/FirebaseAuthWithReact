import React, { Component } from 'react'
import fire from '../config/fire'
import { Button } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Button color="danger" 
                        onClick={() => fire.auth().signOut()}>LOGOUT</Button>
            </div>
        )
    }
}
