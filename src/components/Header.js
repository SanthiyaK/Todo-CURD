import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        
        <header className="header bg-secondary p-2">
            <nav className="header-nav">
            
            <ul class="nav  justify-content-center">
                <div class="nav text-warning space-between m-1"><h4>TASK MANAGEMENT SYSTEM</h4></div>
                 <ul class="nav  justify-content-center"></ul>
            <li class="nav-item">  <Link to="/signup" className="nav-link text-warning mx-5">Signup</Link></li>
            <li class="nav-item"> <Link to="/login" className="nav-link text-warning mx-5">Login</Link></li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;