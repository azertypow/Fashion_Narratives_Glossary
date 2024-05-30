<template>
    <section
        class="v-scenario-id"
    >
        <article
            class="v-slug-content__content"
        >
            <h1>{{data.title}}</h1>

            <div v-html="data.teamText"/>

        </article>

        <div
            class="v-slug-content__ressources"
        >
<!--            <div-->
<!--                class="v-slug-content__ressources__video"-->
<!--            >-->
<!--                <div-->
<!--                    class="v-slug-content__ressources__video__iframe-box"-->
<!--                >-->
<!--                    <iframe-->
<!--                        title="vimeo-player"-->
<!--                        src="https://player.vimeo.com/video/465360169"-->
<!--                        width="1280" height="720" frameborder="0"-->
<!--                        allowfullscreen-->
<!--                    />-->
<!--                </div>-->
<!--            </div>-->

            <div
                class="v-slug-content__ressources__img"
            >
                <img alt="object photography"
                     v-for="imageData of data.images"
                     :src="imageData.url"
                />
            </div>

        </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {fetchApi_glossary_BySlug} from "~/utils/apiFetch";
import {IApiGlossary_item} from "~/utils/apiTypes";

const props = defineProps<{
    data: IApiGlossary_item
}>()
</script>





<style lang="scss" scoped >
.v-scenario-id {
    padding-top: 5rem;
    padding-bottom: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    overflow: hidden;
    gap: var(--fs-gutter);
    align-items: start;
}

.v-slug-content__content {
    width: 100%;
    padding-left: var(--fs-gutter);
    padding-right: var(--fs-gutter);
    max-width: 46rem;
    position: sticky;
    box-sizing: border-box;
}

.v-slug-content__ressources {
    width: 100%;
    box-sizing: border-box;
    padding-right: var(--fs-gutter);
}

.v-slug-content__ressources__img {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--fs-gutter);
}

img {
    display: block;
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;

    &:last-child {
        grid-column-start: 1;
        grid-column-end: 4;
    }
}

.v-slug-content__ressources__video {
    padding-bottom: var(--fs-gutter);
}

.v-slug-content__ressources__video__iframe-box {
    position: relative;
    width: 100%;
    padding-top: 56.25%;

    iframe {
        top: 0;
        left: 0;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
    }
}

</style>
