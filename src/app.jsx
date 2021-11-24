import { Component } from 'react';
import './app.css';
import Items from './components/items';
import Navbar from './components/navbar';

class App extends Component {
    state = {
        items: [
            {
                id: 1,
                content:
                    '꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.',
                origin: '월트 디즈니',
            },
        ],
    };

    handleAdd = (content, origin) => {
        const items = [
            ...this.state.items,
            { id: Date.now(), content, origin },
        ];
        this.setState({ items });
    };

    handleDelete = (choose) => {
        const items = this.state.items.filter((item) => item.id !== choose.id);
        this.setState({ items });
    };

    render() {
        return (
            <>
                <Navbar />
                <Items
                    initItme={this.state.items}
                    onAdd={this.handleAdd}
                    onDelete={this.handleDelete}
                />
            </>
        );
    }
}

export default App;
