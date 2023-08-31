/* eslint-disable react/prop-types */

export default function SidebarSection({ children, name }) {
    return (
        <div className="flex flex-col gap-3 pt-6">
            <span className="text-accent font-medium">{name}</span>
            <nav className="flex flex-col gap-1">
                {children}
            </nav>
        </div>
    );
}
