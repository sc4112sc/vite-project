<script setup>
import { useCounterStore } from '@/store/modules/counter';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();

const { count } = storeToRefs(counterStore);
const { increment, decrement } = counterStore;

const message = ref('Hello, Vue 3!');

const changeMessage = () => {
    message.value = 'New Message';
};
</script>

<template>
    <div>
        <h1>{{ message }}</h1>
        <h1>Counter: {{ count }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="changeMessage">Change Message</button>
        <router-link to="/">Go to Home</router-link>
    </div>
</template>
