<script setup>
import { useLoadingStore } from '@/store/modules/loading';
import { storeToRefs } from 'pinia';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
</script>

<template>
    <Loading :active="isLoading"></Loading>
    <router-view></router-view>
</template>
