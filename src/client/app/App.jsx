import React from 'react';
import MyComponent from './MyComponent.jsx';

class App extends React.Component {
    render () {
        return  <div>
            <p> Hello React 5!</p>
            <MyComponent />
        </div>;
    }
}

export default App;