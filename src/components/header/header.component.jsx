import React from 'react';
import { ReactComponent as Logo} from '../../assets/crown (1).svg';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden, toggleCartHidden }) => (
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
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);