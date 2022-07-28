import React, { Fragment, useContext } from 'react';
import NavButton from './NavButton';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = (props) => {
    const [auth] = useContext(AuthContext);

    return (
        <Fragment>
            <div style={{
                backgroundColor: "#c2e0ef",
                position: 'fixed',
                width: '100%',
                zIndex: 9999,
                top: 0,
                left: 0,
                height: '75px',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h1 style={{
                    fontFamily: "monospace",
                    fontWeight: 'bold',
                    fontSize: '2.5em',
                    margin: "0 20px"
                }}>Class Manager</h1>
                <div style={{
                    margin: '0 20px',
                    flexDirection: 'row',
                    background: "transparent",
                    userSelect: "none",
                    alignItems: 'center',
                }}>
                    {auth.id ? (<p>Hi {auth.name}</p>) : null}
                    <NavButton to="/" label='Home' />
                    <NavButton to="/login" label="Sign in" />
                    <NavButton to="/profile" label="Profile"/>
                    <NavButton to="/students" label="All Students"/>
                    
                </div>
            </div>
            <div style={{ height: '75px' }} />
        </Fragment>
    )
}

export default Navbar;