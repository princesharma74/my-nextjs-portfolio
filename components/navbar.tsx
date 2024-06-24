"use client"
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "./ui/button";
import { useContactState } from "@/hooks/use-contact-state";

const Navbar = () => {
    const {isOpen, onClose, onOpen} = useContactState();
    return ( 
            <div className="flex h-16 items-center justify-between px-4">
                <div className="font-bold">PRINCE SHARMA</div>
                <div>
                    <MainNav className="mx-6"/>
                </div>
                <div>
                    <Button variant={"outline"} className="rounded-full" onClick={onOpen}>Contact me</Button>
                    <ModeToggle/>
                </div>
            </div>
    );
}
 
export default Navbar;