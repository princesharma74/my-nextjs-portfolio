import { create } from "zustand";

interface DownloadModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useDownloadState = create<DownloadModalState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
