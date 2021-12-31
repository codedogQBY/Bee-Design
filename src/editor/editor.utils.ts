import { useDotProp } from '@/editor/hooks/useDotProp';
import { generateNanoid } from '@/editor/utils';
import { CSSProperties } from 'vue';
import type { ContentTypeEnum, RequestEnum } from '../enums/httpEnum';
import { EditorProps } from './editor.props';

/**
 * @description 组件属性
 */

export interface EditorBlockData {
    /**组件id实践戳，组件唯一标识 */
    _vid: string;
    /**组件所属的模块（基础组件、容器组件、业务组件） */
    moduleName: keyof ComponentModules;
    /**映射 EditorConfig 中 componentMap 的 component对象*/
    componentKey: string;
    /**组件标签名 */
    label: string;
    /** 是否需要调整位置 */
    adjustPosition: boolean;
    /** 当前是否为选中状态 */
    focus: boolean;
    /** 当前组件的样式 */
    styles: CSSProperties;
    /** 是否调整过宽度或者高度 */
    hasResize: boolean;
    /** 组件的设计属性 */
    props: Record<string, any>;
    /** 绑定的字段 */
    model: Record<string, string>;
    /** 组件是否可以被拖拽 */
    draggable: boolean;
    /** 是否显示组件样式配置项 */
    showStyleConfig?: boolean;
    /** 动画集 */
    animations?: Animation[];
    /** 组件动作集合 */
    actions: Action[];
    /** 组件事件集合 */
    events: {label: string; value: string}[];
    [prop: string]: any;
}

/**
 * @description 组件动作事件处理
 */
export interface ActionHandle {
    key: string;
    name: string;
    link: string[];
    data?: {
        bind?: string;
        recv?: string;
    };
}
/**
 * @description 组件动作
 */
export interface Action {
    key: string;
    name: string;
    event: string;
    handle: ActionHandle[];
}

/**
 * @description 页面配置
 */
export interface PageConfig {
    /** 背景图片 */
    bgImage: string;
    /** 背景颜色 */
    bgColor: string;
    /** 是否缓存当前页面 */
    keepAlive: boolean;
}
/**
 * @description 页面对象
 */
export interface EditorPage {
    /** 页面标题 */
    title: string;
    /** 页面路径 */
    path: string;
    /** 404是重定向到默认页面 */
    isDefault?: boolean;
    /** 页面配置 */
    config: PageConfig;
    /** 当前页面的所有组件 */
    blocks: EditorBlockData[];
}

/**
 * @description 可以认为是 路由=>页面
 */
export interface EditorPages {
    [path: string]: EditorPage;
}
/**
 * @description 实体类型
 */
export type EntityType = {
    /** 绑定的字段 输入 */
    key: string;
    /** 实体名称 输入 */
    name: string;
    /** 数据类型 选择 */
    type: string;
    /** 默认值 输入 */
    value: string;
};

/**
 * @description 数据模型
 */
export interface EditorModel {
    /** 数据源名称 */
    name: string;
    /** 绑定的字段 该字段创建的时候生成 */
    key: string;
    /** 实体集合 */
    entitys: EntityType[];
}

/**
 * @description 接口请求对象
 */
export interface FetchApiItem {
    /**  随机生成的key */
    key: string;
    /** 随机生成的key */
    name: string;
    options: {
        /** 请求的url */
        url: string;
        /** 请求的方法 */
        method: keyof typeof RequestEnum;
        /** 请求的内容类型 */
        contentType: keyof typeof ContentTypeEnum;
    };
    data: {
        /** 请求绑定对应的某个实体 */
        bind: string;
        /** 响应的结果绑定到某个实体上 */
        recv: string;
    };
}

/**
 * @description 动作集合
 */
export interface EditorActions {
    fetch: {
        name: '接口请求';
        apis: FetchApiItem[];
    };
    dialog: {
        name: '对话框';
        handlers: [];
    };
}

/**
 * @description 总的数据集
 */
export interface EditorModelValue {
    /** 页面 */
    pages: EditorPages;
    /** 实体 */
    models: EditorModel[];
    /** 动作 */
    actions: EditorActions;
}

/**
 * @description 动画项
 */
