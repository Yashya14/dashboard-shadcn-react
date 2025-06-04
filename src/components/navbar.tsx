import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Tooltip } from "@/components/tooltip"
import { Home, User, Settings } from "lucide-react"

export function Navbar() {
    return (
        <nav className="h-14 flex items-center border-b bg-background px-4 lg:px-6">
            <Tooltip label="Toggle Sidebar">
                <SidebarTrigger className="-ml-1" />
            </Tooltip>
            <Separator
                orientation="vertical"
                className="mx-2 data-[orientation=vertical]:h-4"
            />
            <span className="text-lg font-semibold">Dashboard</span>
            <div className="ml-auto flex items-center gap-2">
                <Tooltip label="Home">
                    <Button variant="outline" size="sm">
                        <Home className="h-4 w-4" />
                    </Button>
                </Tooltip>
                <Tooltip label="Profile">
                    <Button variant="outline" size="sm">
                        <User className="h-4 w-4" />
                    </Button>
                </Tooltip>
                <Tooltip label="Settings">
                    <Button variant="outline" size="sm" className="">
                        <Settings className="h-4 w-4" />
                    </Button>
                </Tooltip>
                <Tooltip label="Toggle Theme">
                    <ModeToggle />
                </Tooltip>
                {/* <Tooltip label="Logout">
                    <Button size="sm">
                        <LogOut className="h-4 w-4" /> Logout
                    </Button>
                </Tooltip> */}
            </div>
        </nav>
    )
}