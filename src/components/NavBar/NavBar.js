import React from 'react';
import '../NavBar/NavBar.css';
import logo from '../../assets/logomangas.png'

export default function NavBar(){
return(
    <header className="header">
        <div className="divLogo"> 
            <img id="logo" src={logo} />
        </div>
        <ul className="menu">
            <li><a className="linkStyle" href="index.html">Home</a></li>
            <li><a className="linkStyle" href="products.html">Products</a></li>
            <li><a className="linkStyle" href="contact.html">Contact</a></li>
            <li><a className="linkStyle" href="about.html">About</a></li>
        </ul>
        <ul className="menu2">
            <li><a href="login.html"> <img className="imgheader" src="https://i.ibb.co/xfHJPsc/carrito-de-compras.png" /></a></li>
            <li><a href="chart.html"> <img className="imgheader" src="https://i.ibb.co/HGfVk7S/users.png" /></a></li>
        </ul>
    </header>
)
};