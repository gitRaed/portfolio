import React from 'react';
import '../style/Text.css';


export class About extends React.Component {

    render() {

        return(

            <div className="content-display">

                <h2>About me</h2>
                <hr/>
                <p>
                    <img className="logo" src={require("../images/raed2.png")} alt="My face"></img>
                    Hello world ! My name is Faddoul El-Achkar Raed and I was born the 10/11/1999. I'm a libanese guy currently living in Ivory Coast 
                    and I am a huge fan of learning.  <br/> <br/>
                    I speak french (native) and actively learning english. <br/> <br/>
                    I love programming, video games, reading and, most importantly, I am pretty curious. I ask to much questions 
                    (it annoys the people around me) and make tons of research about things that titillate my curiousity.<br/> <br/>
                    I started to well learn developement in 2019. So, do consider that i'm new to this amazing world.<br/> <br/>
                    Please do check my projects to understand what I did in a year ! And don't forget to also check my Course
                    to see my journey ! <br/> <br/>

                    I code with: 
                    <ul>
                        <li>Html5</li>
                        <li>Css3, Sass, Bootstrap</li>
                        <li>JavaScript, React, Angular, Node</li>
                    </ul>

                    As finding a dev job is hard in my country, I am open to anything ! I promise, you won't regret to hire a young dev who loves learning !
                </p>
            </div>
        )
    }
}

export class Course extends React.Component {

    render() {

        return(

            <div className="content-display">
                <h2>Course</h2>
                <hr/>
                <p>Please, do contact me for more information.</p>


                <h4>Education</h4>

                <div className="course-div"> 
                    <h5><a href="http://www.ufra-ci.org/new/">UFRA</a></h5>
                    <h6>Abidjan, Ivory Coast</h6>
                    <ul>
                        <li>2017-2020, ESGI : Bachelor in informatic basics </li>
                    </ul>
                </div>

                <div className="course-div"> 
                    <h5><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></h5>
                    <h6>San Francisco</h6>
                    <ul>
                        <li>2019-2020, JavaScript Algorithms and Data Structures : <a href="https://www.freecodecamp.org/certification/faddoul-raed/javascript-algorithms-and-data-structures">certification</a> </li>
                        <li>2020, Front-end Librairies: <a href="https://www.freecodecamp.org/certification/faddoul-raed/front-end-libraries">certification</a> </li>
                    </ul>
                </div>

                <h4>Experience</h4>

                <div className="course-div"> 
                    <h5><a href="https://absoftwork.com/">Ab Soft Work</a></h5>
                    <h6>Abidjan, Ivory Coast</h6>
                    <ul>
                        <li>01/07/2019 – 31/08/2019 : intership in the reaseach & development team</li>
                        <li>03/02/2020 – 04/05/2020 : intership in the research & development team, pickseat was made there !</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export class Projects extends React.Component {

    render() {

        return (

            <div className="content-display">

                <h2>Projects</h2>
                <hr/>
                <div className="card project-div">
                    <div className="card-logo">
                        <img src={require("../images/pickseat-banner.png")} className="card-img-top" alt="pickseat banner"></img>
                    </div>
                    <div className="card-body">
                        <hr/>
                        <h5 className="card-title">Pickseat</h5>
                        <hr/>
                        <p className="card-text">
                            Pickseat is a carpooling web app that allows you to become friend with strangers who has the same route as you. <br/>
                            It can be used :
                            <ul>
                                <li>As a market place for drivers</li>
                                <li>To find new friends</li>
                                <li>To help pedestrian</li>
                                <li>As a quiet friend navigator who knows every route</li>
                            </ul>
                        </p>

                        <p>
                            Made with : 
                            <a className="btn btn-primary" href="https://angular.io/">Angular</a>
                            <a className="btn btn-primary" href="https://leafletjs.com/">Leaflet.Js</a>
                            <a className="btn btn-primary" href="https://nodejs.org/en/">Node</a>
                            <a className="btn btn-primary" href="https://sql.sh/">SQL</a>
                        </p>

                        <a href="https://github.com/gitRaed/pickseat" className="btn btn-info">Github repo here !</a>

                    </div>
                </div>


                <div className="card project-div">
                    
                    <div className="card-logo">
                        <img src={require("../images/portfolio-banner.png")} className="card-img-top" alt="Raed portfolio banner"></img>
                    </div>

                    <div className="card-body">
                        <hr/>
                        <h5 className="card-title">This portfolio !</h5>
                        <hr/>
                        <p className="card-text">
                            This portfolio is a web app to present FADDOUL EL-ACHKAR RAED. <br/>
                            It is used as :
                            <ul>
                                <li>A way to try new technologies</li>
                                <li>To present me and my amazing journey</li>
                            </ul>
                        </p>

                        <p>
                            Made with : 
                            <a className="btn btn-primary" href="https://fr.reactjs.org/">React.js</a>
                            <a className="btn btn-primary" href="https://create-react-app.dev/">Create-react-app</a>
                        </p>

                        <a href="https://github.com/gitRaed/portfolio" className="btn btn-info">Github repo here !</a>

                    </div>

                </div>

                <div className="card project-div">
                        
                        <div className="card-logo">
                            <img src={require("../images/fcc-banner.jpg")} className="card-img-top" alt="FreeCodeCamp banner"></img>    
                        </div>

                        <div className="card-body">
                            <hr/>
                            <h5 className="card-title">FreeCodeCamp frond end projects</h5>
                            <hr/>
                            <p className="card-text">
                                Those projects are web app used to demonstrate my skills using front end technologies. <br/>
                                Made with : 
                                <a href="https://fr.reactjs.org/" className="btn btn-primary">React.js</a>
                            </p>
                            <a href="https://codepen.io/gitraed/pen/VwamMaN" className="btn btn-info">Random Quote Machine</a>
                            <a href="https://codepen.io/gitraed/pen/poyPmGb?editors=0010" className="btn btn-info">Drum Machine</a>
                            <a href="https://codepen.io/gitraed/pen/mdPWEXr" className="btn btn-info">Markdown Previewer</a>

                        </div>
                    </div>  
            </div>
        )
    }
}

export class CV extends React.Component {

    render() {

        return (

            <div>
                CV
            </div>
        )
    }
}

export class Contact extends React.Component {

    render() {

        return (

            <div className="content-display">
                <h2>Contact me</h2>
                <hr/>
                <table>
                    <tr>
                        <td className="colone1">Email :</td>
                        <td><a href="mailto:raedfaddoul@gmail.com"> raedfaddoul@gmail.com</a> </td>
                    </tr>

                    <tr>
                        <td className="colone1">Github :</td>
                        <td><a href="https://github.com/gitRaed">gitRaed</a> </td>
                    </tr>

                    <tr>
                        <td className="colone1">LinkedIn :</td>
                        <td> <a href="https://www.linkedin.com/in/raed-faddoul-63b414193/" > Faddoul Raed</a> </td>
                    </tr>

                </table>
            </div>
        )
    }
}
