import React from 'react';
import ReactDOM from 'react-dom/client';


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


const RestoCard = () => {
    return(
    <div className='restoCard'>
        <img 
        alt='restoImage' 
        className='restoImage' src='https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/j6xodxgd7hukpzkdzzz4' />
        <h3>Basil with a twist</h3>
        <h4>Italian, Desserts</h4>
        <h4>4.9 Stars</h4>
        <h4>30 Mins</h4>
    </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
            <div className='restoCardContainer'>
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />

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
  