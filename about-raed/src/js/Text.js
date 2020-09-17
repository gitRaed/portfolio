import React from 'react';
import '../style/Text.css';


export class About extends React.Component {

    render() {

        return(

            <div>
                <h2>About me</h2>

                <p>
                    Hello world ! My name is Faddoul El-Achkar Raed and I'm 20. I'm a libanese guy currently living in Ivory Coast 
                    and I am a huge fan of learning.  <br/>
                    I speak french (native) and actively learning english alone. <br/>
                    I love programming, video games, reading and, most importantly, i'am pretty curious. I ask to much questions 
                    (it annoys the people around me) and make tons of research about things that titillate my curiousity.<br/>
                    I started to well learn developement in 2019. So, do consider that i'm new to this amazing world.<br/>
                    Please do check my projects to understand what i did in a year ! And don't forget to also check my Experience
                    to see the courses i did ! <br/>

                    As finding a dev job is hard in my country, I am open to anything ! I promise, you won't regret to hire a young dev who loves learning !
                </p>
            </div>
        )
    }
}

export class Experience extends React.Component {

    render() {

        return(

            <div>
                <h2>Experience</h2>

                <p>Please, do contact me for more information.</p>

                <div>
                    <div> 
                        <h5><a href="http://www.ufra-ci.org/new/">UFRA</a></h5>
                        <h6>Abidjan, Ivory Coast</h6>
                        <ul>
                            <li>2017-2020, ESGI : Bachelor in informatic basics </li>
                        </ul>
                    </div>

                    <div> 
                        <h5><a href="https://www.freecodecamp.org/">FreeCodeCamp</a></h5>
                        <h6>San Francisco</h6>
                        <ul>
                            <li>2019-2020, JavaScript Algorithms and Data Structures : <a href="https://www.freecodecamp.org/certification/faddoul-raed/javascript-algorithms-and-data-structures">certification</a> </li>
                            <li>2020, Front-end Librairies: <a href="https://www.freecodecamp.org/certification/faddoul-raed/front-end-libraries">certification</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export class Projects extends React.Component {

    render() {

        return (

            <div>
                Projects
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

            <div>
                <h2>Contact me</h2>
                <table>
                    <tr>
                        <td>Email :</td>
                        <td><a href="mailto:raedfaddoul@gmail.com"><i className="fas fa-envelope"></i> raedfaddoul@gmail.com</a> </td>
                    </tr>

                    <tr>
                        <td>Github :</td>
                        <td><a href="https://github.com/gitRaed"><i className="fab fa-github"></i>gitRaed</a> </td>
                    </tr>

                    <tr>
                        <td>LinkedIn :</td>
                        <td> <a href="https://www.linkedin.com/in/raed-faddoul-63b414193/" ><i className="fab fa-linkedin"></i> Faddoul Raed</a> </td>
                    </tr>

                </table>
            </div>
        )
    }
}
