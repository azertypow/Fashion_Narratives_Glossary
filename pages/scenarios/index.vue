<template>
    <section
        class="v-scenario-index"
    >
        <div
            class="v-scenario-index__content"
            v-if="scenarios"
        >
            <NuxtLink
                class="v-scenario-index__item"
                v-for="scenarioItem of scenarios.pages"
                :href="`/${scenarioItem.uri}`"
            >
                <img
                    alt="image cover for scenario"
                    :src="scenarioItem.images[0].resize.small"
                    class="v-scenario-index__item__cover"
                />
<!--                <div-->
<!--                    class="v-scenario-index__item__title"-->
<!--                >{{scenario.titre}}</div>-->
            </NuxtLink>
        </div>
    </section>
</template>





<script setup lang="ts">
import {defineProps, UnwrapRef} from 'vue'
import {Ref} from "@vue/reactivity";
import {IApiScenarios} from "~/utils/apiTypes";
import {fetchApi_scenarios} from '~/utils/apiFetch'

const scenarios: Ref<UnwrapRef<null | IApiScenarios>> = ref( null )

onMounted(async () => {
    scenarios.value = await fetchApi_scenarios()
})


</script>





<style lang="scss" scoped >
.v-scenario-index {
    padding-top: 5rem;
    padding-bottom: 50vh;
    box-sizing: border-box;
    padding-left: var(--fs-gutter);
    padding-right: var(--fs-gutter);
}

.v-scenario-index__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--fs-gutter);
}

.v-scenario-index__item {
    display: block;
    width: 100%;

    .v-scenario-index__item__cover {
        display: block;
        width: 100%;
        aspect-ratio: 2/3;
        object-fit: cover;
    }
}
</style>
