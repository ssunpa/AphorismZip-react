import React, { Component } from 'react';
import Item from './item';

class Items extends Component {
    render() {
        return (
            <>
                <ul>
                    {this.props.testitems.map((item) => (
                        <Item key={item.id} test={item} />
                    ))}
                </ul>
            </>
        );
    }
}

export default Items;
