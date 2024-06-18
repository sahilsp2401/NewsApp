import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props)=>{
    return (
      <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className={`nav-link ${props.url==="/"?"active":""} `}aria-current="page" to="/">General</Link></li>
        {/* <li className="nav-item"><a className={`nav-link ${props.url==="/about"?"active":""} `} href="/about">About</a></li> */}
        <li className="nav-item"><Link className={`nav-link ${props.url==="/business"?"active":""} `} to="/business">Business</Link></li>
        <li className="nav-item"><Link className={`nav-link ${props.url==="/entertainment"?"active":""} `} to="/entertainment">Entertainment</Link></li>
        {/* <li className="nav-item"><Link className={`nav-link ${props.url==="/general"?"active":""} `} to="/general">General</Link></li> */}
        <li className="nav-item"><Link className={`nav-link ${props.url==="/health"?"active":""} `} to="/health">Health</Link></li>
        <li className="nav-item"><Link className={`nav-link ${props.url==="/science"?"active":""} `} to="/science">Science</Link></li>
        <li className="nav-item"><Link className={`nav-link ${props.url==="/sports"?"active":""} `} to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className={`nav-link ${props.url==="/technology"?"active":""} `} to="/technology">Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default NavBar