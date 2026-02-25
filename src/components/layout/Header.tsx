import { useState, useRef, useEffect } from "react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface HeaderProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

export default function Header({ title, breadcrumbs }: HeaderProps) {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const notificationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsNotificationOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const notifications = [
        { id: 1, text: "System maintenance scheduled for 2AM UTC", time: "2h ago", unread: true },
        { id: 2, text: "Your GitHub workspace connection was successful.", time: "5h ago", unread: true },
        { id: 3, text: "New billing cycle started.", time: "1d ago", unread: false },
    ];

    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <header className="hidden lg:flex items-center justify-between px-8 py-5 fixed top-0 left-0 right-0 lg:left-72 z-40 backdrop-blur-md bg-dark-bg/80 border-b border-dark-border/50">
            <div>
                <nav className="flex text-sm text-dark-muted mb-1" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                {crumb.href ? (
                                    <a href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</a>
                                ) : (
                                    <span className="text-white font-medium">{crumb.label}</span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <span className="text-dark-border">/</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
                <h1 className="text-xl font-bold text-white tracking-tight">{title}</h1>
            </div>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-muted text-xs"></i>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-9 pr-4 py-1.5 bg-dark-surface border border-dark-border rounded-full text-sm text-white placeholder-dark-muted focus:outline-none focus:border-gray-500 w-64 transition-colors"
                    />
                </div>

                <div className="relative" ref={notificationRef}>
                    <button
                        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all relative ${isNotificationOpen ? 'bg-dark-border border-gray-500 text-white' : 'bg-dark-surface border-dark-border text-dark-muted hover:text-white hover:border-gray-500'}`}
                    >
                        <i className="fa-regular fa-bell text-sm"></i>
                        {unreadCount > 0 && (
                            <span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full border border-dark-surface"></span>
                        )}
                    </button>

                    {isNotificationOpen && (
                        <div className="absolute right-0 mt-3 w-80 bg-dark-surface border border-dark-border rounded-xl shadow-xl shadow-black/80 z-50 overflow-hidden transform origin-top-right transition-all">
                            <div className="p-4 border-b border-dark-border bg-dark-bg/50 flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                                    Notifications
                                    {unreadCount > 0 && (
                                        <span className="bg-accent text-white text-[10px] px-1.5 py-0.5 rounded-full">{unreadCount}</span>
                                    )}
                                </h3>
                                <button className="text-xs text-accent hover:text-accent-hover transition-colors">Mark all as read</button>
                            </div>

                            <div className="max-h-[300px] overflow-y-auto">
                                {notifications.length > 0 ? (
                                    notifications.map(notification => (
                                        <div key={notification.id} className={`p-4 border-b border-dark-border/50 hover:bg-dark-border/30 transition-colors cursor-pointer flex gap-3 ${notification.unread ? 'bg-accent/5' : ''}`}>
                                            <div className="mt-1 shrink-0">
                                                {notification.unread ? (
                                                    <div className="w-2 h-2 rounded-full bg-accent mt-0.5"></div>
                                                ) : (
                                                    <div className="w-2 h-2 rounded-full bg-dark-muted mt-0.5 opacity-50"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-xs leading-snug ${notification.unread ? 'text-white' : 'text-dark-muted'}`}>{notification.text}</p>
                                                <span className="text-[10px] text-dark-muted mt-1.5 block">{notification.time}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-8 text-center text-dark-muted text-sm">
                                        No new notifications
                                    </div>
                                )}
                            </div>

                            <div className="p-3 text-center bg-dark-bg flex items-center justify-center hover:bg-dark-border/30 transition-colors cursor-pointer group">
                                <span className="text-xs font-medium text-white group-hover:text-accent transition-colors">View all notifications</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
