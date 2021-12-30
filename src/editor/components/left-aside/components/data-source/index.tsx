import { defineComponent } from 'vue'
export default defineComponent({
    name: 'DataSource',
    label: '数据源',
    order: 2,
    icon:'Data',
    setup() {
        return () => (
            <><div>数据源</div></>
        )
    }
})