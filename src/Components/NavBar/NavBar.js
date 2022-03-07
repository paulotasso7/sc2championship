import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (  
        <div className="topnav" id="myTopnav">
            {/* <Link to="/"> */}
            <img style={{width: '13vw', minWidth: '150px', marginLeft:'5%'}} src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/logo-standard-OVERWORLD.png' alt='logo'/>
            {/* </Link> */}
            {/* <a href="#home" className="active">Home</a> */}
                <Link to="/login" style={{ marginTop: '1.5%'}}>
                    <a  href="/login" >LOGIN</a>
                </Link>
                <Link to="/tournaments" style={{  marginTop: '1.5%'}}>
                    <a  href="/tournaments" >TOURNAMENTS</a>
                </Link>
                <Link to="/" style={{  marginTop: '1.5%'}}>
                    <a  href="/">INICIO</a>
                </Link>
                    <a  href="javascript:void(0);" className="icon" onClick={myFunction} style={{ marginRight:'5%', marginTop: '1.8%'}}>
                        <i className="fa fa-bars" ></i>
                    </a>
                
        </div>
    )
}

export default NavBar;


