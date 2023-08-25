import React from "react";
import logo from "./images/small-logo-removebg-preview.png"
function Header(){
    return(
        <div>
        <header>
        <nav>
          <div id="#" className="navbar"> <img  className="Headerlogo" src={logo} alt="logo"/> 
           <p className="gdsc"> Google Developer Student Club</p></div>
           
            <div className="nav
            ">
        <a class="links" href="https://developers.google.com/community/dsc/">Our Team</a>
    
        <div class="dropdown-menu">
        <button class="menu-btn">About GDSC</button>
        <div class="menu-content">
        <a class="links-hidden" href="https://developers.google.com/community/dsc/leads">Leads</a>
        <a class="links-hidden" href="https://developers.google.com/community-guidelines">Community Guidelines</a>
        <a class="links-hidden" href="https://developers.google.com/community/dsc/stories">Blog</a>
        <a class="links-hidden" href="https://developers.google.com/community/dsc-solution-challenge">Solution Challenge</a>
        </div>
        </div>
        </div>
        </nav>
        <hr></hr>

        </header>
        </div>
    )
}



export default Header;