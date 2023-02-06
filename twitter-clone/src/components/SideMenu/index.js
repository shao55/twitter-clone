import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG } from './images/images';
import './main.css';
import MenuItem from './menuItem';


export default function SideMenu () {
    const menu = [
        {
            icon: HOME_SVG,
            name: 'Home',
        }, 
        {
            icon: EXPLORE_SVG,
            name: 'Explore',
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications',
        }, 
        {
            icon: MESSAGES_SVG,
            name: 'Messages',
        }, 
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks',
        }, 
    ]
    return (
        <div className="sideMenu">
            <img src={require('./images/logo.png')} className='logoIcon'/>
            {menu.map((item, index) => <MenuItem item={item} key={index}/>)}
            
        </div>
    )
}