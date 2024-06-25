import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useMobileNavState } from "@/hooks/use-mobile-nav"
import { cn } from "@/lib/utils"
import { AlignJustify } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/config/site"

export function MobileNav() {

  const pathName = usePathname();

  const { isOpen, onOpen, onClose } = useMobileNavState()
  const onChange = (open: boolean) =>{
      if(!open){
          onClose()
      }
  };

  const routes = navItems.map((route) => ({
      ...route,
      active: pathName === route.href,
  }));

  return (
    <div className="block md:hidden">
      <Sheet open={isOpen} onOpenChange={onChange}>
        <Button variant="outline" className="border-none" onClick={()=>{onOpen()}}><AlignJustify/></Button>
        <SheetContent>
            <div className="flex flex-col gap-4">
                {routes.map((route)=>(
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "bg-background hover:bg-accent hover:text-accent-foreground rounded-full p-2",
                            route.active ? "font-semibold" : "text-neutral-500"
                        )}
                        onClick={()=>{
                          onClose()
                        }}
                    >
                        {route.label}
                    </Link>
                ))}
            </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}