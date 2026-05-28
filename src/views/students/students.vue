<template>
	<el-button @click="sayHello">say hello</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
	name: 'Students',
	setup() {
		const sayHello = () => {
			console.log('hello');
		}
		return {
			sayHello
		};
	},
});
</script>

<style lang="scss" scoped>
@import './students.scss';
</style>