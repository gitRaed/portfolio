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
                
            <div>
                <p className="logo-titre">
                    FADDOUL EL-ACHKAR RAED
                    <p className="logo-titre-qualif">Full stack software engineer / Accountant</p>
                </p>
            </div>

                <div className="mobile-contact-info">
                    <a href="mailto:raedfaddoul@gmail.com"><i class="fas fa-envelope mobile-footer-icon icon"></i></a>  <a href="https://github.com/gitRaed"><i class="fab fa-github mobile-footer-icon icon"></i></a> <a href="https://www.linkedin.com/in/raed-faddoul-63b414193/" ><i class="fab fa-linkedin mobile-footer-icon icon"></i></a>

                    <div className="dropdown mobile-bouton-menu">
                        <button className="mobile-bouton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <ul>
                                <li className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 1})}}>About me</li>
                                <li className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 2})}}>Course</li>
                                <li className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 3})}}>Projects</li>
                                <li className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 4})}}>CV</li>
                                <li className="dropdown-item dropdown-link" onClick = {() => {this.setState({displaying: 5})}}>Contact me</li>
                            </ul>
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