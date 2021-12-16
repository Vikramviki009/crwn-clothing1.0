import React from 'react';
import { ReactComponent as Logo} from '../../assets/crown (1).svg';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className="logo-container" to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option' >SHOP</Link>
            <Link to='/shop' className='option'>CONTACT US</Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                    <Link className="option" to = "/signin">SIGN IN</Link>
                )
            }
        </div>
    </div>
);

export default Header;