import DefaultTheme from 'vitepress/theme'
import './custom.css'
import mediumZoom from 'medium-zoom'
import { onMounted, nextTick } from 'vue'
import { useRouter } from 'vitepress'

export default {
    ...DefaultTheme,
    setup() {
        const router = useRouter()

        const applyZoom = () => {
            nextTick(() => {
                mediumZoom('picture img')
            })
        }

        onMounted(() => {
            applyZoom()
            router.onAfterRouteChanged = () => {
                applyZoom()
            }
        })
    }
}
