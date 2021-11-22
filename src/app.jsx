import { Component } from 'react';
import './app.css';
import Items from './components/items';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        items: [
            { id: 1, content: 'first aphorism...', origin: 'testone' },
            { id: 2, content: 'second aphorism...', origin: 'testtwo' },
            { id: 3, content: 'third aphorism...', origin: 'testthree' },
            { id: 4, content: 'fourth aphorism...', origin: 'testfour' },
            { id: 5, content: 'fifth aphorism...', origin: 'testfive' },
        ],
    };

    handleAdd = (content, origin) => {
        const items = [
            ...this.state.items,
            { id: Date.now(), content, origin },
        ];
        this.setState({ items });
    };

    render() {
        return (
            <>
                <Navbar />
                <Items items={this.state.items} onAdd={this.handleAdd} />
            </>
        );
    }
}

export default App;
