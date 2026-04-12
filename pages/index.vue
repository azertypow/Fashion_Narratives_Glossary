<template>
    <section class="v-index" >
        <iframe
            width="auto"
            height="auto"
            src="https://miro.com/app/live-embed/uXjVJw218jc=/?embedMode=view_only_without_ui&moveToWidget=3458764646786149555&embedId=895878607510"
            frameborder="0"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowfullscreen
        />
    </section>
</template>





<script lang="ts" setup>
const panelIsOpen = usePanelIsOpen()
</script>





<style lang="scss" scoped >
.v-index {
    box-sizing: border-box;
    padding: 0;
    width: 100%;
    height: 100%;
}

iframe {
    border: none;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.v-index__close-presentation {
    position: absolute;
    top: var(--fs-gutter);
    right: var(--fs-gutter);
    z-index: 100;
    opacity: .25;

    &:hover {
        opacity: 1;
    }
}

</style>
