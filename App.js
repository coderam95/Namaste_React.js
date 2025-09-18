import React from 'react';
import ReactDOM from 'react-dom/client';

//React element was very clumsy to write and so the facebook developers created JSX.

//JSX

const jsxHeading = <h1 id='header' tabIndex='1' >NamasteReact using JSX</h1>;

const elem = <span>React element</span>

console.log(jsxHeading,'jsxHeading');


const root = ReactDOM.createRoot(document.getElementById('root'));

const number = 1000;

//React Components
//Class based components and Functional Components (two types of components in react)

const HeadingComponenent = () => {
    return (
        <div>
        {jsxHeading}
        {number}
        {TitleComponent()}
    <h1>Namaste React functional component</h1>
    </div>
    );
}

const TitleComponent = () => {
    return <h2>I am a react title</h2>
}


const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <img className='logoImage' src='https://i.pinimg.com/736x/83/c6/a9/83c6a9427e6c36857ef6cbc10c9e9565.jpg' /> 
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: '#f0f0f0',

}

const RestaurantCard = () => {
    return(
        <div className='restaurantCard' style={styleCard}>
        <img 
        className='restaurantImage'
        alt='res-image'
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/14/c6faebc3-727d-4fc1-b0b4-7e9df5dd757b_558222.jpg' />
        <h3>Geetham Veg Restaurant</h3>
        <h4>South Indian, North Indian, Chinese</h4>
        <h4>4.7 Stars</h4>
        <h4>25 Mins</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restaurantContainer'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>
        </div>
    )
}

const  AppLayout = () => {
    return(
        <div className='app'>
            <Header />
            <Body />

        </div>
    )
}
root.render(<AppLayout />);
