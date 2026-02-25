export default function IdentitySection() {
    return (
        <section className="glass-panel rounded-xl overflow-hidden mt-6">
            <div className="px-6 py-4 border-b border-dark-border bg-dark-surface/30 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <i className="fa-solid fa-id-card text-dark-muted"></i>
                    Identity & Public Profile
                </h3>
                <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">PUBLIC</span>
            </div>

            <div className="p-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full p-1 border-2 border-dashed border-dark-border group-hover:border-accent transition-colors cursor-pointer">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=42" alt="Profile" className="w-full h-full object-cover bg-dark-surface" />
                                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <i className="fa-solid fa-camera text-white text-xl mb-1"></i>
                                        <span className="text-xs text-white font-medium">Edit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-sm font-medium text-white">Profile Picture</p>
                            <p className="text-xs text-dark-muted mt-1 max-w-[200px]">Upload a professional photo. This will appear on your public license.</p>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-xs font-medium text-dark-text uppercase tracking-wider">Full Name <span className="text-danger">*</span></label>
                                <div className="relative">
                                    <input type="text" defaultValue="John Developer" className="w-full glass-input rounded-md px-4 py-2.5 text-sm text-white placeholder-dark-muted focus:outline-none" />
                                    <i className="fa-solid fa-lock absolute right-3 top-3 text-dark-muted/50 text-xs" title="Locked after license issuance"></i>
                                </div>
                                <p className="text-[11px] text-dark-muted">This name will be locked once your license is issued.</p>
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs font-medium text-dark-text uppercase tracking-wider">Username</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-dark-muted text-sm">@</span>
                                    <input type="text" defaultValue="johndev" className="w-full glass-input rounded-md pl-8 pr-4 py-2.5 text-sm text-white placeholder-dark-muted focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-medium text-dark-text uppercase tracking-wider">Professional Headline</label>
                            <input type="text" placeholder="e.g., Full Stack Wizard, DevOps Engineer" className="w-full glass-input rounded-md px-4 py-2.5 text-sm text-white placeholder-dark-muted focus:outline-none" />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-medium text-dark-text uppercase tracking-wider">Resume / CV</label>
                            <div className="border border-dashed border-dark-border rounded-lg p-6 bg-dark-surface/20 hover:bg-dark-surface/40 hover:border-gray-500 transition-all cursor-pointer group text-center">
                                <div className="w-10 h-10 bg-dark-surface rounded-full flex items-center justify-center mx-auto mb-3 border border-dark-border group-hover:border-accent group-hover:text-accent transition-colors">
                                    <i className="fa-solid fa-cloud-arrow-up text-lg"></i>
                                </div>
                                <p className="text-sm text-white font-medium">Click to upload or drag and drop</p>
                                <p className="text-xs text-dark-muted mt-1">PDF, DOCX up to 10MB</p>
                            </div>
                            <div className="flex justify-between items-center text-xs mt-2">
                                <span className="text-dark-muted">Last uploaded: <span className="text-dark-text">Never</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
