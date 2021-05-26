// import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import linkedinLogo from '../images/linkedin.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './header.css';
import HeaderOption from './headerOption';

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
                <HeaderOption title="Home" Icon={HomeIcon}/>
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOption title="Messaging" Icon={ChatIcon}/>
                <HeaderOption title="Notification" Icon={NotificationsIcon}/>
                <HeaderOption avatar={linkedinLogo} title="Me" />




            </div>

        </div>


     );
}
 
export default Header;

