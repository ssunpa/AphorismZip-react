import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { aphorism, origin } = this.props.test;
        return (
            <>
                <li className="item">
                    <h1 className="item__content">{aphorism}</h1>
                    <h2 className="item__origin">{origin}</h2>
                </li>
            </>
        );
    }
}

export default Item;
