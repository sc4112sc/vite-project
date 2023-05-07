<script setup>
import { defineComponent, ref } from 'vue';
import { getUserLogin } from '@/services/apiService';
import { useLoadingStore } from '@/store/modules/loading';
const loadingStore = useLoadingStore();
const { setLoading } = loadingStore;

defineComponent({
    name: 'AboutView'
});

const responseData = ref('Hello, Vue 3!');

const getResponseData = () => {
    getUserLogin()
        .then(response => {
            console.log(response.data);
            responseData.value = response.data;
        })
        .catch(error => {
            console.error(error);
        });
};

const openLoading = () => {
    setLoading(true);
};
</script>

<style scoped>
.about {
    background-color: bisque;
    height: 100vh; /* 設定高度為 100% 視窗高度 */
    width: 100vw; /* 設定寬度為 100% 視窗寬度 */
    margin: 0; /* 去除边距 */
    padding: 0; /* 去除内边距 */
    overflow: hidden; /* 隐藏溢出内容 */
}
</style>

<template>
    <div class="about">
        <h1>About</h1>
        <p>This is the about page.</p>
        <br>
        <button @click="getResponseData">call api</button>
        <br>
        <span>{{ responseData }}</span>
        <br>
        <button @click="openLoading">打開loading</button>
        <br>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>
