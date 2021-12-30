import { defineComponent } from 'vue';
import './index.scss';
import { useTools } from './useTools';
const tools = useTools();
export default defineComponent(() => {
    return () => (
        <>
            <elRow type="flex" class="header">
                {/* logo start */}
                <elCol span={6} class="flex items-center">
                    <div class="logo"></div>
                    <h1 class="font-semibold">Bee Design</h1>
                </elCol>
                {/* logo end */}
                {/* 操作栏 start */}
                <elCol span={12} class="flex items-center" >
                    {tools.map((toolItem, toolIndex) => {
                        return (
                            <div class={[`w-1/${tools.length}`, "w-1/9"]} >
                                <div
                                    class="tool-item flex flex-col items-center cursor-pointer"
                                    onClick={toolItem.onClick}
                                >
                                    {toolItem.icon}
                                    <div class="title">{toolItem.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </elCol>
                {/* 操作栏 end */}
                {/* 其他设置 start */}
                <elCol span={6}></elCol>
                {/* 其他设置 end */}
            </elRow>
        </>
    )
})




