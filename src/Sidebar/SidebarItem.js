import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SidebarItem({url, text, icon}) {
    return <>
        <div>
            <a href={url}>
            <FontAwesomeIcon icon={icon} />
                {text}
            </a>
        </div>
    </>
}

export default SidebarItem;