import { createEditorConfig } from './editor/editor.utils'
import baseWidgets from './packages/base-widgets'
// import containerComponent from '@/packages/container-component'

export const visualConfig = createEditorConfig()
// 注册基础控件
Object.keys(baseWidgets).forEach((name: string) =>
  visualConfig.registry('baseWidgets', name, baseWidgets[name])
)
// // 注册容器组件
// Object.keys(containerComponent).forEach((name: string) =>
//   visualConfig.registry('containerComponents', name, containerComponent[name])
// )

