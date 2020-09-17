import React from 'react';
import '../style/App.css';
import '../style/mobile.css';
import { LaptopMenu } from './laptop';
import { MobileMenu } from './mobile'

class App extends React.Component {

  constructor(props) {

    super(props);
    this.state= {
      isMobile : false,
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
        {(!this.state.isMobile) ? <LaptopMenu/>: <MobileMenu/>}
      </div>
    );
  }
}

export default App;
