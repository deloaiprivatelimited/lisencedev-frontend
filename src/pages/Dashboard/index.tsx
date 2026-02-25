import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function Dashboard() {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'fa-house', href: '/dashboard' },
        { id: 'users', label: 'Users', icon: 'fa-users', href: '#' },
        { id: 'analytics', label: 'Analytics', icon: 'fa-chart-line', href: '#' },
        { id: 'settings', label: 'Settings', icon: 'fa-gear', href: '/settings' },
    ];

    return (
        <div className="antialiased min-h-screen flex flex-col lg:flex-row overflow-x-hidden relative bg-dark-bg">
            <Sidebar
                title="Main Navigation"
                navItems={navItems}
            />

            {/* Main Content */}
            <main className="flex-1 lg:ml-72 min-h-screen relative z-10 w-full overflow-hidden flex flex-col">
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
                </div>

                {/* Header */}
                <Header
                    title="Dashboard Overview"
                    breadcrumbs={[
                        { label: 'Platform', href: '#' },
                        { label: 'Dashboard' }
                    ]}
                />

                {/* Dashboard Content */}
                <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 relative z-10 w-full">
                    <div className="max-w-6xl mx-auto space-y-8 w-full">
                        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-dark-border pb-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Overview</h1>
                                <p className="text-dark-muted mt-1 text-sm sm:text-base">Welcome back. Here's what's happening today.</p>
                            </div>
                            <Button className="bg-accent hover:bg-accent-hover text-white rounded shadow-glow transition-all w-full sm:w-auto border-0">
                                <i className="fa-solid fa-download mr-2"></i> Download Report
                            </Button>
                        </div>

                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            <Card className="glass-panel border-dark-border overflow-hidden relative transition-colors">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Total Revenue</CardTitle>
                                    <div className="p-2 bg-accent/10 rounded"><i className="fa-solid fa-dollar-sign text-accent w-4 text-center"></i></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">$45,231.89</div>
                                    <p className="text-xs text-dark-muted mt-1"><span className="text-accent">+20.1%</span> from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="glass-panel border-dark-border overflow-hidden relative transition-colors">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Active Users</CardTitle>
                                    <div className="p-2 bg-accent/10 rounded"><i className="fa-solid fa-users text-accent w-4 text-center"></i></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">+2350</div>
                                    <p className="text-xs text-dark-muted mt-1"><span className="text-accent">+180.1%</span> from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="glass-panel border-dark-border overflow-hidden relative transition-colors">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Sales</CardTitle>
                                    <div className="p-2 bg-accent/10 rounded"><i className="fa-solid fa-chart-line text-accent w-4 text-center"></i></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">+12,234</div>
                                    <p className="text-xs text-dark-muted mt-1"><span className="text-accent">+19%</span> from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="glass-panel border-dark-border overflow-hidden relative transition-colors">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Active Now</CardTitle>
                                    <div className="p-2 bg-accent/10 rounded"><i className="fa-solid fa-bolt text-accent w-4 text-center"></i></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">+573</div>
                                    <p className="text-xs text-dark-muted mt-1"><span className="text-accent">+201</span> since last hour</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-7 w-full overflow-hidden">
                            <Card className="glass-panel border-dark-border lg:col-span-4 min-h-[350px] relative overflow-hidden">
                                <CardHeader className="relative z-10 flex flex-row items-center justify-between">
                                    <CardTitle className="text-white">Revenue Analytics</CardTitle>
                                </CardHeader>
                                <CardContent className="h-[250px] flex items-center justify-center border-t border-dark-border/50 mt-4 pt-4 relative z-10">
                                    <div className="w-full h-full border border-dark-border rounded bg-dark-bg/50 flex items-center justify-center">
                                        <p className="text-dark-muted text-sm">Interactive Chart Area</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="glass-panel border-dark-border lg:col-span-3 relative overflow-hidden">
                                <CardHeader className="relative z-10 border-b border-dark-border/50 pb-4">
                                    <CardTitle className="text-white">Recent Sales</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10 pt-6">
                                    <div className="space-y-6">
                                        {[
                                            { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
                                            { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
                                            { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
                                            { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
                                            { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" }
                                        ].map((user, i) => (
                                            <div key={i} className="flex items-center p-2 rounded hover:bg-dark-surface transition-colors -mx-2">
                                                <div className="w-10 h-10 rounded bg-accent/10 mr-3 sm:mr-4 border border-accent/20 flex items-center justify-center overflow-hidden shrink-0">
                                                    <span className="text-accent text-xs font-bold">{user.name.split(' ').map(n => n[0]).join('')}</span>
                                                </div>
                                                <div className="space-y-1 min-w-0 pr-2">
                                                    <p className="text-sm font-medium leading-none text-white truncate">{user.name}</p>
                                                    <p className="text-xs sm:text-sm text-dark-muted truncate">{user.email}</p>
                                                </div>
                                                <div className="ml-auto font-medium text-white shrink-0 text-sm sm:text-base">{user.amount}</div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
