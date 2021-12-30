<template>
    <el-tabs v-model="activeName" tab-position="left" class="left-aside">
        <el-tab-pane
            v-for="tabItem in tabs"
            :key="tabItem.name"
            :label="tabItem.label"
            :name="tabItem.name"
            lazy
        >
            <template #label>
                <div class="tab-item">
                    <component :is="tabItem.icon" v-bind="$attrs" />
                    {{ tabItem.label }}
                </div>
            </template>
            <component :is="tabItem.name" v-bind="$attrs" />
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts">
import { Box, ChartPie, Components, Data, Page } from '@icon-park/vue-next';
import { defineComponent, reactive, toRefs } from 'vue';
import components from './components';

const tabs = Object.keys(components)
    .map((name) => {
        const { label, icon, order } = components[name];
        return { label, icon, name, order };
    })
    .sort((a, b) => a.order - b.order);
export default defineComponent({
    name: 'LeftAside',
    components: { ...components, Page, Box, ChartPie, Data, Components },
    setup() {
        const state = reactive({
            activeName: tabs[0].name,
        });

        return {
            ...toRefs(state),
            tabs,
        };
    },
});
</script>

<style lang="scss" scoped>
.left-aside {
    height: 100%;
    contain: layout;

    > :deep(.el-tabs__header) {
        margin-right: 0;

        .el-tabs__item {
            height: 80px;
            padding: 20px 16px;

            .tab-item {
                @apply flex flex-col items-center justify-center;

                [class^='el-icon-'] {
                    font-size: 20px;
                }
            }
        }
    }

    > :deep(.el-tabs__content) {
        height: 100%;
        overflow-y: auto;
    }
}
</style>