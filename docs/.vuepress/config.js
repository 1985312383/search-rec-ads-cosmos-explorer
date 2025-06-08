import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'
import { defineUserConfig } from 'vuepress'
import notes from './notes.js'
// import { defineMermaidConfig } from 'vuepress-plugin-mermaidjs'

export default defineUserConfig({
    bundler: viteBundler(),
    base: '/search-rec-ads-cosmos-explorer/',
    lang: 'zh-CN',
    title: '搜广推宇宙漫游指南',
    description: '探索搜索、推荐、广告算法的迷人宇宙，LLM 领航带你从基础到前沿！',

    // 网站头部配置
    head: [
        ['link', { rel: 'icon', href: '/file/img/favicon.png' }],
        ['link', { rel: 'shortcut icon', href: '/file/img/favicon.png' }]
    ],



    theme: plumeTheme({
        notes,
        logo: '../file/img/favicon.png',
        // 控制部分自动生成
        autoFrontmatter: {
            permalink: false, // 是否生成永久链接
            createTime: true, // 是否生成创建时间
            title: false, // 是否生成标题
        },
        markdown: {
            mermaid: true,
            timeline: true,
            icons: true,
            math: { type: 'katex' }
        }
    })
})
