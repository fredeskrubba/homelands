import { create } from 'zustand'

export const useEmployeeStore = create((set) => ({
    employees: "",
    fetchEmployees: async (endpoint) => {
        const response = await fetch(endpoint)
        set({ employees: await response.json() })
      },
}))