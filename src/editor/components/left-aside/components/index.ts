interface ILeftComponents{
    name:string,
    label:string,
    order:number,
    icon:string,
}

const modules = import.meta.globEager('./*/index.(tsx|vue)')


const components:Record<string,ILeftComponents> = {}

for(const path in modules){
    const comp = modules[path].default as ILeftComponents
    components[comp.name || path.split('/')[1]] = comp
}

export default components