export interface Animation {
    /** 动画名称 */
    label: string;
    /** 动画类名 */
    value: string;
    /** 动画持续时间 */
    duration: number;
    /** 动画延迟多久执行 */
    delay: number;
    /** 动画执行次数 */
    count: number;
    /** 是否无限循环动画 */
    infinite: boolean;
}

/**
 * @description 单个组件注册规则
 */
export interface EditorComponent {
    /** 组件name */
    key: string;
    /** 组件所属模块名称 */
    moduleName: keyof ComponentModules;
    /** 组件唯一id */
    _vid?: string;
    /** 组件中文名称 */
    label: string;
    /** 组件预览函数 */
    preview: () => JSX.Element;
    /** 组件渲染函数 */
    render: (data: {
        props: any;
        model: any;
        styles: CSSProperties;
        block: EditorBlockData;
        custom: Record<string, any>;
    }) => () => JSX.Element;
    /** 组件是否可以被拖拽 */
    draggable?: boolean;
    /** 是否显示组件的样式配置项 */
    showStyleConfig?: boolean;
    /** 组件属性 */
    props?: Record<string, EditorProps>;
    /** 动画集 */
    animations?: Animation[];
    /** 组件事件集合 */
    events?: {label: string; value: string}[];
    /** 组件样式 */
    styles?: CSSProperties;
}

// 组件模块
export interface ComponentModules {
    baseWidgets: EditorComponent[]; // 基础组件
    containerComponents: EditorComponent[]; // 容器组件
}

export interface EditorMarkLines {
    x: {left: number; showLeft: number}[];
    y: {top: number; showTop: number}[];
}

// 构建block
export function createNewBlock(component: EditorComponent): EditorBlockData {
    return {
        _vid: `vid_${generateNanoid()}`,
        moduleName: component.moduleName,
        componentKey: component!.key,
        label: component!.label,
        adjustPosition: true,
        focus: false,
        styles: {
            display: 'flex',
            justifyContent: 'flex-start',
            paddingTop: '0',
            paddingRight: '0',
            paddingLeft: '0',
            paddingBottom: '0',
            tempPadding: '0',
        },
        hasResize: false,
        props: Object.keys(component.props || {}).reduce((prev, curr) => {
            const {propObj, prop} = useDotProp(prev, curr);
            if (component.props![curr]?.defaultValue) {
                propObj[prop] = prev[curr] =
                    component.props![curr]?.defaultValue;
            }
            return prev;
        }, {}),
        draggable: component.draggable ?? true, // 是否可以拖拽
        showStyleConfig: component.showStyleConfig ?? true, // 是否显示组件样式配置
        animations: [], // 动画集
        actions: [], // 动作集合
        events: component.events || [], // 事件集合
        model: {},
    };
}

// 拖拽事件
export interface DragEvent {
    dragstart: {
        on: (cb: () => void) => void;
        off: (cb: () => void) => void;
        emit: () => void;
    };
    dragend: {
        on: (cb: () => void) => void;
        off: (cb: () => void) => void;
        emit: () => void;
    };
}

/**
 * @description 创建编辑器配置
 * @returns {} 返回编辑器注册组件的方法等
 */
export function createEditorConfig() {
    const componentModules: ComponentModules = {
        baseWidgets: [],
        containerComponents: [],
    };

    const componentMap: Record<string, EditorComponent> = {};
    return {
        componentModules,
        componentMap,
        registry: <
            _,
            Props extends Record<string, EditorProps> = {},
            Model extends Record<string, string> = {},
        >(
            moduleName: keyof ComponentModules,
            key: string,
            component: {
                label: string;
                preview: () => JSX.Element;
                render: (data: {
                    props: {[k in keyof Props]: any};
                    model: Partial<{[k in keyof Model]: any}>;
                    styles: CSSProperties;
                    block: EditorBlockData;
                    custom: Record<string, any>;
                }) => () => JSX.Element;
                props?: Props;
                model?: Model;
                styles?: CSSProperties;
            },
        ) => {
            const comp = {...component, key, moduleName};
            componentModules[moduleName].push(comp);
            componentMap[key] = comp;
        },
    };
}

export type EditorConfig = ReturnType<typeof createEditorConfig>;
