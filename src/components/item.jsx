import React, { Component } from 'react';

class Item extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.initItme);
    };
    render() {
        const { content, origin } = this.props.initItme;
        return (
            <>
                <li className="item">
                    <button className="item__delete" onClick={this.onDelete}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <div className="item__content">{content}</div>
                    <div className="item__origin">{origin}</div>
                </li>
            </>
        );
    }
}

export default Item;
