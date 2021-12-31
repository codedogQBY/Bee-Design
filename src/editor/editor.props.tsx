export enum EditorPropsType {
    /** 输入框 */
    input = 'input',
    /** 数字输入框 */
    inputNumber = 'InputNumber',
    /** 颜色选择器 */
    color = 'color',
    /** 下拉选择器 */
    select = 'select',
    /** 表格 */
    table = 'table',
    /** 开关 */
    switch = 'switch',
    /** 模型绑定选择器 */
    modelBind = 'ModelBind',
    /** 可拖拽项 */
    crossSortable = 'CrossSortable'
}

export type EditorProps = {
    type: EditorPropsType
    /** 表单项标签名称 */
    label: string
    /** 表单项提示说明 */
    tips?: string
    /** 表单域标签的位置 */
    labelPosition?: string
    /** 表单项默认值 */
    defaultValue?: any
} & {
    /** 可选项 */
    options?: EditorSelectOptions
    /** 是否可以多选 */
    multiple?: boolean
    /** 项属性配置 */
    showItemPropsConfig?: boolean
} & {
    max?: number
    min?: number
} & {
    table?: EditorTableOption
}

/*---------------------------------------modelBind-------------------------------------------*/
interface EditorModelBindProp {
    label: string
    defaultValue?: any
    tips?: string
}

export function createEditorModelBindProp({
    label = '字段绑定',
    defaultValue,
    tips
}: EditorModelBindProp): EditorProps {
    return {
        type: EditorPropsType.modelBind,
        label,
        tips,
        defaultValue
    }
}

/*---------------------------------------switch-------------------------------------------*/
interface EditorSwitchProp {
    label: string
    defaultValue?: boolean
    tips?: string
}

export function createEditorSwitchProp({
    label,
    defaultValue,
    tips
}: EditorSwitchProp): EditorProps {
    return {
        type: EditorPropsType.switch,
        label,
        tips,
        defaultValue
    }
}

/*---------------------------------------input-------------------------------------------*/

interface EditorInputProp {
    label: string
    defaultValue?: any
    tips?: string
}

export function createEditorInputProp({
    label,
    defaultValue,
    tips
}: EditorInputProp): EditorProps {
    return {
        type: EditorPropsType.input,
        label,
        tips,
        defaultValue
    }
}
/*---------------------------------------InputNumber -------------------------------------------*/

interface EditorInputNumberProp {
    label: string
    defaultValue?: any
    tips?: string
    max?: number
    min?: number
}

export function createEditorInputNumberProp({
    label,
    defaultValue,
    max,
    min,
    tips
}: EditorInputNumberProp): EditorProps {
    return {
        type: EditorPropsType.inputNumber,
        label,
        tips,
        max,
        min,
        defaultValue
    }
}

/*---------------------------------------color-------------------------------------------*/

interface EditorColorProp {
    label: string
    defaultValue?: string
}

export function createEditorColorProp({ label, defaultValue }: EditorColorProp): EditorProps {
    return {
        type: EditorPropsType.color,
        label,
        defaultValue
    }
}

/*---------------------------------------select-------------------------------------------*/

export type EditorSelectOptions = {
    label: string
    value: string | number | boolean | object
    [prop: string]: any
}[]

interface EditorSelectProp {
    label: string
    options: EditorSelectOptions
    defaultValue?: any
    multiple?: boolean
    tips?: string
}

export function createEditorSelectProp({
    label,
    options,
    defaultValue,
    tips,
    multiple
}: EditorSelectProp): EditorProps {
    return {
        type: EditorPropsType.select,
        label,
        defaultValue,
        tips,
        options,
        multiple
    }
}

/*---------------------------------------table-------------------------------------------*/

export type EditorTableOption = {
    options: {
        label: string // 列显示文本
        field: string // 列绑定的字段
    }[]
    showKey: string
}

interface EditorTableProp {
    label: string
    option: EditorTableOption
    defaultValue?: { label: string; value: string }[]
}

export function createEditorTableProp({
    label,
    option,
    defaultValue
}: EditorTableProp): EditorProps {
    return {
        type: EditorPropsType.table,
        label,
        table: option,
        defaultValue
    }
}

/*---------------------------------------CrossSortableOptions-------------------------------------------*/

interface EditorCrossSortableProp {
    label: string
    labelPosition: 'top' | ''
    multiple?: boolean
    showItemPropsConfig?: boolean
    defaultValue?: string[] | EditorSelectOptions
}

export function createEditorCrossSortableProp({
    label,
    labelPosition,
    multiple,
    showItemPropsConfig,
    defaultValue
}: EditorCrossSortableProp): EditorProps {
    return {
        type: EditorPropsType.crossSortable,
        label,
        multiple,
        showItemPropsConfig,
        labelPosition,
        defaultValue
    }
}
