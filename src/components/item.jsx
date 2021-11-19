import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { aphorism, origin } = this.props.test;
        return (
            <>
                <li className="item">
                    <h1>{aphorism}</h1>
                    <h2>{origin}</h2>
                </li>
            </>
        );
    }
}

export default Item;
