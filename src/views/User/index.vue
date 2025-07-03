<template>
    <h1>User</h1>
    <el-card>
        <el-button type="primary" @click="useNumStore.increment">Increment</el-button>
        <p>Count: {{ useNumStore.num }}</p>
    </el-card>
</template>


<script setup lang="ts">
import { el } from 'element-plus/es/locales.mjs';
import { useNumStore } from '../../store/NumStore';




</script>