"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export function MainNav({
    className, 
}: React.HTMLAttributes<HTMLElement>){
    const pathName = usePathname();
    const routes = [
        {
            href: `#socials`,
            label: "Socials", 
            active: pathName === `#socials`,
        },
        {
            href: `#projects`,
            label: "Projects", 
            active: pathName === `#projects`,
        },
        {
            href: `#templates`,
            label: "Templates", 
            active: pathName === `#templates`,
        },
    ];

    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
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