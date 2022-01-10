import { ILocalStore } from "../type/utils/tools";


export async function useLocal(name:string):Promise<ILocalStore> {
    return new Promise((resolve, reject) => {
        const local = getLocal<ILocalStore>(name)
        if (local.startTime + local.expires < Date.now()) reject(`${name}已超过有效期`)
        resolve(local)
    })
}

export function setLocal(name:string, data:IObject<any>, pExpires = 1000 * 60 * 60 * 24 * 365 * 100):void {
    const d = data as ILocalStore
    d.startTime = Date.now()
    d.expires = pExpires
    localStorage.setItem(name, JSON.stringify(data))
}

export function getLocal<T>(name:string):T {
    const l = localStorage.getItem(name)
    const local = JSON.parse(l !== null ? l : '{}') as unknown as T
    return local
}