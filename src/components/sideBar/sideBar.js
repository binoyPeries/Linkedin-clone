import { Avatar } from '@material-ui/core';
import './sideBar.css';
import background from '../images/background.jpeg';


const SideBar = () => {

    const recentItem = (topic)=>(
        <div className="recent_item">
            <span className="hash">#</span>
            <p>{topic}</p>
        </div>
    )
    
    

    return ( 
    <div className="sideBar">
        <div className="sideBar_top">
            <img src={background} alt=""/>
            <Avatar className="sideBar_avatar"/>
            <h2>Binoy Peries</h2>
            <h4>binoyperies98@gmail.com</h4>

        </div>

        <div className="sideBar_stats">
            <div className="sideBar_stat">
                <p>Who viewed your profile</p>
                <p className="stat_number">50</p>
            </div>

            <div className="sideBar_stat">
                <p>Viewes of  your post</p>
                <p className="stat_number">500</p>     
            </div>


        </div>

        <div className="sideBar_bottom">
            <p >Recent</p>
            {recentItem('reactjs')}
            {recentItem('nodejs')}
            {recentItem('dev')}
          
        </div>

    </div> 
    );
}
 
export default SideBar;

// 1.33