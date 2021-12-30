import { defineComponent } from 'vue'
export default defineComponent({
    name: 'ContainerComponent',
    label: '容器组件',
    order: 4,
    icon:'Box',
    setup() {
        return () => (
            <><div>容器组件</div></>
        )
    }
})