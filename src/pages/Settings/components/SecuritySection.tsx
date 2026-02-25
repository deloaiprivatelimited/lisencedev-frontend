export default function SecuritySection() {
    return (
        <section className="glass-panel rounded-xl overflow-hidden mb-12 mt-8">
            <div className="px-6 py-4 border-b border-dark-border bg-dark-surface/30">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <i className="fa-solid fa-lock text-dark-muted"></i>
                    Security & Credentials
                </h3>
            </div>

            <div className="p-6 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-white border-b border-dark-border pb-2">Change Password</h4>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs text-dark-muted mb-1">Current Password</label>
                                <input type="password" className="w-full glass-input rounded-md px-4 py-2 text-sm text-white focus:outline-none" placeholder="••••••••" />
                            </div>
                            <div>
                                <label className="block text-xs text-dark-muted mb-1">New Password</label>
                                <input type="password" className="w-full glass-input rounded-md px-4 py-2 text-sm text-white focus:outline-none" placeholder="••••••••" />
                                <div className="h-1 w-full bg-dark-border rounded-full mt-2 overflow-hidden">
                                    <div className="h-full w-1/4 bg-danger rounded-full"></div>
                                </div>
                                <p className="text-[10px] text-danger mt-1 text-right">Weak</p>
                            </div>
                            <div>
                                <label className="block text-xs text-dark-muted mb-1">Confirm New Password</label>
                                <input type="password" className="w-full glass-input rounded-md px-4 py-2 text-sm text-white focus:outline-none" placeholder="••••••••" />
                            </div>
                            <button className="mt-2 w-full px-4 py-2 text-xs font-medium text-white bg-dark-surface border border-dark-border rounded hover:bg-dark-border transition-colors">
                                Update Password
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-dark-border pb-2">
                            <h4 className="text-sm font-medium text-white">Active Sessions</h4>
                            <button className="text-xs text-danger hover:text-danger-light font-medium transition-colors">Logout All</button>
                        </div>

                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-3 rounded bg-accent/5 border border-accent/20">
                                <div className="w-8 h-8 rounded bg-dark-bg flex items-center justify-center text-accent shrink-0 hidden sm:flex">
                                    <i className="fa-solid fa-laptop"></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-white font-medium flex gap-2 items-center flex-wrap">
                                        MacBook Pro
                                        <span className="text-[10px] bg-accent text-white px-1.5 rounded">THIS DEVICE</span>
                                    </p>
                                    <p className="text-xs text-white/70 truncate mt-1">San Francisco, US • Chrome • 192.168.1.1</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 rounded bg-dark-surface border border-dark-border">
                                <div className="w-8 h-8 rounded bg-dark-bg items-center justify-center text-white/60 shrink-0 hidden sm:flex">
                                    <i className="fa-solid fa-mobile-screen"></i>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-white font-medium">iPhone 14 Pro</p>
                                    <p className="text-xs text-white/70 truncate mt-1">New York, US • Safari • 2 hrs ago</p>
                                </div>
                                <button className="text-dark-muted hover:text-white shrink-0 p-2" title="Revoke">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
