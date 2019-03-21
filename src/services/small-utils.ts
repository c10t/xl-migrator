
export const mapToObject = <T>(m: Map<string, T>): {[key: string]: T} => [...m].reduce((prev, [key, value]) => Object.assign(prev, {[key]: value}), {})

export const objectToMap = <T>(o: {[key: string]: T}) => Object.entries(o).reduce((prev, [key, value]) => prev.set(key, value), new Map())
