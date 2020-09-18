import React from 'react';
import {About, Course, Projects, CV, Contact} from './Text'
export function displaying(number) {

    let content;

    switch (number) {

        case 1:
            content = <About />
        break;

        case 2:
            content = <Course />
        break;

        case 3:
            content = <Projects />
        break;

        case 4:
            content = <CV />
        break;

        case 5:
            content = <Contact />
        break;

        default:
            content = <About />
        break;

    }

    return content;
}