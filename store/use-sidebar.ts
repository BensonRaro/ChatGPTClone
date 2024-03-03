import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SidebarStore {
  mobileSidebar: boolean;
  collapsed: boolean;
  setSidebar: (collapsed: boolean) => void;
  setMobileSidebar: (mobileSidebar: boolean) => void;
}

export const useSidebar = create(
  persist<SidebarStore>(
    (set) => ({
      collapsed: false,
      mobileSidebar: false,
      setMobileSidebar: (mobileSidebar) =>
        set({ mobileSidebar: mobileSidebar }),
      setSidebar: (collapsed) => set({ collapsed: collapsed }),
    }),
    {
      name: "sidebar-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
