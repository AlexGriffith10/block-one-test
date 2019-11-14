import React from 'react'
import {HEADER_TITLE} from '../../constants/Constants';

function Header() {
    return (
        <div>
            <header className="jumbotron p-3 p-md-5 text-white rounded bg-dark">{HEADER_TITLE}</header>
        </div>
    )
}

export default Header
