import { createStore } from "zustand";

interface T{
    id: string;
    name: string;
    email: string;
    role: string;
    image: string;
    isActive: boolean;
    isVerified: boolean;
    isDeleted: boolean;
    lastLogin: string | null;
}

interface AuthState {
    isAuthenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void;
    user: Array<T> | null;
    setUser: (user: Array<T> | null) => void;
}
export const useAuthStore = createStore<AuthState>((set) => ({  
    isAuthenticated: false,
    setAuthenticated: (authenticated: boolean) => set({ isAuthenticated: authenticated }),
    user: null,
    setUser: (user: Array<T> | null) => set({ user }),
}));