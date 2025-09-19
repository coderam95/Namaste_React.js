import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurantsData from './restaurants.json'

//React element was very clumsy to write and so the facebook developers created JSX.

//JSX

const jsxHeading = <h1 id='header' tabIndex='1' >NamasteReact using JSX</h1>;

const elem = <span>React element</span>

console.log(jsxHeading,'jsxHeading');


const root = ReactDOM.createRoot(document.getElementById('root'));

const number = 1000;

//React Components
//Class based components and Functional Components (two types of components in react)

console.log(restaurantsData, 'restaurant data');

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

const mediaLink = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

const RestaurantCard = (props) => {
    console.log(props);
    const {cloudinaryImageId, name, cuisines, avgRating } = props.resList.info;
    return(
        <div className='restaurantCard' style={styleCard}>
        <img 
        className='restaurantImage'
        alt='res-image'
        src={mediaLink + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>   
        <h4>{props.resList.info.sla.deliveryTime} mins</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restaurantContainer'>
                {
                    restaurantsData.restaurants.map(restaurant => {
                        return (
                        <RestaurantCard key={restaurant.info.id} resList={restaurant} />
                    )
                    })
                }
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
