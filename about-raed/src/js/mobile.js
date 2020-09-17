import React from 'react';
import {displaying} from './renderContent';


export class MobileMenu extends React.Component {

    constructor(props) {

        super(props);
        this.state= {
            displaying: 1
        }
    }

    render() {

        return(

        <div className="mobile">

            <div className="mobile-menu">
                <img className="mobile-logo" src={require("../images/raed2.png")} alt="My face"></img>
                <div className="mobile-logo-titre">FADDOUL EL-ACHKAR RAED <br /> FULL STACK SOFTWARE ENGINEER</div>

                <div className="mobile-contact-info">
                    <a href="mailto:raedfaddoul@gmail.com"><i class="fas fa-envelope mobile-footer-icon"></i></a>  <a href="https://github.com/gitRaed"><i class="fab fa-github mobile-footer-icon"></i></a> <a href="https://www.linkedin.com/in/raed-faddoul-63b414193/" ><i class="fab fa-linkedin mobile-footer-icon"></i></a>

                    <div className="dropdown mobile-bouton-menu">
                        <button className="mobile-bouton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 1})}}>About me</a>
                            <a className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 2})}}>Experience</a>
                            <a className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 3})}}>Projects</a>
                            <a className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 4})}}>CV</a>
                            <a className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 5})}}>Contact me</a>
                        </div>
                    </div>
                </div>

            </div>


            <div className="mobile-displaying">
                {displaying(this.state.displaying)}
            </div>

        </div>
        )
    }
}