"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { navItems } from "@/config/site"

export function MainNav({
    className, 
}: React.HTMLAttributes<HTMLElement>){
    const pathName = usePathname();
    const routes = navItems.map((route) => ({
        ...route,
        active: pathName === route.href,
    }));

    return (
        <nav className={cn("hidden md:flex items-center space-x-4 lg:space-x-6", className)}>
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary", 
                        route.active ? "text-black dark:text-white" : "text-muted-foreground"
                        )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
};