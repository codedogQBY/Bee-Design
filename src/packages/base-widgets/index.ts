
import { EditorComponent } from '../../editor/editor.utils';
const modules = import.meta.globEager('./*/index.tsx');

const components:Record<string,EditorComponent> = {};

Object.keys(modules).forEach((key: string) => {
    const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1');
    components[name] = modules[key]?.default || modules[key];
});

export default components;
