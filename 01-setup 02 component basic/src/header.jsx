import profileImg from "./assets/profile.jpg";
import "./App.css";

function Header() {
  return (
    <header>
      <nav>
        
        <div className="headerlogo">
          <img src={profileImg} alt="Profile" className="profile-photo" />

          <div className="brand">
            <span className="name">Gagan Nagar</span>
            <span className="sub">Frontend Developer</span>
          </div>
        </div>

       
        <div className="navlink">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;
