import { Left, Right } from '@icon-park/vue-next'
import { defineComponent, reactive } from 'vue'
import styles from './index.module.scss'

export default defineComponent({
    name:'RightAttributePanel',
    setup(){
        const state = reactive({
            activeName:'attr',
            isOpen:true
        })

        return()=>(
            <>
                <div class={[styles.drawer, { [styles['is-open']]: state.isOpen }]}>
                    <div class={styles['floating-action-btn']} onClick={() => (state.isOpen = !state.isOpen)}>
                        {state.isOpen ? <Right></Right> : <Left></Left>}
                    </div>
                    <div class={styles.attrs} >
                    </div>
                </div>
            </>
        )
    }
})