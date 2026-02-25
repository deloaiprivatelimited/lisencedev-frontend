import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import IdentitySection from "./components/IdentitySection";
import GithubSection from "./components/GithubSection";
import AlertsSection from "./components/AlertsSection";
import SecuritySection from "./components/SecuritySection";

export default function Settings() {
    const [activeSection, setActiveSection] = useState('account');

    const renderContent = () => {
        switch (activeSection) {
            case 'account':
                return <IdentitySection />;
            case 'integration':
                return <GithubSection />;
            case 'notifications':
                return <AlertsSection />;
            case 'security':
                return <SecuritySection />;
            case 'billing':
                return (
                    <div className="glass-panel rounded-xl overflow-hidden mt-6 p-12 text-center text-dark-muted">
                        <i className="fa-solid fa-credit-card text-4xl mb-4 text-dark-border"></i>
                        <h3 className="text-lg font-medium text-white mb-2">Billing & Plans coming soon</h3>
                        <p className="text-sm">We are currently integrating with our payment provider.</p>
                    </div>
                );
            default:
                return <IdentitySection />;
        }
    };

    const sectionDescriptions: Record<string, string> = {
        'account': 'Manage your developer profile and public identity.',
        'integration': 'Link your external tools and configure your workspace.',
        'notifications': 'Configure how and when you receive alerts.',
        'security': 'Manage your passwords and session security.',
        'billing': 'View your active plans and billing history.'
    };

    const navItems = [
        { id: 'account', label: 'Account', icon: 'fa-user' },
        { id: 'integration', label: 'Developer Integration', icon: 'fa-code-branch' },
        { id: 'notifications', label: 'Notifications', icon: 'fa-bell', badge: 3 },
        { id: 'security', label: 'Security', icon: 'fa-shield-halved' },
        { id: 'billing', label: 'Billing', icon: 'fa-credit-card' },
    ];

    const supportItems = [
        { id: 'documentation', label: 'Documentation', icon: 'fa-book', href: '/documentation' },
        { id: 'contact', label: 'Contact Support', icon: 'fa-headset', href: '/contact-support' }
    ];

    return (
        <div className="antialiased min-h-screen flex flex-col lg:flex-row overflow-x-hidden relative bg-dark-bg">
            <Sidebar
                title="Settings"
                navItems={navItems}
                supportItems={supportItems}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <main className="flex-1 lg:ml-72 min-h-screen relative z-10 w-full overflow-hidden flex flex-col">
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
                </div>

                <Header
                    title={`${activeSection.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Settings`}
                    breadcrumbs={[
                        { label: 'Settings', href: '/settings' },
                        { label: activeSection.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) }
                    ]}
                />

                <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 relative z-10 w-full flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-dark-border pb-4 sm:pb-6 gap-4">
                        <div>
                            <h2 className="text-lg font-medium text-white capitalize">{activeSection.replace('-', ' ')} Overview</h2>
                            <p className="text-sm text-dark-muted mt-1">{sectionDescriptions[activeSection] || 'Manage your settings.'}</p>
                        </div>
                        <div className="flex gap-2 sm:gap-3 shrink-0">
                            <button className="px-3 sm:px-4 py-2 text-sm font-medium text-dark-text hover:text-white bg-transparent border border-dark-border rounded-md hover:bg-dark-surface transition-all">
                                Cancel
                            </button>
                            <button className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-md shadow-glow transition-all flex items-center gap-2">
                                <i className="fa-solid fa-check"></i> Save Changes
                            </button>
                        </div>
                    </div>

                    {renderContent()}

                </div>

                <footer className="border-t border-dark-border bg-dark-bg py-6 sm:py-8 px-4 sm:px-8 mt-auto relative z-10 w-full">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-center sm:text-left">
                            <i className="fa-solid fa-terminal text-dark-muted"></i>
                            <span className="text-xs text-dark-muted">© 2026 DevLicense AI. All rights reserved.</span>
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs text-dark-muted">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Status</a>
                            <a href="#" className="hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
