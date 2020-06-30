/*
Vanilla JS

const element = document.createElement('h1');

element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');

container.appendChild(element);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css';



//With React i can build html into JS script without the needing of 
//creating an element using createElement
// const jsx = <h1>Hello, Platzi Badges - React</h1>;

// const element = React.createElement('a',{href: 'https://platzi.com'},'Ir a Platzi');
// const name = 'Lupita'
// const element = React.createElement('h1',{},`Hola, soy ${name}`)
// const jsx = <h1>Hola soy, {name}</h1>

const container = document.getElementById('app');

//ReactDOM.render() permits me to append content inside something
//ReactDOM.render('what','where');
//In this case it's element being appended to it's container
ReactDOM.render(<BadgeNew/>, container);
