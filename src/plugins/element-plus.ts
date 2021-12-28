import {
    ElAffix, ElAlert, ElBreadcrumb,
    ElBreadcrumbItem, ElButton, ElCard, ElCol, ElDialog, ElDivider, ElDrawer, ElDropdown, ElDropdownItem,
    ElDropdownMenu, ElForm,
    ElFormItem, ElIcon, ElInfiniteScroll, ElInput, ElLoading, ElMenu,
    ElMenuItem, ElPagination, ElPopover,
    ElPopper, ElRadioButton,
    ElRadioGroup, ElRow, ElScrollbar, ElSkeleton, ElSpace, ElSubMenu, ElTooltip
} from 'element-plus'
import 'element-plus/dist/index.css'
import { App, Component } from 'vue'

const components = [
  ElAffix,
  ElSkeleton,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElSpace,
  ElDivider,
  ElCard,
  ElDropdown,
  ElDialog,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElForm,
  ElFormItem,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElPagination,
  ElAlert,
  ElRadioButton,
  ElRadioGroup
]

const plugins = [ElLoading, ElInfiniteScroll]

export function setupElementPlus(app: App) {
  components.forEach((component: Component) => {
    app.component(component.name!, component)
  })
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
