import type { ClientConfig } from 'vuepress/client'
import { defineMermaidConfig } from 'vuepress-plugin-md-enhance/client'
import { defineClientConfig } from 'vuepress/client'
import { setupThemeColors } from './themes/composables/theme-colors.js'

defineMermaidConfig({
    theme: 'default',
    themeVariables: isDarkMode => ({
        dark: isDarkMode,
        background: isDarkMode ? '#1e1e1e' : '#fff',

        // 基于intro.md的4层级配色方案
        primaryColor: '#4fc3f7',        // baseLevel 蓝色
        primaryBorderColor: '#0277bd',  // baseLevel 边框
        primaryTextColor: '#000000',    // baseLevel 黑色文字

        secondaryColor: '#ba68c8',      // middleLevel 紫色
        secondaryBorderColor: '#7b1fa2', // middleLevel 边框
        secondaryTextColor: '#ffffff',  // middleLevel 白色文字

        tertiaryColor: '#ffb74d',       // advancedLevel 橙色
        tertiaryBorderColor: '#f57c00', // advancedLevel 边框
        tertiaryTextColor: '#000000',   // advancedLevel 黑色文字

        // 4层级循环配色 (cScale0-11) - 严格按照intro.md
        cScale0: '#4fc3f7',    // A, E, I - baseLevel 蓝色
        cScale1: '#ba68c8',    // B, F, J - middleLevel 紫色  
        cScale2: '#ffb74d',    // C, G, K - advancedLevel 橙色
        cScale3: '#81c784',    // D, H, L - finalLevel 绿色

        // 循环重复确保所有节点都有配色
        cScale4: '#4fc3f7',    // 循环：蓝色
        cScale5: '#ba68c8',    // 循环：紫色
        cScale6: '#ffb74d',    // 循环：橙色
        cScale7: '#81c784',    // 循环：绿色
        cScale8: '#4fc3f7',    // 循环：蓝色
        cScale9: '#ba68c8',    // 循环：紫色
        cScale10: '#ffb74d',   // 循环：橙色
        cScale11: '#81c784',   // 循环：绿色

        // 边框配色循环
        cScaleLabel0: '#0277bd',  // 蓝色边框
        cScaleLabel1: '#7b1fa2',  // 紫色边框
        cScaleLabel2: '#f57c00',  // 橙色边框
        cScaleLabel3: '#388e3c',  // 绿色边框

        // 保留原有的明暗模式适配
        lineColor: isDarkMode ? '#d3d3d3' : '#333',
        textColor: isDarkMode ? '#d3d3d3' : '#242424',

        // Note样式
        noteBkgColor: isDarkMode ? '#c96' : '#fff5ad',
        noteTextColor: '#242424',
        noteBorderColor: isDarkMode ? '#c86' : '#333',

        mainBkg: isDarkMode ? 'rgb(159 122 234 / 0.16)' : 'rgb(159 122 234 / 0.14)',
        errorBkgColor: '#eb4d5d',
        errorTextColor: '#fff',

        // Flowchart - 使用新的配色体系
        nodeBorder: '#0277bd',           // 蓝色边框作为默认
        nodeTextColor: '#000000',        // 黑色文字
        edgeLabelBackground: isDarkMode ? '#333' : '#ddd',

        // Sequence
        signalTextColor: isDarkMode ? '#9e9e9e' : '#242424',

        // Class
        classText: '#fff',

        // State
        labelColor: '#fff',

        attributeBackgroundColorEven: isDarkMode ? '#0d1117' : '#fff',
        attributeBackgroundColorOdd: isDarkMode ? '#161b22' : '#f8f8f8',

    }),
    class: {
        hideEmptyMembersBox: true,
    },
    look: 'handDrawn', // 保留手绘风格
})

export default defineClientConfig({
    setup() {
        setupThemeColors()
    }
}) as ClientConfig
