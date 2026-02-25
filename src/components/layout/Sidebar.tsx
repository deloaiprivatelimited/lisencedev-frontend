import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export interface NavItem {
    id: string;
    label: string;
    icon: string;
    badge?: number;
    href?: string;
}

interface SidebarProps {
    title: string;
    navItems: NavItem[];
    supportItems?: NavItem[];
    activeSection?: string;
    setActiveSection?: (section: string) => void;
}

export default function Sidebar({ title, navItems, supportItems, activeSection, setActiveSection }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isItemActive = (item: NavItem) => {
        if (item.href) {
            return location.pathname === item.href;
        }
        return activeSection === item.id;
    };

    const handleItemClick = (item: NavItem) => {
        if (!item.href && setActiveSection) {
            setActiveSection(item.id);
        }
        if (window.innerWidth < 1024) setIsOpen(false);
    };

    return (
        <>
            <header className="lg:hidden flex items-center justify-between p-4 border-b border-dark-border bg-dark-surface z-50 sticky top-0 w-full">
                <Link to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 rounded bg-dark-border flex items-center justify-center text-white">
                        <i className="fa-solid fa-terminal"></i>
                    </div>
                    <span className="font-semibold text-white">DevLicense AI</span>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="text-dark-text hover:text-white p-2">
                    <i className="fa-solid fa-bars text-xl"></i>
                </button>
            </header>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`flex flex-col w-72 bg-dark-surface border-r border-dark-border h-screen fixed left-0 top-0 z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link to="/dashboard" className="p-6 flex items-center gap-3 border-b border-dark-border/50 hover:bg-dark-border/20 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 flex items-center justify-center shadow-lg">
                        <i className="fa-solid fa-terminal text-white text-sm"></i>
                    </div>
                    <span className="font-bold text-white tracking-tight">DevLicense AI</span>
                </Link>

                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    <div className="px-3 mb-2 text-xs font-semibold text-dark-muted uppercase tracking-wider">{title}</div>

                    {navItems.map((item) => {
                        const isActive = isItemActive(item);
                        const buttonClass = `w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all relative overflow-hidden ${isActive
                            ? 'bg-accent/10 text-white border border-accent/20'
                            : 'text-dark-text hover:bg-dark-border/50 hover:text-white border border-transparent'
                            }`;

                        const innerContent = (
                            <>
                                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent"></div>}
                                <i className={`fa-solid ${item.icon} w-5 mr-3 transition-colors ${isActive ? 'text-accent group-hover:text-accent-hover' : 'text-dark-muted group-hover:text-white'}`}></i>
                                {item.label}
                                {item.badge && (
                                    <span className="ml-auto bg-dark-border text-xs py-0.5 px-2 rounded-full text-dark-text">{item.badge}</span>
                                )}
                            </>
                        );

                        if (item.href) {
                            return (
                                <Link key={item.id} to={item.href} onClick={() => handleItemClick(item)} className={buttonClass}>
                                    {innerContent}
                                </Link>
                            );
                        }

                        return (
                            <button key={item.id} onClick={() => handleItemClick(item)} className={buttonClass}>
                                {innerContent}
                            </button>
                        );
                    })}

                    {supportItems && supportItems.length > 0 && (
                        <>
                            <div className="px-3 mt-8 mb-2 text-xs font-semibold text-dark-muted uppercase tracking-wider">Support</div>
                            {supportItems.map((item) => {
                                const buttonClass = "w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-md text-dark-text hover:bg-dark-border/50 hover:text-white transition-all border border-transparent";
                                const innerContent = (
                                    <>
                                        <i className={`fa-solid ${item.icon} w-5 mr-3 text-dark-muted group-hover:text-white transition-colors`}></i>
                                        {item.label}
                                    </>
                                );

                                if (item.href) {
                                    return (
                                        <Link key={item.id} to={item.href} onClick={() => handleItemClick(item)} className={buttonClass}>
                                            {innerContent}
                                        </Link>
                                    );
                                }

                                return (
                                    <button key={item.id} onClick={() => handleItemClick(item)} className={buttonClass}>
                                        {innerContent}
                                    </button>
                                );
                            })}
                        </>
                    )}
                </nav>

                <div className="p-4 border-t border-dark-border bg-dark-surface/50">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=42" alt="User" className="w-9 h-9 rounded-full border border-dark-border bg-dark-bg" />
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-accent rounded-full border-2 border-dark-surface"></span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">John Developer</p>
                            <p className="text-xs text-dark-muted truncate">john@devlicense.ai</p>
                        </div>
                        <Link to="/login" className="text-dark-muted hover:text-white transition-colors" title="Logout">
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}
