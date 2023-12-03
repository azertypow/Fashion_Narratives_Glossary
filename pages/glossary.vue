<template>
    <section class="v-glossary" >
        <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <img src="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2739&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <img src="https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=2605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <img src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    </section>
</template>





<script lang="ts" setup>
defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-glossary {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--fs-gutter);

    > img {
        display: block;
        width: 100%;
    }
}
</style>
