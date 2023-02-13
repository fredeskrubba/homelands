import { create } from "zustand"

export const useHousesStore = create((set) => ({
    houses: "",
    fetchHouses: async (endpoint) => {
      const response = await fetch(endpoint)
      set({ houses: await response.json() })
    },
  }))