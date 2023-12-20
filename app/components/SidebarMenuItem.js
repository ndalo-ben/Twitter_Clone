
export default function SidebarMenuItem({ text, Icon, active }) {
    if (!Icon) {
        console.error('Invalid Icon prop passed to SidebarMenuItem');
        return null;
    }
    return (
        <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
            <Icon className="h-7" />
            <span className={`${active && "font-bold"} hidden xl:inline`}>{text}</span>
        </div>
    )
}
