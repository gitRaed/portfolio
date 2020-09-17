import React from 'react';
import './style/App.css';
import './style/mobile.css';
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem} from 'react-pro-sidebar';
import '../node_modules/react-pro-sidebar/dist/css/styles.css';


class OtherMenu extends React.Component{

  render() {

    return ( 
      <div className="menu">
        <ProSidebar width="30%" >

          <SidebarHeader>
            <img className="logo" src={require("./images/raed2.png")} alt="My face"></img>
            <div className="logo-titre">Faddoul El-Achkar Raed <br /> FULL STACK SOFTWARE ENGINEER</div>
          </SidebarHeader>

          <SidebarContent>
            <Menu>
              <MenuItem><i class="fas fa-user-circle content-icon"></i> <span className="menu-text">About me</span></MenuItem>
              <MenuItem><i class="fas fa-graduation-cap content-icon"></i> <span className="menu-text">Experience</span></MenuItem>
              <MenuItem><i class="fas fa-chart-bar content-icon"></i> <span className="menu-text">Projects</span></MenuItem>
              <MenuItem><i class="fas fa-file content-icon"></i> <span className="menu-text">CV</span></MenuItem>
              <MenuItem><i class="fas fa-address-book content-icon"></i> <span className="menu-text">Contact me</span></MenuItem>
            </Menu>
          </SidebarContent>

          <SidebarFooter>
            <div className="footer-info">
              Get in touch <br /> <br />
              <a href="mailto:raedfaddoul@gmail.com"> <i class="fas fa-envelope footer-icon"></i></a> <a href="https://github.com/gitRaed"><i class="fab fa-github footer-icon"></i></a> <a href="https://www.linkedin.com/in/raed-faddoul-63b414193/" ><i class="fab fa-linkedin footer-icon"></i></a>
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
      )
  }
}

class MobileMenu extends React.Component {

  render() {

    return(

      <div className="mobile">
        
        <div className="mobile-menu">
          <img className="mobile-logo" src={require("./images/raed2.png")} alt="My face"></img>
          <div className="mobile-logo-titre">FADDOUL EL-ACHKAR RAED <br /> FULL STACK SOFTWARE ENGINEER</div>

          <div className="mobile-contact-info">
            <a href="mailto:raedfaddoul@gmail.com"><i class="fas fa-envelope mobile-footer-icon"></i></a>  <a href="https://github.com/gitRaed"><i class="fab fa-github mobile-footer-icon"></i></a> <a href="https://www.linkedin.com/in/raed-faddoul-63b414193/" ><i class="fab fa-linkedin mobile-footer-icon"></i></a>

            <div class="dropdown mobile-bouton-menu">
              <button class="mobile-bouton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bars"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item dropdown-link" href="#">About me</a>
                <a class="dropdown-item dropdown-link" href="#">Experience</a>
                <a class="dropdown-item dropdown-link" href="#">Projects</a>
                <a class="dropdown-item dropdown-link" href="#">CV</a>
                <a class="dropdown-item dropdown-link" href="#">Contact me</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state= {

      isMobile : false
    }
  }
  componentDidMount() {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      
      this.setState({
        isMobile: true
      })
    }
  }

  render() {

    return (
      <div>
        {(!this.state.isMobile) ? <OtherMenu />: <MobileMenu />}
      </div>
    );
  }
}

export default App;
