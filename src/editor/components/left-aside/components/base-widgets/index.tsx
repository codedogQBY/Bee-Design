import DraggableTransitionGroup from '@/editor/components/simulator-editor/draggable-transition-group.vue'
import { createNewBlock } from '@/editor/editor.utils'
import { visualConfig } from '@/visual.config'
import { cloneDeep } from 'lodash'
import { defineComponent, ref } from 'vue'
import styles from './index.module.scss'


export default defineComponent({
    name: 'BaseWidgets',
    label: '基础组件',
    order: 3,
    icon: 'Components',
    setup() {
        // 所有的基本组件
        const baseWidgets = ref(visualConfig.componentModules.baseWidgets)
        const log = (evt: any) => {
            window.console.log('onChange:', evt)
        }
        // 克隆组件
        const cloneDog = (comp: any) => {
            console.log('当前拖拽的组件：', comp)
            const newComp = cloneDeep(comp)
            return createNewBlock(newComp)
        }
        return () => (
            <><DraggableTransitionGroup
                class={styles['list-group']}
                v-model={baseWidgets.value}
                group={{ name: 'components', pull: 'clone', put: false }}
                clone={cloneDog}
                onChange={log}
                itemKey={'key'}
            >
                {{
                    item: baseWidgets.value.map((element ) => {
                        return(
                        <div class={styles['list-group-item']} data-label={element.label}>
                            {element.preview()}
                        </div>
                    )})
                }}
            </DraggableTransitionGroup></>
        )
    }
})