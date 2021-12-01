import React, { Component } from 'react';
import Modal from 'react-modal';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.contentInput = React.createRef();
        this.originInput = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const content = this.contentInput.current.value;
        const origin = this.originInput.current.value;

        if (content && origin) {
            this.props.onAdd(content, origin);
            this.props.close();
        } else {
            alert('내용을 모두 입력해주세요!');
        }
    }

    render() {
        return (
            <Modal
                className="modalView"
                isOpen={this.props.isOpen}
                onRequestClose={this.props.close}
            >
                <header className="modal__header">
                    <span className="modal__headerName">New Aphorism</span>
                    <button
                        className="modal__headerBtn"
                        onClick={this.props.close}
                    >
                        <i className="far fa-times-circle"></i>
                    </button>
                </header>
                <form className="modal__form">
                    <div className="form__content">
                        content :
                        <input
                            type="text"
                            className="input__content"
                            ref={this.contentInput}
                        />
                    </div>
                    <div className="form__origin">
                        from :
                        <input
                            type="text"
                            className="input__origin"
                            ref={this.originInput}
                        />
                    </div>
                </form>
                <footer>
                    <button
                        className="modal__footerBtn"
                        onClick={this.onSubmit}
                    >
                        Add new item!
                    </button>
                </footer>
            </Modal>
        );
    }
}

export default NewItem;
