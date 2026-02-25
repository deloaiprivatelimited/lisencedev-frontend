export default function GithubSection() {
    return (
        <section className="glass-panel rounded-xl overflow-hidden border-l-4 border-l-accent relative shadow-lg shadow-black/20 mt-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

            <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#24292F] flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                            <i className="fa-brands fa-github text-3xl text-white"></i>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-1">GitHub Workspace Connection</h2>
                            <p className="text-sm text-dark-muted max-w-md">Link your GitHub account to access your private workspace. This is mandatory for license activation.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-warning/10 border border-warning/20 px-3 py-1.5 rounded-full self-start shrink-0">
                        <span className="w-2 h-2 rounded-full bg-warning animate-pulse"></span>
                        <span className="text-xs font-bold text-warning uppercase tracking-wide">Not Linked</span>
                    </div>
                </div>

                <div className="bg-dark-bg/50 border border-dark-border rounded-lg p-6 flex flex-col items-center justify-center space-y-6">
                    <button className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-200 bg-[#24292F] border border-white/10 rounded-md hover:bg-[#2c333a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 animate-pulse-glow w-full md:w-auto">
                        <i className="fa-brands fa-github text-lg mr-2"></i>
                        Connect with GitHub
                    </button>

                    <div className="w-full max-w-md space-y-3">
                        <div className="flex items-center justify-between text-sm p-3 rounded bg-dark-surface/50 border border-dark-border/50">
                            <span className="text-dark-muted">OAuth Permission</span>
                            <i className="fa-regular fa-circle text-dark-border"></i>
                        </div>
                        <div className="flex items-center justify-between text-sm p-3 rounded bg-dark-surface/50 border border-dark-border/50">
                            <span className="text-dark-muted">Organization Invite</span>
                            <i className="fa-regular fa-circle text-dark-border"></i>
                        </div>
                        <div className="flex items-center justify-between text-sm p-3 rounded bg-dark-surface/50 border border-dark-border/50">
                            <span className="text-dark-muted">Webhooks Sync</span>
                            <i className="fa-regular fa-circle text-dark-border"></i>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-dark-surface/30 rounded border border-dark-border/50">
                    <i className="fa-solid fa-code-commit text-dark-muted hidden sm:block"></i>
                    <div className="flex-1">
                        <p className="text-xs text-white/70 uppercase font-semibold">Assigned Repository</p>
                        <code className="text-sm font-mono text-white block mt-1">devlicense-ai/project-[username]</code>
                    </div>
                    <span className="text-xs text-white/60 italic">Pending Connection</span>
                </div>
            </div>
        </section>
    );
}
