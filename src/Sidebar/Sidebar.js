import SidebarItem from './SidebarItem'
import SidebarSocialItem from './SidebarSocialItem'
import {links, social} from "./links"
import xMark from "./xMark.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {

    return <>
    <aside>
    <button><img src={xMark} alt="close mark" /></button>  
        <div>
            {links.map(link => {
                return <SidebarItem key={link.id} {...link} />
            })}
        </div>
        <div>
            {social.map(item => {
                return <SidebarSocialItem key={item.id} {...item} />
            })}
        </div>
    </aside>
    </>
}

export default Sidebar;