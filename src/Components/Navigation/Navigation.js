import React from 'react'

// Dependant Components
import { Button } from 'react-bootstrap';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'


class Navigation extends React.Component {

    render () {
        return (
            <div className="Navigation">
                <div className="Navigation-left">
                    <Button 
                    onClick={() => { window.location.href = "" }} 
                    variant="custom" size="lg"> Wren Liang </Button>
                </div>
                <div className="Navigation-right">
                    <Button onClick={() => window.fullpage_api.moveTo(2,0)} variant="custom" size="lg"> Skills </Button>
                    <Button variant="custom" size="lg"> Experience </Button>
                    <Button variant="custom" size="lg"> Projects </Button>
                    <Button variant="custom" size="lg"> Resume </Button>
                </div>
            </div>
        );
    }
}

export default Navigation;