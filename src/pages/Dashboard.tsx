import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Settings, Users, Activity, LogOut, Bell, Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Dashboard() {
    const NavLinks = () => (
        <>
            <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded bg-primary/10 text-primary font-medium border border-primary/20 transition-all hover:bg-primary/20">
                <Home className="w-5 h-5" /> Dashboard
            </Link>
            <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-white/60 hover:text-white hover:bg-white/5 transition-all">
                <Users className="w-5 h-5" /> Users
            </Link>
            <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-white/60 hover:text-white hover:bg-white/5 transition-all">
                <Activity className="w-5 h-5" /> Analytics
            </Link>
            <Link to="#" className="flex items-center gap-3 px-3 py-2.5 rounded text-white/60 hover:text-white hover:bg-white/5 transition-all">
                <Settings className="w-5 h-5" /> Settings
            </Link>
        </>
    );

    return (
        <div className="min-h-screen flex w-full">
            {/* Sidebar for Desktop */}
            <aside className="w-64 glass border-r border-white/5 hidden md:flex flex-col z-20">
                <div className="p-6 flex items-center gap-3 border-b border-white/5">
                    <span className="font-bold text-xl tracking-wide text-white">DevLicense</span>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <NavLinks />
                </nav>
                <div className="p-4 border-t border-white/5">
                    <Link to="/login">
                        <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded pl-2">
                            <LogOut className="w-5 h-5 mr-3" /> Logout
                        </Button>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

                {/* Header */}
                <header className="h-16 glass-panel border-b border-white/5 flex items-center justify-between px-4 lg:px-6 z-10 sticky top-0">
                    <div className="flex items-center gap-4 w-full max-w-sm">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden text-white/60 hover:text-white hover:bg-white/10 shrink-0 rounded">
                                    <Menu className="w-5 h-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64 glass border-r border-white/10 p-0 flex flex-col">
                                <div className="p-6 flex items-center gap-3 border-b border-white/5">
                                    <span className="font-bold text-xl tracking-wide text-white">DevLicense</span>
                                </div>
                                <nav className="flex-1 p-4 space-y-2">
                                    <NavLinks />
                                </nav>
                                <div className="p-4 border-t border-white/5">
                                    <Link to="/login">
                                        <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white hover:bg-white/5 rounded pl-2">
                                            <LogOut className="w-5 h-5 mr-3" /> Logout
                                        </Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <div className="relative w-full hidden sm:block">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/40" />
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full glass-input pl-9 h-9 bg-transparent focus-visible:ring-primary/50 text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        <Button variant="ghost" size="icon" className="text-white/60 hover:text-white rounded hover:bg-white/10">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <div className="w-8 h-8 rounded bg-gradient-to-tr from-primary to-purple-400 p-[1px] cursor-pointer transition-all">
                            <div className="w-full h-full rounded bg-black overflow-hidden relative">
                                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white bg-black">AD</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 relative z-10 w-full">
                    <div className="max-w-6xl mx-auto space-y-8 w-full">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Overview</h1>
                                <p className="text-white/60 mt-1 text-sm sm:text-base">Welcome back. Here's what's happening today.</p>
                            </div>
                            <Button className="bg-primary hover:bg-primary/90 text-white rounded transition-all w-full sm:w-auto border-0 shadow-none">
                                Download Report
                            </Button>
                        </div>

                        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                            <Card className="glass border-white/10 overflow-hidden relative transition-colors hover:border-white/20">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Total Revenue</CardTitle>
                                    <div className="p-2 bg-primary/10 rounded"><Activity className="w-4 h-4 text-primary" /></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">$45,231.89</div>
                                    <p className="text-xs text-white/50 mt-1"><span className="text-emerald-400">+20.1%</span> from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="glass border-white/10 overflow-hidden relative transition-colors hover:border-white/20">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Active Users</CardTitle>
                                    <div className="p-2 bg-primary/10 rounded"><Users className="w-4 h-4 text-primary" /></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">+2350</div>
                                    <p className="text-xs text-white/50 mt-1"><span className="text-emerald-400">+180.1%</span> from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="glass border-white/10 overflow-hidden relative transition-colors hover:border-white/20">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Sales</CardTitle>
                                    <div className="p-2 bg-primary/10 rounded"><Activity className="w-4 h-4 text-primary" /></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">+12,234</div>
                                    <p className="text-xs text-white/50 mt-1"><span className="text-emerald-400">+19%</span> from last month</p>
                                </CardContent>
                            </Card>
                            <Card className="glass border-white/10 overflow-hidden relative transition-colors hover:border-white/20">
                                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
                                    <CardTitle className="text-sm font-medium text-white/80">Active Now</CardTitle>
                                    <div className="p-2 bg-primary/10 rounded"><Activity className="w-4 h-4 text-primary" /></div>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="text-2xl font-bold text-white">+573</div>
                                    <p className="text-xs text-white/50 mt-1"><span className="text-emerald-400">+201</span> since last hour</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-7 w-full overflow-hidden">
                            <Card className="glass border-white/10 lg:col-span-4 min-h-[350px] relative overflow-hidden">
                                <CardHeader className="relative z-10 flex flex-row items-center justify-between">
                                    <CardTitle className="text-white">Revenue Analytics</CardTitle>
                                </CardHeader>
                                <CardContent className="h-[250px] flex items-center justify-center border-t border-white/5 mt-4 pt-4 relative z-10">
                                    <div className="w-full h-full border border-white/10 rounded bg-transparent flex items-center justify-center">
                                        <p className="text-white/40 text-sm">Interactive Chart Area</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="glass border-white/10 lg:col-span-3 relative overflow-hidden">
                                <CardHeader className="relative z-10">
                                    <CardTitle className="text-white">Recent Sales</CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="space-y-6">
                                        {[
                                            { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00" },
                                            { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00" },
                                            { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00" },
                                            { name: "William Kim", email: "will@email.com", amount: "+$99.00" },
                                            { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00" }
                                        ].map((user, i) => (
                                            <div key={i} className="flex items-center p-2 rounded hover:bg-white/5 transition-colors -mx-2">
                                                <div className="w-10 h-10 rounded bg-primary/10 mr-3 sm:mr-4 border border-primary/20 flex items-center justify-center overflow-hidden shrink-0">
                                                    <span className="text-primary text-xs font-bold">{user.name.split(' ').map(n => n[0]).join('')}</span>
                                                </div>
                                                <div className="space-y-1 min-w-0 pr-2">
                                                    <p className="text-sm font-medium leading-none text-white truncate">{user.name}</p>
                                                    <p className="text-xs sm:text-sm text-white/50 truncate">{user.email}</p>
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
