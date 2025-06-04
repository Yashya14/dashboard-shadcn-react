import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { Navbar } from "@/components/navbar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"

export default function Page() {
    return (
        <SidebarProvider
            style={{
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties}
        >
            <AppSidebar variant="inset" /> {/*Sidebar */}
            <SidebarInset>
                {/* Navbar only in the main content area */}
                <div className="sticky top-0 z-40 bg-background border-b">
                    <Navbar /> {/*Navbar */}
                </div>
                {/* Main content area */}
                <div className="flex flex-1 flex-col">
                    <SiteHeader />
                    <div className="@container/main flex flex-1 flex-col">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <SectionCards />
                            <div className="px-4 lg:px-6">
                                <ChartAreaInteractive />
                            </div>
                            <DataTable data={data} /> {/* Data Table */}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}