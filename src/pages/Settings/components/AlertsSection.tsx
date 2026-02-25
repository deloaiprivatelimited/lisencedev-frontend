export default function AlertsSection() {
    return (
        <section className="glass-panel rounded-xl overflow-hidden mt-8">
            <div className="px-6 py-4 border-b border-dark-border bg-dark-surface/30">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <i className="fa-solid fa-tower-broadcast text-danger"></i>
                    Phone & Crisis Alerts
                </h3>
            </div>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-xs font-medium text-dark-text uppercase tracking-wider mb-2">Phone Number</label>
                        <div className="flex gap-3">
                            <select className="bg-dark-bg border border-dark-border rounded-md text-white text-sm px-3 py-2.5 focus:outline-none focus:border-gray-500 w-24">
                                <option>+1</option>
                                <option>+44</option>
                                <option>+91</option>
                            </select>
                            <input type="tel" placeholder="(555) 123-4567" className="flex-1 glass-input rounded-md px-4 py-2.5 text-sm text-white placeholder-dark-muted focus:outline-none" />
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                            <span className="text-xs text-warning flex items-center gap-1"><i className="fa-solid fa-circle-exclamation"></i> Not Verified</span>
                            <button className="text-xs text-accent hover:text-accent-hover font-medium underline">Verify via SMS</button>
                        </div>
                    </div>

                    <div className="bg-danger/5 border border-danger/20 rounded-lg p-5 flex items-start justify-between gap-4">
                        <div>
                            <h4 className="text-sm font-medium text-white mb-1">Enable P0 SMS Alerts</h4>
                            <p className="text-xs text-dark-muted leading-relaxed">Get notified immediately on your phone when a high-priority production bug is assigned to your board.</p>
                        </div>
                        <div className="relative inline-block w-10 shrink-0 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-dark-muted transition-all duration-300 left-0" />
                            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-dark-border cursor-pointer transition-colors duration-300"></label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
