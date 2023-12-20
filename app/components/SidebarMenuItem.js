
export default function SidebarMenuItem({ text, Icon }) {
    if (!Icon) {
        console.error('Invalid Icon prop passed to SidebarMenuItem');
        return null;
    }
    return (
        <div>
            <Icon className="h-7" />
            <span>{text}</span>
        </div>
    )
}
