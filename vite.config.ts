import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import ViteComponents, {
    ElementPlusResolver,
    VantResolver
} from 'vite-plugin-components';
import styleImport from 'vite-plugin-style-import';
import WindiCSS from 'vite-plugin-windicss';

const CWD = process.cwd();

// https://vitejs.dev/config/
export default ({mode}: ConfigEnv): UserConfig => {
    // 环境变量
    const {VITE_BASE_URL} = loadEnv(mode, CWD);
    return {
        base: VITE_BASE_URL, // 设置打包路径
        plugins: [
            vue(),
            vueJsx(),
            WindiCSS(),
            ViteComponents({
                globalComponentsDeclaration: true,
                // 自动导入组件（还不够完善，可能会有样式丢失）
                // valid file extensions for components.
                extensions: ['vue', 'tsx', 'js'],
                customComponentResolvers: [
                    ElementPlusResolver(),
                    VantResolver(),
                ],
            }),
            styleImport({
                libs: [
                    {
                        libraryName: 'vant',
                        esModule: true,
                        resolveStyle: (name) =>
                            `/node_modules/vant/es/${name}/style`,
                    },
                ],
            }),
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
            },
        },
        server: {
            host: '0.0.0.0',
            port: 10086, // 设置服务启动端口号
            open: false, // 设置服务启动时是否自动打开浏览器
            cors: true, // 允许跨域

            // // 设置代理，根据项目实际情况配置
            // proxy: {
            //   '/api': {
            //     target: 'http://29135jo738.zicp.vip/api/v1',
            //     changeOrigin: true,
            //     secure: false,
            //     rewrite: (path) => path.replace('/api/', '/')
            //   }
            // }
        },
    };
};
