<template>
    <section
        class="v-glossary-slug"
    >
        <slug-content
            v-if="pageContentData"
            :data="pageContentData"
        />
    </section>
</template>





<script setup lang="ts">

import {fetchApi_glossary_BySlug} from "~/utils/apiFetch";
import {Ref} from "@vue/reactivity";
import {UnwrapRef} from "vue";
import {IApiGlossary_item} from "~/utils/apiTypes";

const pageContentData: Ref<UnwrapRef<null | IApiGlossary_item>> = ref(null)

onMounted(async () => {
    const slug = useRoute().params.slug
    pageContentData.value = Array.isArray(slug) ? null : await fetchApi_glossary_BySlug(slug)
})

</script>





<style lang="scss" scoped >
.v-glossary-slug {
}
</style>
