import { ConfigEnv, loadEnv, UserConfigExport } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const setAlias = (alias: [string, string][]) => alias.map(v => { return { find: v[0], replacement: path.resolve(__dirname, v[1]) } })
const proxy = (list: [string, string][]) => {
    const obj: IObject<any> = {}
    list.forEach((v) => {
        obj[v[0]] = {
            target: v[1],
            changeOrigin: true,
            rewrite: (path: any) => path.replace(new RegExp(`^${v[0]}`), ''),
            ...(/^https:\/\//.test(v[1]) ? { secure: false } : {})
        }
    })
    return obj
}

export default ({ mode }: ConfigEnv): UserConfigExport => {
    const root = process.cwd()
    const env = loadEnv(mode, root) as unknown as ImportMetaEnv
    return {
        resolve: {
            alias: setAlias([
                ['/@', 'src']
            ])
        },
        server: {
            proxy: env.VITE_PROXY ? proxy(JSON.parse(env.VITE_PROXY)) : {},
            port: env.VITE_PORT
        },
        plugins: [
            vue()
        ],
        css: {
            postcss: {
                plugins: [
                    require('autoprefixer'),
                    require('tailwindcss/nesting'),
                    require('tailwindcss'),
                    require('postcss-simple-vars'),
                    require('postcss-import')
                ]
            }
        }
    }
}