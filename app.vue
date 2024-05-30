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
                    @click="setPanelStatus"
                >
                    <img
                        alt="ui open panel"
                        src="./assets/menu_FILL0_wght400_GRAD0_opsz24.svg"
                        v-if=" ! panelIsOpen"
                    />
                    <img
                        alt="ui close panel"
                        src="./assets/arrow_back_FILL0_wght400_GRAD0_opsz24.svg"
                        v-else-if="showTeam || showAbout"
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

            <transition
                name="fade-transition"
            >
                <div class="v-app__logo-container"
                     v-if="panelIsOpen"
                >
                    <img
                        style="display: block; height: 1.25rem"
                        alt="logo head" src="./assets/logo_hes-so.png"
                        draggable="false"
                    />
                    <a
                        href="https://www.hesge.ch/head/"
                        target="_blank"
                    >
                        <img
                            style="display: block; height: 3rem"
                            alt="logo head" src="./assets/logo_head.png"
                            draggable="false"
                        />
                    </a>
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
                @click="setPanelStatus"
                class="v-app__content__cache-for-nav-open"
            ></div>
        </div>
    </div>
</template>



<script lang="ts" setup>

import {fetchApi_siteDetails, usePanelIsOpen, useShowAbout, useShowTeam} from "#imports";
import {useSiteDetails} from "~/composables/useStates";

const panelIsOpen = usePanelIsOpen()
const takeMeThrough = useTakeMeThrough()
const showTeam = useShowTeam()
const showAbout = useShowAbout()

useRouter().beforeEach((to, from, next) => {
    panelIsOpen.value = false
    showTeam.value = false
    showAbout.value = false
    next()
})

onMounted(async () => {
    useSiteDetails().value = await fetchApi_siteDetails()
})

function setPanelStatus() {
    if( showTeam.value || showAbout.value ) {
        showTeam.value = false
        showAbout.value = false
        scrollToTopOfPanel()
    } else {
        panelIsOpen.value = !panelIsOpen.value
    }
}

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
        background: rgba(255, 255, 255, 0.5);
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
    transition: background-color 0s 0s;
    background-color: transparent;

    @media (min-width: 1400px) {
        width: calc(100% / 4 );
    }

    .menu-is-open & {
        background-color: var(--fs-color-orange);
        transition: background-color 0s 3s;
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

.v-app__logo-container {
    position: fixed;
    right: var(--fs-gutter);
    bottom: var(--fs-gutter);
    z-index: 100;
    display: flex;
    gap: 2rem;
    align-items: flex-end;
    user-select: none;

    a {
        display: block;
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
