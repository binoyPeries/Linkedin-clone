import { Avatar } from '@material-ui/core';
import './headerOption.css';
const HeaderOption = ({Icon,title, avatar}) => {
    return ( 
    <div className="headerOption">

        {Icon && <Icon className="icon"/>}
        {avatar && <Avatar className="icon" src={avatar}/>}

        <h3 className="title">{title}</h3>


    </div> 
    );
}
 
export default HeaderOption;