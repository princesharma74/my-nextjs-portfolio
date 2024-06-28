"use client"
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "./ui/button";
import { useContactState } from "@/hooks/use-contact-state";
import { MobileNav } from "./mobile-nav";

const Navbar = () => {
    return ( 
            <div className="flex h-16 items-center justify-between px-4">
                <div className="font-bold text-2xl mx-4">PRINCE</div>
                <div>
                    <MainNav className="mx-6"/>
                </div>
                <div className="flex gap-2">
                    {/* <Button variant={"outline"} className="rounded-full" onClick={onOpen}>Contact me</Button> */}
                    <div>
                        <ModeToggle/>
                    </div>
                    <div>
                        <MobileNav/>
                    </div>
                </div>
            </div>
    );
}
 
export default Navbar;