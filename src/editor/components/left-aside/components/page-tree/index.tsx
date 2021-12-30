import { defineComponent } from 'vue'
export default defineComponent({
    name: 'pageTree',
    label: '页面',
    order: 1,
    icon:'Page',
    setup() {
        return () => (
            <><div>页面</div></>
        )
    }
})