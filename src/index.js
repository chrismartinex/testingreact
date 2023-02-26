// import the react and the react dom library
import React from 'react';
import { Form } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import App, {message} from './App';
// import App,{ message }from './App'


// get a reference to the div and with id root
const el = document.getElementById('root');
// tell react to take control of the component
const root = ReactDOM.createRoot(el);
//create component


//show components on the screen
root.render(<App/>);

// const date = new Date();
// const time = date.toLocaleTimeString();
