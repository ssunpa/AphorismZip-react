import React, { Component } from 'react';
import Modal from 'react-modal';

class NewItem extends Component {
    render() {
        return (
            <Modal
                className="modalView"
                isOpen={this.props.isOpen}
                onRequestClose={this.props.close}
            >
                <header>Add New Aphorism✍</header>
                <section>
                    <textarea name="content" cols="32" rows="13"></textarea>
                    <textarea name="origin" cols="32" rows="3"></textarea>
                </section>
                <footer>
                    <button>Add Item!</button>
                </footer>
            </Modal>
        );
    }
}

export default NewItem;
