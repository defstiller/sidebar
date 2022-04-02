import SidebarItem from './SidebarItem'
import {links, social} from "./links"

function Sidebar() {

    return <>
        {links.map(link => {
            return <SidebarItem key={link.id} {...link} />
        })}
    </>
}

export default Sidebar;