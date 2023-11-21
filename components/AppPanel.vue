<template>
    <section class="v-app-panel app-rm-margin-child">
        <div
            class="v-app-panel__box__content"
        >
            <h2>A research-project that&nbsp;maps out the&nbsp;narrative possibilities of digital fashion in&nbsp;virtual
                environments</h2>
            <button
                class="button--xl"
                @click="takeMeThroughClicked"
            ><template v-if="!takeMeThrough" >Take me through</template><template v-else>Close presentation mode</template>
            </button>
        </div>

        <div
            class="v-app-panel__box__nav"
        >
            <nuxt-link href="/" >Home</nuxt-link>
            <nuxt-link href="/glossary" >Glossary</nuxt-link>
            <nuxt-link href="/Scenarios" >Scenarios</nuxt-link>
            <div>Team</div>
            <div>About</div>
            <a target="_blank" href="https://www.instagram.com/headmediadesign/">Instagram</a>
            <a target="_blank" href="https://github.com/azertypow/Fashion_Narratives_Glossary">Github</a>
        </div>
    </section>
</template>





<script lang="ts" setup>

const panelIsOpen = usePanelIsOpen()
const takeMeThrough = useTakeMeThrough()

function takeMeThroughClicked() {
    takeMeThrough.value = !takeMeThrough.value

    if( takeMeThrough.value )  panelIsOpen.value = false
}


</script>





<style lang="scss" scoped >
.v-app-panel {
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(180deg, var(--color-orange) 60%, var(--color-green) 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10rem 1rem 1rem;
}

.v-app-panel__box__nav {
    font-weight: 500;

    > * {
        font-size: 1.75rem;
        line-height: 1.75rem;
        cursor: pointer;
        display: block;
        color: inherit;
    }
}
</style>
