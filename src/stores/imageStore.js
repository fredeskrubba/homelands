import { create } from "zustand"

export const useImageStore = create((set) => ({
    images: "",
    fetchImages: async (endpoint) => {
      const response = await fetch(endpoint)
      set({ images: await response.json() })
    },
  }))