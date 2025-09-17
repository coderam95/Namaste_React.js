
const parent = React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'}, 
    [React.createElement('h1', {id: 'h1'}, 'I am a h1 tag'), React.createElement('h2', {id: 'h2'}, 'I am an h2 tag')]));


const heading = React.createElement('h1', {id: 'heading', xyz: 'abc'}, 'Hello World from React.js');
console.log(parent, 'parent');
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

console.log(root, 'root');