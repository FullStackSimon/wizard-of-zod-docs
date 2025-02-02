import DefaultTheme from 'vitepress/theme'
import './custom.css'
import mediumZoom from 'medium-zoom'
import { onMounted } from 'vue'

export default {
    ...DefaultTheme,
    setup() {
        onMounted(() => {
            mediumZoom('picture img')
        })
    }
}