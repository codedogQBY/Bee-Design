import { defineComponent } from 'vue'
export default defineComponent({
    name: 'BaseWidgets',
    label: '基础组件',
    order: 3,
    icon:'Components',
    setup() {
        return () => (
            <><div>基础组件</div></>
        )
    }
})