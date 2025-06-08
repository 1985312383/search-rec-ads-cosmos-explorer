import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const zhNotes = defineNoteConfig({
    name: '搜广推宇宙漫游指南',
    dir: '',
    link: '/',
    sidebar: [
        {
            text: '序章：搜广推的世界，你好！',
            prefix: '0.序章：搜广推的世界，你好！',
            collapsed: true,
            icon: 'ph:hand-waving',
            items: 'auto'
        },
        {
            text: '第一章：万丈高楼平地起--基础知识夯实篇',
            prefix: '1.第一章：万丈高楼平地起--基础知识夯实篇',
            collapsed: true,
            icon: 'ph:foundation',
            items: 'auto'
        },
        {
            text: '第二章：搜索算法--信息海洋的智能导航员',
            prefix: '2.第二章：搜索算法--信息海洋的智能导航员',
            collapsed: true,
            icon: 'ph:magnifying-glass',
            items: 'auto'
        },
        {
            text: '第三章：推荐算法--比你更懂你的贴心小棉袄',
            prefix: '3.第三章：推荐算法--比你更懂你的贴心小棉袄',
            collapsed: true,
            icon: 'ph:heart',
            items: 'auto'
        },
        {
            text: '第四章：计算广告--流量变现的魔法引擎',
            prefix: '4.第四章：计算广告--流量变现的魔法引擎',
            collapsed: true,
            icon: 'ph:megaphone',
            items: 'auto'
        },
        {
            text: '第五章：高阶心法与业界黑科技--Tricks & SOTA',
            prefix: '5.第五章：高阶心法与业界黑科技--Tricks & SOTA',
            collapsed: true,
            icon: 'ph:lightning',
            items: 'auto'
        },
        {
            text: '第六章：LLM时代下的搜广推新范式',
            prefix: '6.第六章：LLM时代下的搜广推新范式',
            collapsed: true,
            icon: 'ph:robot',
            items: 'auto'
        },
        {
            text: '第七章：动手实战--Talk is cheap, show me the code!',
            prefix: '7.第七章：动手实战--Talk is cheap, show me the code!',
            collapsed: true,
            icon: 'ph:code',
            items: 'auto'
        },
        {
            text: '附录与资源',
            prefix: '8.附录与资源',
            collapsed: true,
            icon: 'ph:books',
            items: 'auto'
        },
        {
            text: '结语：学无止境，探索不止，一起卷向未来！',
            prefix: '9.结语：学无止境，探索不止，一起卷向未来！',
            collapsed: true,
            icon: 'ph:rocket',
            items: 'auto'
        }
    ]
})

export default defineNotesConfig({
    dir: 'zh',
    link: '/zh/',
    notes: [zhNotes]
})