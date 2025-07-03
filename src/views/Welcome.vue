<template>
    <h1>Welcome</h1>

    <el-button type="primary" @click="increment">{{ count }}</el-button>



    <el-input v-model="msg" placeholder="请输入内容" />

    <el-card>
        <h2>{{ msg }}</h2>
    </el-card>



    <el-card>
        <el-form :model="userInfo" label-width="80px">
            <el-form-item label="name">
                <el-input v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="age">
                <el-input v-model="userInfo.age"></el-input>
            </el-form-item>
            <el-form-item label="email">
                <el-input v-model="userInfo.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">Submit</el-button>
            </el-form-item>
        </el-form>




    </el-card>



    <el-card>

        <h2>Counter Store</h2>
        <el-button type="primary" @click="useNumStore.increment">Increment</el-button>
        <p>Count: {{ useNumStore.num }}</p>
    </el-card>

</template>


<script setup lang="ts">

import { ref, reactive, toRaw } from 'vue';
import { useNumStore } from '../store/NumStore';

console.log('%c [ NumStore ]-53', 'font-size:13px; background:pink; color:#bf2c9f;', useNumStore.num);


const count = ref(0);

const increment = () => {
    count.value++;
};

const msg = ref('Hello Vue 3 + TypeScript + Vite');




const userInfo: {
    name: string;
    age: number;
    email: string;
} = reactive({
    name: 'John Doe',
    age: 30,
    email: ''
});

const submit = () => {
    console.log('Submitted:', toRaw(userInfo));
};


</script>