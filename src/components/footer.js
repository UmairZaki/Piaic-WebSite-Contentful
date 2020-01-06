import React from "react"
// import { Link } from "gatsby"
import footerS from "./footer.module.scss"

export default () => <footer className= {footerS.bar}>
        <h1>&copy; 2019 PIAIC. All rights reserved.</h1>
        <div className= {footerS.logo}>
          <p>Powered by</p>
     <a href="https://www.panacloud.ai/" target = "_blank" ><img src={require("./panacloud.png")} alt="klnaznc" /></a>
    </div>
    
</footer>