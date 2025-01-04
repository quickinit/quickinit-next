// You can modify this file as per your requirement

import { create } from 'zustand';

interface CounterState {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
}

// create a store with the initial state
// this will persist the state across the components
const useCounterStore = create<CounterState>((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
	reset: () => set(() => ({ count: 0 })),
}));

// use this hook in your component to access the store
// example
// const { count, increment, decrement, reset } = useCounterStore();
// count will have the current value of the count
// increment will increment the count by 1 -> increment() will increment the count by 1
// decrement will decrement the count by 1 -> decrement() will decrement the count by 1
// reset will reset the count to 0 -> reset() will reset the count to 0

export default useCounterStore;
