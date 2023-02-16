import { create } from "zustand"

export const useHousesStore = create((set) => ({
    houses: "",
    houseDetails: "",
    fetchHouses: async (endpoint) => {
      const response = await fetch(endpoint)
      set({ houses: await response.json() })
    },
    fetchHouseDetails: async (endpoint) => {
      const response = await fetch(endpoint)
      set({ houseDetails: await response.json() })
    },
  }))