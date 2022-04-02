import {useState} from "react"
import SidebarItem from './SidebarItem'
import SidebarSocialItem from './SidebarSocialItem'
import {links, social} from "./links"
import xMark from "./resources/xMark.svg"
import bars from "./resources/bars.svg"
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleButtonClick() {
        setIsOpen(!isOpen)
    }
    
    if(isOpen) { //If state is open return sidebar menu, else return button
        return <>
            <aside>
            <button onClick={handleButtonClick} className="btnXmark"><img src={xMark} alt="close sidebar mark" /></button>  
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
        
    } else { 
    return <button onClick={handleButtonClick}><img src={bars} className="btnXmark" alt="open sidebar mark" /></button>
    }
}



export default Sidebar;