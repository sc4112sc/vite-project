import { defineStore } from 'pinia';

export const useLoadingStore = defineStore({
    id: 'loading',
    state: () => ({
        isLoading: false
    }),
    actions: {
        setLoading (payload) {
            this.isLoading = payload;
            console.log('isLoading', this.isLoading);
        }
    }
});
