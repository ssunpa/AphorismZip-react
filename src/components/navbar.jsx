import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <>
                <header className="navbar">
                    <sapn className="navbar__logo">Aphorism</sapn>
                    <button className="navbar__addBtn">
                        <i class="fas fa-plus"></i>
                    </button>
                </header>
            </>
        );
    }
}

export default Navbar;
