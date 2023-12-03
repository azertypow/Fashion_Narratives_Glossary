<template>
    <div
      class="v-app"
      :class="{
        'menu-is-open': usePanelIsOpen().value,
      }"
    >
        <div
            class="v-app__panel"
        >
            <div
                class="v-app__panel__header"
            >
                <div
                    class="app-button app-button--width-img"
                    @click="panelIsOpen = !panelIsOpen"
                >
                    <img
                        alt="ui open panel"
                        src="./assets/menu_FILL0_wght400_GRAD0_opsz24.svg"
                        v-if=" ! panelIsOpen"
                    />
                    <img
                        alt="ui close panel"
                        src="./assets/close_FILL0_wght400_GRAD0_opsz24.svg"
                        v-else
                    />
                    <template
                    ></template>
                </div>
                <h1
                    class="v-app__panel__header__title"
                    v-if="!takeMeThrough"
                >Fashion Narratives</h1>
            </div>

            <transition
                name="fade-transition"
            >
                <div
                    v-if="panelIsOpen"
                    class="v-app__panel__box"
                >
                    <AppPanel/>
                </div>
            </transition>
        </div>
        <div
            class="v-app__content"
        >
            <NuxtLayout>
                <NuxtPage/>
            </NuxtLayout>
            <div
                v-if="panelIsOpen"
                @click="panelIsOpen = false"
                class="v-app__content__cache-for-nav-open"
            ></div>
        </div>
    </div>
</template>



<script lang="ts" setup>

import {usePanelIsOpen} from "#imports";

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
    background: white;
}

.v-app__content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    overscroll-behavior: contain;
    position: relative;
    z-index: 0;
    transform-origin: right;
    transition: filter 1s cubic-bezier(0.42, 0, 0, 1), transform 1s cubic-bezier(0.42, 0, 0, 1);
    filter: blur(0px);
    transform: scale(1);

    .v-app__content__cache-for-nav-open {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;height: 100%;
        cursor: pointer;

    }

    .menu-is-open & {
        transition: filter 2s cubic-bezier(0.42, 0, 0, 1), transform 2s cubic-bezier(0.42, 0, 0, 1);
        filter: blur(2px);
        transform: scale(.99);
    }
}


.v-app__panel {
}

.v-app__panel__header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 10;
    display: flex;
    flex-direction: row;
    gap: var(--fs-gutter);
    align-items: center;
    width: calc(100% / 3 );
    min-width: 25em;

    @media (min-width: 1400px) {
        width: calc(100% / 4 );
    }
}

.v-app__panel__header__title {
    margin: 0;
    pointer-events: none;
    user-select: none;
}

.v-app__panel__box {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 5;
    width: calc(100% / 3 );
    min-width: 25em;

    @media (min-width: 1400px) {
        width: calc(100% / 4 );
    }
}


// transition

.fade-transition-enter-active,
.fade-transition-leave-active {
    transition: opacity 1s cubic-bezier(.42, 0, 0, 1), transform 1s cubic-bezier(.42, 0, 0, 1);
    transform-origin: left;
}

.fade-transition-enter-from,
.fade-transition-leave-to {
    opacity: 0;
    transform: scale(1.1);
}

</style>
