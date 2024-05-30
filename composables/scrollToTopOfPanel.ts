export default function() {
    document.querySelectorAll('.v-app-panel').forEach((el) => {
        el.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}
