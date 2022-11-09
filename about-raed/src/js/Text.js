import React from 'react';
import '../style/Text.css';
import {SinglePage} from './pdf';

export class About extends React.Component {

    render() {

        return(

            <div className="content-display">

                <h2>About me</h2>
                <hr/>
                <p>
                    <img className="logo" src={require("../images/moi.jpg")} alt="My face"></img>
                    Hello world ! My name is Faddoul El-Achkar Raed and I was born the 10/11/1999. I'm a lebanese guy currently living in Ivory Coast 
                    and I am a huge fan of learning.  <br/> <br/>
                    I speak french (native) and I am actively learning english. <br/> <br/>
                    I love programming, video games, reading and, most importantly, I am pretty curious. I ask to much questions 
                    (it annoys the people around me) and make tons of research about things that titillate my curiousity.<br/> <br/>
                    I started to well learn development in 2019. So, do consider that I'm new to this amazing world.<br/> <br/>
                    Please do check my projects to understand what I did alone ! And don't forget to also check my Course
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
                    <h5><a target='_blank' rel='noopener noreferrer' href="http://www.ufra-ci.org/new/">UFRA</a></h5>
                    <h6>Abidjan, Ivory Coast</h6>
                    <ul>
                        <li>2017-2020, ESGI : Bachelor in informatic basics </li>
                    </ul>
                </div>

                <div className="course-div"> 
                    <h5><a target='_blank' rel='noopener noreferrer' href="https://www.freecodecamp.org/">FreeCodeCamp</a></h5>
                    <h6>San Francisco</h6>
                    <ul>
                        <li>2021-2022, Back end development and APIs: <a target='_blank' rel='noopener noreferrer' href="https://www.freecodecamp.org/certification/faddoul-raed/back-end-development-and-apis">Certification</a> </li>
                        <li>2021, Responsive Web Design: <a target='_blank' rel='noopener noreferrer' href="https://www.freecodecamp.org/certification/faddoul-raed/responsive-web-design">Certification</a> </li>
                        <li>2020, Front-end Librairies: <a target='_blank' rel='noopener noreferrer' href="https://www.freecodecamp.org/certification/faddoul-raed/front-end-libraries">Certification</a> </li>
                        <li>2019-2020, JavaScript Algorithms and Data Structures : <a target='_blank' rel='noopener noreferrer' href="https://www.freecodecamp.org/certification/faddoul-raed/javascript-algorithms-and-data-structures">Certification</a> </li>
                    </ul>
                </div>

                <h4>Experience</h4>

                <div className="course-div"> 
                    <h5><a target='_blank' rel='noopener noreferrer' href="https://absoftwork.com/">Ab Soft Work</a></h5>
                    <h6>Abidjan, Ivory Coast</h6>
                    <ul>
                        <li>03/02/2020 – 04/05/2020 : internship in the research & development team, pickseat was made there !</li>
                        <li>01/07/2019 – 31/08/2019 : internship in the research & development team</li>
                    </ul>
                </div>

                <div className="course-div"> 
                    <h5><a target='_blank' rel='noopener noreferrer' href="https://s2mi-ci.com">2MI</a></h5>
                    <h6>Abidjan, Ivory Coast</h6>
                    <ul>
                        <li>09/07/2022 – 11/07/2022:  internship in the purchasing department of 2MI</li>
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
                            <a className="btn btn-primary" target='_blank' rel='noopener noreferrer' href="https://angular.io/">Angular</a>
                            <a className="btn btn-primary" target='_blank' rel='noopener noreferrer' href="https://leafletjs.com/">Leaflet.Js</a>
                            <a className="btn btn-primary" target='_blank' rel='noopener noreferrer' href="https://nodejs.org/en/">Node</a>
                            <a className="btn btn-primary" target='_blank' rel='noopener noreferrer' href="http://expressjs.com">Express</a>
                            <a className="btn btn-primary" target='_blank' rel='noopener noreferrer' href="https://sql.sh/">SQL</a>
                        </p>

                        <a target='_blank' rel='noopener noreferrer' href="https://github.com/gitRaed/pickseat" className="btn btn-info">Github repo here !</a>

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
                            <a className="btn btn-primary" target='_blank' rel='noopener noreferrer' href="https://fr.reactjs.org/">React.js</a>
                            <a className="btn btn-primary" target='_blank' rel='noopener noreferrer' href="https://create-react-app.dev/">Create-react-app</a>
                        </p>

                        <a target='_blank' rel='noopener noreferrer' href="https://github.com/gitRaed/portfolio" className="btn btn-info">Github repo here !</a>

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
                                These projects are web apps used to demonstrate my skills using front end technologies. <br/>
                                Made with : 
                                <a target='_blank' rel='noopener noreferrer' href="https://fr.reactjs.org/" className="btn btn-primary">React.js</a>
                            </p>
                            <a target='_blank' rel='noopener noreferrer' href="https://codepen.io/gitraed/pen/VwamMaN" className="btn btn-info">Random Quote Machine</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://codepen.io/gitraed/pen/poyPmGb?editors=0010" className="btn btn-info">Drum Machine</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://codepen.io/gitraed/pen/mdPWEXr" className="btn btn-info">Markdown Previewer</a>

                        </div>
                    </div> 
                    
                    <div className="card project-div">
                    <div className="card-logo">
                        <img src={require("../images/yelp_logo.jpg")} className="card-img-top" alt="yelp banner"></img>
                    </div>
                    <div className="card-body">
                        <hr/>
                        <h5 className="card-title">Yelp clone</h5>
                        <hr/>
                        <p className="card-text">
                            Made with pern stack (pern stack is an app created with PostgreSql Express React and Node), this app is a little clone 
                            of yelp. It is not as useful and complete as the original yelp, but it was a test for myself to find a way to rate something, 
                            to hone up my react skills and also to learn postgreSql. <br/> <br/>

                            Here is the link to original yelp : <a target='_blank' rel='noopener noreferrer' href="https://www.yelp.com">Yelp</a>
                        </p>

                        <p>
                            Made with : 
                            <a className="btn btn-primary" rel='noopener noreferrer' target='_blank' href="https://fr.reactjs.org/">React.js</a>
                            <a className="btn btn-primary" rel='noopener noreferrer' target='_blank' href="http://expressjs.com">Express</a>
                            <a className="btn btn-primary" rel='noopener noreferrer' target='_blank' href="https://nodejs.org/en/">Node</a>
                            <a className="btn btn-primary" rel='noopener noreferrer' target='_blank' href="https://www.postgresql.org">PostgreSql</a>
                        </p>

                        <a target='_blank' href="https://github.com/gitRaed/yelp" rel='noopener noreferrer' className="btn btn-info">Github repo here !</a>

                    </div>
                </div>

                <div className="card project-div">
                        
                        <div className="card-logo">
                            <img src={require("../images/fcc-banner.jpg")} className="card-img-top" alt="FreeCodeCamp banner"></img>    
                        </div>

                        <div className="card-body">
                            <hr/>
                            <h5 className="card-title">FreeCodeCamp back end developement and APIs projects</h5>
                            <hr/>
                            <p className="card-text">
                                These projects are web apps used to demonstrate my skills using back end technologies. You can see them in real time using 
                                the links below. Do check my Github if you want to see the code.<br/>
                                Made with : 
                                <a target='_blank' rel='noopener noreferrer' href="https://nodejs.org/en/" className="btn btn-primary">Node.js</a>
                                <a target='_blank' rel='noopener noreferrer' href="https://www.mongodb.com/fr-fr" className="btn btn-primary">MongoDB</a>
                            </p>
                            <a target='_blank' rel='noopener noreferrer' href="https://boilerplate-project-filemetadata.gitraed.repl.co" className="btn btn-info">File Metadata Microservice</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://boilerplate-project-exercisetracker.gitraed.repl.co" className="btn btn-info">Exercise Tracker Microservice</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://boilerplate-project-urlshortener.gitraed.repl.co" className="btn btn-info">URL Shortener Microservice</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://boilerplate-project-headerparser.gitraed.repl.co" className="btn btn-info">Request Header Parser Microservice</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://boilerplate-project-timestamp.gitraed.repl.co" className="btn btn-info">Timestamp Microservice</a>

                        </div>
                    </div>
                    
                <div className="card project-div">
                        
                    <div className="card-logo">
                        <img src={require("../images/photo-gallery-banner.jpg")} className="card-img-top" alt="Gallery"></img>    
                    </div>

                    <div className="card-body">
                        <hr/>
                        <h5 className="card-title">Photo gallery</h5>
                        <hr/>
                        <p className="card-text">
                            This project is a kinda clone of putting images online but with cool effects ! For some reasons, my firebase database is off.<br/>
                            Made with : 
                            <a target='_blank' rel='noopener noreferrer' href="https://fr.reactjs.org" className="btn btn-primary">React</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://firebase.google.com" className="btn btn-primary">Firebase</a>
                        </p>
                        <a target='_blank' rel='noopener noreferrer' href="https://github.com/gitRaed/photo-gallery" className="btn btn-info">GitHub repo here!</a>
                        <a target='_blank' rel='noopener noreferrer' href="https://photo-gallery.gitraed.repl.co" className="btn btn-info">Website here!</a>
                    </div>
                </div>
                
            <div className="card project-div">
                        
                <div className="card-logo">
                    <img src={require("../images/hysteric.PNG")} className="card-img-top" alt="Hysteric-logo"></img>    
                </div>

                <div className="card-body">
                    <hr/>
                    <h5 className="card-title">Hysteric</h5>
                    <hr/>
                    <p className="card-text">
                        This project is an online shop. This website is for training purpose only and to hone my skills.
                        The articles present on this website aren’t sell, the original links of those articles are shown.
                        Please pay a visit to the originals shops if you’re interested in an article.<br/>
                        Deployed on vercel. Check the links below if you're interested! <br/>
                        Made with : 
                        <a target='_blank' href="https://fr.reactjs.org" rel='noopener noreferrer' className="btn btn-primary">React</a>
                    </p>
                    <a target='_blank' href="https://github.com/gitRaed/hysteric" rel='noopener noreferrer' className="btn btn-info">GitHub repo here!</a>
                    <a target='_blank' href="https://hysteric-vercel-deploy.vercel.app" rel='noopener noreferrer' className="btn btn-info">Website here!</a>
                </div>
            </div>

            </div>
        )
    }
}


export class CV extends React.Component {

    
    render() {

        return (

            <div className="content-display">
                
                <h2>CV</h2>
                <hr/>
                <div>

                    <SinglePage pdf={require("../file/cv.pdf")} />

                </div>
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
                        <td><a target="_blank" rel='noopener noreferrer' href="mailto:raedfaddoul@gmail.com"> raedfaddoul@gmail.com</a> </td>
                    </tr>

                    <tr>
                        <td className="colone1">Github :</td>
                        <td><a target="_blank" rel='noopener noreferrer' href="https://github.com/gitRaed">gitRaed</a> </td>
                    </tr>

                    <tr>
                        <td className="colone1">LinkedIn :</td>
                        <td> <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/raed-faddoul-63b414193/" > Faddoul Raed</a> </td>
                    </tr>

                </table>
            </div>
        )
    }
}
