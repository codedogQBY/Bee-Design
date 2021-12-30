import { defineComponent } from 'vue'
export default defineComponent({
    name: 'CustomComponent',
    label: '业务组件',
    order: 5,
    icon:'ChartPie',
    setup() {
        return () => (
            <><div>业务组件</div></>
        )
    }
})