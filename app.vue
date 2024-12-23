<template lang="pug">
div(@click='handleSwitchLayout' @dblclick='layout="default"') 123
	NuxtLayout(:name='layout')
		NuxtPage
UButton(
	label='Show toast'
	@click='handleToast')
UNotifications(
	:timeout= '1000')
</template>

<script lang="ts" setup>
const layout = ref('auth')
const toast = useToast()
const handleSwitchLayout = () => {
	layout.value = 'custom'
	console.log(layout)
}

const handleToast = () => {
	toast.add({ title: 'Hello world!', description: 'Описание' })
}
</script>

<style lang="sass" scoped>
.block
	width: 4rem
	min-height: 2rem
	outline: 1rem solid blue
</style>
