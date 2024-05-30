<template>
    <section class="v-app-panel app-rm-margin-child">
        <div
            class="v-app-panel__box__content"
        >
            <div
                class="v-app-panel__box__content__text"
            >
                <div
                    v-if="showAbout"
                    class="app-rm-margin-child"
                    v-html="useSiteDetails().value.teamAbout"
                ></div>
                <div
                    v-else-if="showTeam"
                    class="app-rm-margin-child"
                    v-html="useSiteDetails().value.teamText"
                ></div>
                <div
                    v-else
                    class="app-rm-margin-child"
                >
                    <h2 v-html="useSiteDetails().value.introText" ></h2>
                </div>
            </div>



            <button
                class="button--xl"
                @click="takeMeThroughClicked"
            ><template v-if="!takeMeThrough" >Take me through</template><template v-else>Close presentation mode</template>
            </button>
        </div>

        <div
            class="v-app-panel__box__nav"
        >
            <nuxt-link  class="app-nav-link" href="/" >Home</nuxt-link>
            <nuxt-link  class="app-nav-link" href="/glossary" >Glossary</nuxt-link>
            <nuxt-link  class="app-nav-link" href="/Scenarios" >Scenarios</nuxt-link>
            <div        class="app-nav-link" @click="showTeamClicked">Team</div>
            <div        class="app-nav-link" @click="showAboutClicked">About</div>
            <a          class="app-nav-link" target="_blank" href="https://www.instagram.com/headmediadesign/">Instagram</a>
            <a          class="app-nav-link" target="_blank" href="https://github.com/azertypow/Fashion_Narratives_Glossary">Github</a>
        </div>
    </section>
</template>





<script lang="ts" setup>

import {useRoute} from "#app";
import {useSiteDetails} from "~/composables/useStates";

const panelIsOpen = usePanelIsOpen()
const takeMeThrough = useTakeMeThrough()
const showTeam = useShowTeam()
const showAbout = useShowAbout()

function takeMeThroughClicked() {
    if( useRoute().name !== 'index' ) useRouter().push('/')
    takeMeThrough.value = !takeMeThrough.value

    if( takeMeThrough.value )  panelIsOpen.value = false
}

function showTeamClicked() {
    showAbout.value = false
    showTeam.value = !showTeam.value
    scrollToTopOfPanel()
}

function showAboutClicked() {
    showTeam.value = false
    showAbout.value = !showAbout.value
    scrollToTopOfPanel()
}


</script>





<style lang="scss" scoped >
.v-app-panel {
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(180deg, var(--fs-color-orange) 60%, var(--fs-color-green) 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5rem 1rem 0;
    overflow: auto;

    /* Barre de défilement pour Chrome, Safari et Edge */
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--fs-color-orange);
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent; /* Couleur de fond de la barre de défilement */
    }
}

.v-app-panel__box__content {
    padding-bottom: 2rem;
}

.v-app-panel__box__content__text {
    padding-top: 1rem;
    padding-bottom: 2rem;
}

.v-app-panel__box__nav {
    font-weight: 500;
    padding-bottom: 1rem;

    > * {
        font-size: 1.75rem;
        line-height: 1.75rem;
        cursor: pointer;
        display: block;
        color: inherit;
    }
}
</style>
