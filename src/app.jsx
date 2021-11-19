import { Component } from 'react';
import './app.css';
import Items from './components/items';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        items: [
            { id: 1, aphorism: 'first aphorism...', origin: 'testone' },
            { id: 2, aphorism: 'second aphorism...', origin: 'testtwo' },
            { id: 3, aphorism: 'third aphorism...', origin: 'testthree' },
        ],
    };
    render() {
        return (
            <>
                <Navbar />
                <Items testitems={this.state.items} />
            </>
        );
    }
}

export default App;
