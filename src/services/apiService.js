import axios from 'axios';
import api from './apiUrl';
import { useLoadingStore } from '@/store/modules/loading';

const domain = import.meta.env.VITE_APP_BASE_API_URL;
const apiService = axios.create({
    baseURL: domain
});

// 請求攔截器
apiService.interceptors.request.use(
    (config) => {
        // 在發送請求之前做一些操作
        // 例如添加身份驗證標頭
        const loadingStore = useLoadingStore();
        const { setLoading } = loadingStore;
        setLoading(true);
        return config;
    },
    (error) => {
        // 請求發生錯誤時的處理邏輯
        return Promise.reject(error);
    }
);

// 響應攔截器
apiService.interceptors.response.use(
    (response) => {
        // 在收到響應之前做一些操作
        // 例如處理正常響應數據
        const loadingStore = useLoadingStore();
        const { setLoading } = loadingStore;
        setLoading(false);
        return response;
    },
    (error) => {
        // 響應發生錯誤時的處理邏輯
        // 例如處理錯誤狀態碼

        return Promise.reject(error);
    }
);

export const getUserLogin = data => apiService.get(api.apiSignIn, data);
export const getUserLogout = data => apiService.get(api.apiSignOut, data);
export const getUserSignUp = data => apiService.get(api.apiSignUp, data);
