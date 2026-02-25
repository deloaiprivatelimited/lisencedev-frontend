interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface HeaderProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
}

export default function Header({ title, breadcrumbs }: HeaderProps) {
    return (
        <header className="hidden lg:flex items-center justify-between px-8 py-5 sticky top-0 z-30 backdrop-blur-md bg-dark-bg/80 border-b border-dark-border/50 w-full">
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
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                        <span className="text-[10px] border border-dark-border bg-dark-bg px-1.5 py-0.5 rounded text-dark-muted font-mono">⌘K</span>
                    </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-dark-muted hover:text-white hover:border-gray-500 transition-all relative">
                    <i className="fa-regular fa-bell text-sm"></i>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full border border-dark-surface"></span>
                </button>
            </div>
        </header>
    );
}
