import React from 'react';

function Logo(){
    return(
        <div className='Logo'>
            Logo
        </div>
    )
}

function NavLink(props){
    return(
        <div>
            <a className='NavLink'>{props.txt}</a>
        </div>
    )
}

function NavBar(){
    return(
        <div className='navigationBar'>
            <Logo />
            <div className='navigation'>
                <NavLink txt='Online Store' />
                <NavLink txt='Products' />
                <NavLink txt='About Us' />
            </div>
        </div>
    )
}

export default NavBar