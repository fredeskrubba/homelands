import { create } from 'zustand'

export const useLoginStore = create((set) => ({
    token: "",
    fetchLogin: async (endpoint, username, password) => {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            })
        })
        set({ token: await response.json() })
      },
    resetToken: ()=> set({token: ""})
}))