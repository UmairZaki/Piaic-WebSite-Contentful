import React from "react"
import { Link } from 'gatsby'
import HeaderS from './header.module.scss'



export default () => <header >
<div className={HeaderS.checked}>
<input type = "checkbox" id = "check"></input>
<label for="check" className="{headerStyle.checkbtn}">
  <i class="fas fa-bars"></i>
</label>
<ul className = {HeaderS.nav}>
  <li><Link><p></p></Link></li>
  <li >
  <Link to="/wit"><p>WIT</p></Link>
  </li>
  <li>
  <p>About</p>
  <ul className={HeaderS.nav__sub_menu}>
  <li>
  <Link to="/about"><p>The President</p></Link>
  </li>
  <li>
  <Link to="/managementComittee"><p>Management Comittee</p></Link>
  </li>
  </ul>
  </li>
  <li>
  <p>Avalaible Program</p>
  <ul className={HeaderS.nav__sub_menu}>
  <li>
  <Link to="/artificial_intelligence"><p>Artificial Intelligence</p></Link>
  </li>
  <li>
  <Link to="/cloud_native"><p>Cloud Native and Mobile Web Computing</p></Link>
  </li>
  <li>
  <Link to="/blockchain"><p>Blockchain</p></Link>
  </li>
  <li>
  <Link to="/internet_of_things"><p>Internet of Things and AI</p></Link>
  </li>
  </ul>
  </li>
  <li>
  <a href="https://portal.piaic.org/signup" target = "_blank"> <p>Apply</p></a>
  </li>
  <li>
  <Link to="/howItsWork"><p>How It Works</p></Link>
  </li>
</ul>
</div>
    
    

    <div className= {HeaderS.logo}>
     <Link  to="/"  ><img src={require("./piaic.svg")} width="150" height="120"  alt="" /></Link>
    </div>
    
    
</header>