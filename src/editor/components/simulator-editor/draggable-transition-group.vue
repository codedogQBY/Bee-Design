<template>
    <draggable
        v-model="list"
        class="dragArea list-group"
        :class="{ isDrag }"
        tag="transition-group"
        :component-data="{
            tag: 'div',
            type: 'transition-group',
            name: !isDrag ? 'flip-list' : null,
        }"
        :group="group"
        v-bind="{ ...dragOptions, ...$attrs }"
        :item-key="itemKey"
        @start="isDrag = true"
        @end="isDrag = false"
    >
                <slot name="item" > </slot>
    </draggable>
</template>

<script lang="ts">
import { useVModel } from '@vueuse/core';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
export default defineComponent({
    name: 'DraggableTransitionGroup',
    components: { draggable:VueDraggableNext},
    props: {
        modelValue: {
            type: Array,
            default: () => [],
        },
        drag: {
            type: Boolean,
            default: false,
        },
        itemKey: {
            type: String,
            default: '_vid',
        },
        group: {
            type: Object,
            default: () => ({ name: 'components' }),
        },
        fallbackClass: String,
    },
    emits: ['update:modelValue', 'update:drag'],
    setup(props, { emit }) {
        const state = reactive({
            list: useVModel(props, 'modelValue', emit),
            isDrag: useVModel(props, 'drag', emit),
        });
        const dragOptions = computed(() => ({
            animation: 200,
            disabled: false,
            scroll: true,
            ghostClass: 'ghost',
        }));
        return {
            ...toRefs(state),
            dragOptions,
        };
    },
});
</script>

<style lang="scss" scoped>
@import './func.scss';
.flip-list-move {
    transition: transform 0.5s;
}

.no-move {
    transition: transform 0s;
}

.ghost {
    background: #c8ebfb;
    opacity: 0.5;
}

.list-group {
    height: 100%;
    min-height: 40px;

    &.isDrag:not(.no-child) :deep(.list-group-item.has-slot) {
        @include showContainerBorder;
    }
}
</style>