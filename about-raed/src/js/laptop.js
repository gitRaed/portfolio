import React from 'react';
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem} from 'react-pro-sidebar';
import '../../node_modules/react-pro-sidebar/dist/css/styles.css';
import {displaying} from './renderContent';

export class LaptopMenu extends React.Component{


    constructor(props) {

        super(props);
        this.state = {
            displaying: 1,
        }

    }

    render() {

    return ( 
        
        

        <div>
        
            <div className="displaying">
                {displaying(this.state.displaying)}
            </div>

            <div className="menu">
            <ProSidebar width="30%" >

                <SidebarHeader>
                    <div>
                        <p className="logo-titre">
                            FADDOUL EL-ACHKAR RAED
                            <p className="logo-titre-qualif">Full stack software engineer / Accountant</p>
                        </p>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu>
                        <MenuItem onClick = {() => {this.setState({displaying: 1})}}> <i className="fas fa-user-circle content-icon"></i> <span className="menu-text">About me</span> </MenuItem>
                        <MenuItem onClick = {() => {this.setState({displaying: 2})}}> <i className="fas fa-graduation-cap content-icon"></i> <span className="menu-text">Course</span> </MenuItem>
                        <MenuItem onClick = {() => {this.setState({displaying: 3})}}> <i className="fas fa-chart-bar content-icon"></i> <span className="menu-text">Projects</span> </MenuItem>
                        <MenuItem onClick = {() => {this.setState({displaying: 4})}}> <i className="fas fa-file content-icon"></i> <span className="menu-text">CV</span> </MenuItem>
                        <MenuItem onClick = {() => {this.setState({displaying: 5})}}> <i className="fas fa-address-book content-icon"></i> <span className="menu-text">Contact me</span> </MenuItem>
                    </Menu>
                </SidebarContent>

                <SidebarFooter>
                    <div className="footer-info">
                        Get in touch <br /> <br />
                        <a href="mailto:raedfaddoul@gmail.com"> <i className="fas fa-envelope footer-icon icon"></i></a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://github.com/gitRaed"><i className="fab fa-github footer-icon icon"></i></a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/raed-faddoul-63b414193/" ><i className="fab fa-linkedin footer-icon icon"></i></a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </div>


            

        </div>

        )
    }
}