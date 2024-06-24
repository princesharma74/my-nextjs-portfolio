import { create } from "zustand";

interface ContactModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useContactState = create<ContactModalState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
