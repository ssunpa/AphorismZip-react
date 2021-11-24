import React, { Component } from 'react';
import AddItem from './addItem';
import Item from './item';

class Items extends Component {
    render() {
        return (
            <>
                <ul className="items">
                    {this.props.initItme.map((item) => (
                        <Item
                            key={item.id}
                            initItme={item}
                            onDelete={this.props.onDelete}
                        />
                    ))}
                </ul>
                <AddItem onAdd={this.props.onAdd} />
            </>
        );
    }
}

export default Items;
