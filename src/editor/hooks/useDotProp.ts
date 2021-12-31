export const useDotProp = (originObj: any, propName: string) => {
    const props: string[] = propName.split('.')
    const isDotProp = props.length > 1
    const prop = props.pop()!
    const propObj = props.reduce((prev, curr) => (prev[curr] ??= {}), originObj)
    return {
      prop,
      propObj,
      isDotProp
    }
  }