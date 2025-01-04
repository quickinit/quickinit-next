import { create } from 'zustand';

interface UserState {
	username: string;
	email: string;
	age: number;
	setUser: () => void;
	setEmail: () => void;
	reset: () => void;
}

const useUserStore = create<UserState>((set) => ({
	username: '',
	email: '',
	age: 0,
	setUser: () => set((state) => ({ username: state.username, email: state.email })),
	setEmail: () => set((state) => ({ email: state.email })),
	reset: () => set(() => ({ username: '', email: '', age: 0 })),
}));

export default useUserStore;
