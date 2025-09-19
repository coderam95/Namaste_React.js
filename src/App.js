import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

//React element was very clumsy to write and so the facebook developers created JSX.

//JSX

const jsxHeading = <h1 id='header' tabIndex='1' >NamasteReact using JSX</h1>;

const elem = <span>React element</span>

console.log(jsxHeading,'jsxHeading');


const root = ReactDOM.createRoot(document.getElementById('root'));

const number = 1000;

//React Components
//Class based components and Functional Components (two types of components in react)

const  AppLayout = () => {
    return(
        <div className='app'>
            <Header />
            <Body />

        </div>
    )
}
root.render(<AppLayout />);
