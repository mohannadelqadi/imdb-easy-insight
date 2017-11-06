import React from 'react';
import ReactDOM from 'react-dom';
import Common from './../lib/Common.js'
import { BrowserRouter, Link, Route  } from 'react-router-dom'
import $ from 'jquery'

class Header extends React.Component{

    _togleMobileMenu(){
        $(".mobile-navigation").slideToggle();
    }

    _getMenuItemClass(){
        return ' current-menu-item';
    }

	render(){

        let active_mi = this.props.active_mi;

		return(
			<header className="site-header">
                <div className="container">
                    <Link to="/" id="branding">
                        <img src="/images/logo.png" alt="" className="logo" />
                        <div className="logo-copy">
                            <h1 className="site-title">Company Name</h1>
                            <small className="site-description">Tagline goes here</small>
                        </div>
                    </Link>
                    <div className="main-navigation">
                        <button type="button" className="menu-toggle" onClick={() => this._togleMobileMenu()}><i className="fa fa-bars"></i></button>
                        <ul className="menu">
                            <li className={"menu-item " + (active_mi === 'home' ? 'current-menu-item' : '') } ><Link to='/'>Home</Link></li>
                            <li className={"menu-item " + (active_mi === 'movies' ? 'current-menu-item' : '')}><Link to='/movies'>Movies</Link></li>
                            <li className="menu-item"><Link to='/joinus'>Join us</Link></li>
                            <li className="menu-item"><Link to='/contact'>Contact</Link></li>
                        </ul>
                        <form action="#" className="search-form">
                            <input type="text" placeholder="Search..." />
                            <button><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="mobile-navigation">
                        <ul className="menu">
                            <li className="menu-item current-menu-item"><Link to='/'>Home</Link></li>
                            <li className="menu-item"><Link to='/theatres'>Movies In Theatres</Link></li>
                            <li className="menu-item"><Link to='/review'>Review</Link></li>
                            <li className="menu-item"><Link to='/joinus'>Join us</Link></li>
                            <li className="menu-item"><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
		)
	}
}

export default Header