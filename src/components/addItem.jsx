import React, { Component } from 'react';
import NewItem from './newItem';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <div className="add">
                <button className="add__btn" onClick={this.openModal}>
                    <i className="fas fa-plus"></i>
                </button>
                <NewItem
                    isOpen={this.state.isModalOpen}
                    close={this.closeModal}
                />
            </div>
        );
    }
}

export default AddItem;
