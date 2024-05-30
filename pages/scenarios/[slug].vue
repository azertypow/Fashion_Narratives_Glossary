<template>
    <section
        class="v-scenario-slug"
    >
        <slug-content
            v-if="pageContentData"
            :data="pageContentData"
        />
    </section>
</template>





<script setup lang="ts">
import {defineProps, UnwrapRef} from 'vue'
import {Ref} from "@vue/reactivity";
import {IApiGlossary_item} from "~/utils/apiTypes";
import {fetchApi_glossary_BySlug, fetchApi_scenarios_BySlug} from "~/utils/apiFetch";

const pageContentData: Ref<UnwrapRef<null | IApiGlossary_item>> = ref(null)

onMounted(async () => {
    const slug = useRoute().params.slug
    pageContentData.value = Array.isArray(slug) ? null : await fetchApi_scenarios_BySlug(slug)
})
</script>





<style lang="scss" scoped >
.v-scenario-slug {
}
</style>
