import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/_variables.scss";`
            }
        }
    },
    resolve: {
        alias: {
        '@': resolve(__dirname, './src')
        }
    }
})