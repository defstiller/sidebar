import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SidebarSocialItem({url, icon}) {
    return <>
            <a href={url}>
            <FontAwesomeIcon icon={icon} />
            </a>
    </>
}

export default SidebarSocialItem;