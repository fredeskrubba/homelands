import { create } from 'zustand'

export const useGlobalStore = create((set) => ({
    colors: {
        brown: "#af7627",
        rose: "#fed9c9",
        black: "#000"
    }
}))