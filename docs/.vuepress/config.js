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
        ['link', { rel: 'icon', href: '/img/favicon.png' }],
        ['link', { rel: 'shortcut icon', href: '/img/favicon.png' }]
    ],



    theme: plumeTheme({
        notes,
        logo: '/img/favicon.png',
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
            math: { type: 'katex' },
            image: {
                // 启用 figure
                figure: true,

                // 启用图片懒加载
                lazyload: true,

                // 启用图片标记
                mark: true,

                // 启用图片大小
                size: true,
            }
        }
    })
})
