<template>
    <section class="v-glossary" >

        <transition name="fade-transition-reverse">
            <div
                v-if="!panelIsOpen && glossary"
                class="v-glossary__tags-box"
            >
                <div class="app-tag"
                     @click=""
                     v-for="pageItem of glossary.pages"
                ><nuxt-link class="app-tag__text" :href="`/${pageItem.uri}`">{{pageItem.title}}</nuxt-link></div>
            </div>
        </transition>


        <div class="v-glossary__content"
             v-if="glossary"
        >
            <template v-for="pageItem of glossary.pages"
            >
                <img alt="glossary illustration"
                     v-for="pageImage of pageItem.images"
                     :src="pageImage.url"
                >
            </template>
        </div>
    </section>
</template>





<script lang="ts" setup>

import {fetchApi_glossary} from "~/utils/apiFetch";
import {IApiGlossary} from "~/utils/apiTypes";
import {Ref} from "@vue/reactivity";
import {UnwrapRef} from "vue";
import page from "nuxt/dist/pages/runtime/page";

const activatedTag  = useActivatedTag()
const panelIsOpen   = usePanelIsOpen()

const glossary: Ref<UnwrapRef<null | IApiGlossary>> = ref( null )

onMounted(async () => {
    glossary.value = await fetchApi_glossary()
})

</script>





<style lang="scss" scoped >
.v-glossary {
    padding-top: 8rem;
    padding-bottom: 50vh;
}

.v-glossary__tags-box {
    z-index: 1;
    position: fixed;
    top: 4rem;
    left: 0;
    width: 100%;
    align-items: center;
    display: flex;
    gap: 1rem;
    box-sizing: border-box;
    padding: 1rem var(--fs-gutter) 0;
    flex-wrap: wrap;
}

.v-glossary__content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--fs-gutter);

    > img {
        display: block;
        width: 100%;
        aspect-ratio: 2/3;
        object-fit: cover;
    }
}

//todo: tags glossaire
//todo: tags visibility home and other pages
//todo: team and about

</style>
