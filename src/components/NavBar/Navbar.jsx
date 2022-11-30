import {Link} from "react-router-dom";

// ICONS
import logo from "./download.png"
import './Navbar.css'

function NavbarComponent() { 
  let user={}
  // let {user,wishList} = useSelector((state)=>state)
  
  
	return (
		<>
		<nav className="navbar navbar-expand-lg algym-nav">
  <div className="container-fluid align-items-baseline">
    <Link className="navbar-brand logo" to="/">
    <img src={logo} alt="logo" className="d-inline-block align-text-top"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 main-routing_links">
        <li className="nav-item">
          <Link className="nav-link home-routing_link" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/hotdeals">HOT DEALS</Link>
        </li>
      </ul>
      {!(user?.loggedIn)?
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-lg-5">
        <li className="nav-item">
          <Link className="nav-link lang-btn me-5">العربية</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link user-btn" to="/login">SIGN IN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link user-btn sign-up_link" to="/register">SIGN UP</Link>
        </li>
      </ul>
      :
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <p style={{color:"#4eed86"}} className="mb-0">Hi {user.userProfile.email.slice(0,4)}!</p>
        </li>
      </ul>
      }
      
      
    </div>
  </div>
</nav>
		</>
	  );
}

export default NavbarComponent;