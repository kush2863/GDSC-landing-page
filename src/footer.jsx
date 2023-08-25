import React from "react";

function Footer(){
    return(
       
        <div>
       
        
<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Contact</h1>
        
 
    
    <address>
      PCCOER, sb patil road Ravet,412101
          
      <a class="footer__btn" href="Gdscpccoer@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Quick Links</h2>

      <ul class="nav__ul">
        <li>
          <a href="https://gdsc.community.dev/events/">Upcoming Events</a>
        </li>

        <li>
          <a href="https://developers.google.com/community/dsc/">About GDSC</a>
        </li>
            
        <li>
          <a href="https://docs.google.com/document/d/1e5nldTEybLG0ih3vgJQCiwH1-3QZnuFs4iwUiUerca8/view">Lead Terms</a>
          <li>
          <a href="https://gdsc.community.dev/participation-terms/">Participation Terms</a>
        </li>
       
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Core Teams</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Web Dev</a>
        </li>
        
        <li>
          <a href="#">Andriod Dev</a>
        </li>
        
        <li>
          <a href="#">Cloud</a>
        </li>
        
        <li>
          <a href="#">Competitive Programming</a>
        </li>

        <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Socials</h2>
        
        <li>
          <a href="https://instagram.com/gdscpccoer?igshid=MzRlODBiNWFlZA=="> Instagram </a>
        </li>
        
        <li>
          <a href="#">LinkedIn</a>
        </li>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
        <a href="https://policies.google.com/privacy">Privacy</a>
        </li>
        <a href="https://policies.google.com/terms">Terms</a>
        <li>
          
        </li>
        
       
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    
  </div>
</footer>
        </div>
    )
}

export default Footer;