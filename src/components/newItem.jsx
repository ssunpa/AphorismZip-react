import React, { Component } from 'react';
import Modal from 'react-modal';

class NewItem extends Component {
    render() {
        return <Modal isOpen={this.props.isOpen}>test modal</Modal>;
    }
}

export default NewItem;
