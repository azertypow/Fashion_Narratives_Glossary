<template>
    <div
      class="v-app"
    >
        <div
            class="v-app__panel"
        >
            <div
                class="v-app__panel__header"
            >
                <h1 v-if="!takeMeThrough" >Fashion Narratives</h1>

                <button
                    @click="panelIsOpen = !panelIsOpen"
                >
                    <template
                        v-if=" ! panelIsOpen"
                    >Open Panel</template>
                    <template
                        v-else
                    >Close Panel</template>
                </button>
            </div>

            <div
                v-if="panelIsOpen"
                class="v-app__panel__box"
            >
                <AppPanel/>
            </div>
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

const panelIsOpen = usePanelIsOpen()
const takeMeThrough = useTakeMeThrough()

</script>



<style lang="scss" scoped >
.v-app {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--color-green);
}

.v-app__content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    overscroll-behavior: contain;
    position: relative;
    z-index: 0;
}

.v-app__panel {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% / 3 );
    height: 100%;
    box-sizing: border-box;
    z-index: 100;
    min-width: 25em;

    @media (min-width: 1400px) {
        width: calc(100% / 4 );
    }
}

.v-app__panel__header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 10;
}

.v-app__panel__box {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 5;
}

</style>
