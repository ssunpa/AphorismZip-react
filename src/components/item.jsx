import React, { Component } from 'react';

class Item extends Component {
    render() {
        const { content, origin } = this.props.test;
        return (
            <>
                <li className="item">
                    <div className="item__content">{content}</div>
                    <div className="item__origin">{origin}</div>
                </li>
            </>
        );
    }
}

export default Item;
