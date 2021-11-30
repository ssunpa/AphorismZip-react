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
            alert('error');
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
                    <span className="modal__headerName">새 글귀 작성</span>
                    <button
                        className="modal__headerBtn"
                        onClick={this.props.close}
                    >
                        <i className="far fa-times-circle"></i>
                    </button>
                </header>
                <form className="modal__form">
                    <div className="form__content">
                        글귀 :
                        <input
                            type="text"
                            className="input__content"
                            ref={this.contentInput}
                        />
                    </div>
                    <div className="form__origin">
                        출처 :
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
                        추가하기
                    </button>
                </footer>
            </Modal>
        );
    }
}

export default NewItem;
