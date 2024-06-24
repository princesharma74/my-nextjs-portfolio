"use client"

import { useContactState } from "@/hooks/use-contact-state";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";


export const ContactModal = () => {
    const {isOpen, onClose, onOpen} = useContactState();

    return (
        <Modal
            title="Contact"
            description="Type your message below"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col gap-2">
              <div>
                <form
                  action={()=>{}}
                  method="post"
                >
                  <Button variant="outline" className="w-full" type="submit">
                    Send
                  </Button>
                </form>
              </div>
            </div>
        </Modal>
    )
}