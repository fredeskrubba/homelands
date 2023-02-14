import { create } from "zustand"


export const useReviewStore = create((set) => ({
    reviews: "",
    fetchReviews: async (endpoint) => {
      const response = await fetch(endpoint)
      set({ reviews: await response.json() })
    },
  }))