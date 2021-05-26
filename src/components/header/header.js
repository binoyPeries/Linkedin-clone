// import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import linkedinLogo from '../images/linkedin.png';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';

const Header = () => {
    return ( 
        <div className="header">
            
            <div className="header_left">
                <img src={linkedinLogo} alt="" />
                <div className="serach-box">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>

            </div>

            <div className="header_right">

            </div>

        </div>


     );
}
 
export default Header;

