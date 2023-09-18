<template>
    <div
      class="v-app"
    >
        <div
            class="v-app__nav"
        >
            <nuxt-link href="/">1 navigation mode</nuxt-link>
            <nuxt-link href="/navigation-mode-autoplay">2 navigation mode + auto play</nuxt-link>
            <nuxt-link href="/presentation-mode">3 presentation mode (auto play peut être activé aussi)</nuxt-link>
        </div>
        <div
            class="v-app__content"
        >
            <NuxtLayout>
                <NuxtPage/>
            </NuxtLayout>
        </div>
    </div>
</template>



<script lang="ts" setup>

</script>



<style lang="scss" scoped >
.v-app {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    width: 100%;
    height: calc(100% - var(--nav-height));
    overflow: scroll;
    overscroll-behavior: contain;
    background: orangered;
}

.v-app__content {
    width: 100%;
    height: 100%;
}

.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

a {
    display: inline-block;
    background: white;
    box-sizing: border-box;
    width: auto;
    height: 2rem;
    padding: .5rem;
    text-align: center;
    border-radius: .5rem;
}
</style>
