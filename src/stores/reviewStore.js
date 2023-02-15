import { create } from "zustand"


export const useReviewStore = create((set) => ({
    reviews: "",
    fetchReviews: async (endpoint) => {
      const response = await fetch(endpoint)
      set({ reviews: await response.json() })
    },
    deleteReview: async (endpoint, id, token) => {
      const response = await fetch(endpoint + id, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.json())
    },
    editReview: async (endpoint, id) => {
      const response = await fetch(endpoint)
      console.log(response.json())
    },
  }))