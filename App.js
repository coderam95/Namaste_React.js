import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurantData from './restaurants.json';

const parent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'}, 
    [React.createElement('h1', {id: 'h1'}, 'I am a h1 tag'), React.createElement('h2', {id: 'h2'}, 'I am an h2 tag')]));


const heading = React.createElement('h1', {id: 'heading', xyz: 'abc'}, 'Hello World from React.js');
console.log(parent, 'parent');
const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
    return(
        <div className='header'>
            <div className='logoStyles'>
                <img className='logoImage' alt='logo-photo' src='https://static.vecteezy.com/system/resources/thumbnails/050/816/833/small_2x/swiggy-transparent-icon-free-png.png' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}


const mediaLink = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

const RestoCard = (props) => {
    console.log(props,'props');
    const {name, cuisines, avgRating, cloudinaryImageId} = props.resList.info;
    return(
    <div className='restoCard'>
        <img 
        alt='restoImage' 
        className='restoImage' 
        src={mediaLink + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{props.resList.info.sla.slaString}</h4>
    </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
            <div className='restoCardContainer'>
                {
                restaurantData.restaurants.map((restaurant) => {
                    return(
                        <RestoCard key={restaurant.info.id} resList={restaurant} />
                    )
                })
            }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className='AppLayout'>
            <Header />
            <Body />
        </div>
    )
}


root.render(<AppLayout />);

console.log(root, 'root');
  