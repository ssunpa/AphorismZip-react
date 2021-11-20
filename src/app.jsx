import { Component } from 'react';
import './app.css';
import Items from './components/items';
import Navbar from './components/navbar';
import AddItem from './components/addItem';

class App extends Component {
    state = {
        items: [
            { id: 1, aphorism: 'first aphorism...', origin: 'testone' },
            { id: 2, aphorism: 'second aphorism...', origin: 'testtwo' },
            { id: 3, aphorism: 'third aphorism...', origin: 'testthree' },
            { id: 4, aphorism: 'fourth aphorism...', origin: 'testfour' },
            { id: 5, aphorism: 'fifth aphorism...', origin: 'testfive' },
            { id: 6, aphorism: 'sixth aphorism...', origin: 'testsix' },
        ],
    };
    render() {
        return (
            <>
                <Navbar />
                <Items testitems={this.state.items} />
                <AddItem />
            </>
        );
    }
}

export default App;
