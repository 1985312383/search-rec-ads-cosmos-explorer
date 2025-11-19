import type { ClientConfig } from 'vuepress/client'
import { defineMermaidConfig } from '@vuepress/plugin-markdown-chart/client'
import { defineClientConfig } from 'vuepress/client'
import { setupThemeColors } from './themes/composables/theme-colors.js'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
import './styles/index.css'

defineMermaidConfig({
    theme: 'default',
    themeVariables: isDarkMode => ({
        dark: isDarkMode,

        // === 基础颜色 ===
        background: isDarkMode ? '#1e1e1e' : '#fff',

        // === 边框颜色 ===
        border1: isDarkMode ? '#555' : '#ccc',
        border2: isDarkMode ? '#666' : '#ddd',

        // === 主要颜色系统 ===
        primaryColor: isDarkMode ? '#c8abfa' : '#6f42c1',
        primaryBorderColor: isDarkMode ? '#669' : '#99c',
        primaryTextColor: isDarkMode ? '#c8abfa' : '#6f42c1',

        secondaryColor: isDarkMode ? '#ffb500' : '#ff9500',
        secondaryBorderColor: isDarkMode ? '#fff' : '#000',
        secondaryTextColor: isDarkMode ? '#ddd' : '#333',

        tertiaryColor: isDarkMode ? '#282828' : '#efeef4',
        tertiaryBorderColor: isDarkMode ? '#bbb' : '#242424',
        tertiaryTextColor: isDarkMode ? '#ddd' : '#333',

        // === 节点和流程图 ===
        mainBkg: isDarkMode ? 'rgb(159 122 234 / 0.16)' : 'rgb(159 122 234 / 0.14)',
        nodeBorder: isDarkMode ? '#669' : '#99c',
        nodeTextColor: isDarkMode ? '#c8abfa' : '#6f42c1',
        edgeLabelBackground: isDarkMode ? '#333' : '#ddd',
        arrowheadColor: isDarkMode ? '#d3d3d3' : '#333',

        // === 流程图节点分类颜色 ===
        // 开始/结束节点
        startEndBkg: isDarkMode ? '#1a237e' : '#e3f2fd',
        startEndBorder: isDarkMode ? '#3f51b5' : '#1565c0',
        startEndText: isDarkMode ? '#ffffff' : '#1565c0',

        // 处理节点
        processBkg: isDarkMode ? '#4a148c' : '#f3e5f5',
        processBorder: isDarkMode ? '#7b1fa2' : '#7b1fa2',
        processText: isDarkMode ? '#ffffff' : '#4a148c',

        // 判断节点
        decisionBkg: isDarkMode ? '#1b5e20' : '#e8f5e8',
        decisionBorder: isDarkMode ? '#4caf50' : '#2e7d32',
        decisionText: isDarkMode ? '#ffffff' : '#1b5e20',

        // 输入/输出节点
        ioBkg: isDarkMode ? '#e65100' : '#fff3e0',
        ioBorder: isDarkMode ? '#ff9800' : '#ef6c00',
        ioText: isDarkMode ? '#ffffff' : '#e65100',

        // 数据库节点
        dbBkg: isDarkMode ? '#b71c1c' : '#ffebee',
        dbBorder: isDarkMode ? '#f44336' : '#c62828',
        dbText: isDarkMode ? '#ffffff' : '#b71c1c',

        // 子程序节点
        subroutineBkg: isDarkMode ? '#4a148c' : '#fce4ec',
        subroutineBorder: isDarkMode ? '#e91e63' : '#c2185b',
        subroutineText: isDarkMode ? '#ffffff' : '#880e4f',

        // === 错误和状态 ===
        errorBkgColor: isDarkMode ? '#8b2635' : '#eb4d5d',
        errorTextColor: '#fff',
        excludeBkgColor: isDarkMode ? '#4a4a4a' : '#eeeeee',

        // === Subgraph/Cluster ===
        clusterBkg: isDarkMode ? '#2d1b0e' : '#f8f9fa',
        clusterBorder: isDarkMode ? '#8b7355' : '#dee2e6',
        // clusterTextColor: isDarkMode ? '#ffffff' : '#333333',

        // === 甘特图 ===
        sectionBkgColor: isDarkMode ? '#2d2d2d' : '#f9f9f9',
        sectionBkgColor2: isDarkMode ? '#3d3d3d' : '#f0f0f0',
        altSectionBkgColor: isDarkMode ? '#1a1a1a' : '#ffffff',
        gridColor: isDarkMode ? '#555' : '#ddd',
        todayLineColor: isDarkMode ? '#ff6b6b' : '#ff4757',

        // === 任务颜色 ===
        taskBkgColor: isDarkMode ? '#4a4a4a' : '#f9f9f9',
        taskBorderColor: isDarkMode ? '#666' : '#ccc',
        taskTextColor: isDarkMode ? '#ddd' : '#333',
        taskTextDarkColor: isDarkMode ? '#fff' : '#000',
        taskTextClickableColor: isDarkMode ? '#5dade2' : '#3498db',
        taskTextOutsideColor: isDarkMode ? '#ddd' : '#333',

        // === 活动任务 ===
        activeTaskBorderColor: isDarkMode ? '#c8abfa' : '#6f42c1',
        activeTaskBkgColor: isDarkMode ? 'rgba(200, 171, 250, 0.2)' : 'rgba(111, 66, 193, 0.1)',

        // === 完成任务 ===
        doneTaskBorderColor: isDarkMode ? '#27ae60' : '#2ecc71',
        doneTaskBkgColor: isDarkMode ? 'rgba(39, 174, 96, 0.2)' : 'rgba(46, 204, 113, 0.1)',

        // === 关键任务 ===
        critBorderColor: isDarkMode ? '#e74c3c' : '#e74c3c',
        critBkgColor: isDarkMode ? 'rgba(231, 76, 60, 0.2)' : 'rgba(231, 76, 60, 0.1)',

        // === Git图表颜色 ===
        git1: isDarkMode ? '#ff6b6b' : '#ff4757',
        git2: isDarkMode ? '#4ecdc4' : '#00d2d3',
        git3: isDarkMode ? '#45b7d1' : '#0984e3',
        git4: isDarkMode ? '#f9ca24' : '#fdcb6e',
        git5: isDarkMode ? '#6c5ce7' : '#a29bfe',
        git6: isDarkMode ? '#fd79a8' : '#e84393',
        git7: isDarkMode ? '#00b894' : '#00cec9',

        // === Git分支标签 ===
        gitBranchLabel1: isDarkMode ? '#ffffff' : '#000000',
        gitBranchLabel2: isDarkMode ? '#ffffff' : '#000000',
        gitBranchLabel3: isDarkMode ? '#ffffff' : '#000000',
        gitBranchLabel4: isDarkMode ? '#000000' : '#ffffff',
        gitBranchLabel5: isDarkMode ? '#ffffff' : '#000000',
        gitBranchLabel6: isDarkMode ? '#ffffff' : '#000000',
        gitBranchLabel7: isDarkMode ? '#ffffff' : '#000000',

        // === Git反色 ===
        gitInv1: isDarkMode ? '#2d3436' : '#ddd',
        gitInv2: isDarkMode ? '#2d3436' : '#ddd',
        gitInv3: isDarkMode ? '#2d3436' : '#ddd',
        gitInv4: isDarkMode ? '#2d3436' : '#ddd',
        gitInv5: isDarkMode ? '#2d3436' : '#ddd',
        gitInv6: isDarkMode ? '#2d3436' : '#ddd',
        gitInv7: isDarkMode ? '#2d3436' : '#ddd',

        // === 提交标签 ===
        commitLabelBackground: isDarkMode ? '#2d3436' : '#f8f9fa',
        commitLabelColor: isDarkMode ? '#ddd' : '#333',
        commitLabelFontSize: '10px',

        // === 标签样式 ===
        tagLabelBorder: isDarkMode ? '#666' : '#ccc',
        tagLabelBackground: isDarkMode ? '#3d3d3d' : '#f0f0f0',
        tagLabelColor: isDarkMode ? '#ddd' : '#333',
        tagLabelFontSize: '10px',

        // === 填充类型 ===
        fillType0: isDarkMode ? '#2d3436' : '#f8f9fa',
        fillType1: isDarkMode ? '#636e72' : '#ddd',
        fillType2: isDarkMode ? '#00b894' : '#00cec9',
        fillType3: isDarkMode ? '#0984e3' : '#74b9ff',
        fillType4: isDarkMode ? '#6c5ce7' : '#a29bfe',
        fillType5: isDarkMode ? '#fd79a8' : '#e84393',
        fillType6: isDarkMode ? '#fdcb6e' : '#f39c12',
        fillType7: isDarkMode ? '#e17055' : '#e74c3c',

        // === 饼图颜色 ===
        pie1: isDarkMode ? '#ff6b6b' : '#ff4757',
        pie2: isDarkMode ? '#4ecdc4' : '#00d2d3',
        pie3: isDarkMode ? '#45b7d1' : '#0984e3',
        pie4: isDarkMode ? '#f9ca24' : '#fdcb6e',
        pie5: isDarkMode ? '#6c5ce7' : '#a29bfe',
        pie6: isDarkMode ? '#fd79a8' : '#e84393',
        pie7: isDarkMode ? '#00b894' : '#00cec9',
        pie8: isDarkMode ? '#e17055' : '#e74c3c',
        pie9: isDarkMode ? '#81ecec' : '#74b9ff',
        pie10: isDarkMode ? '#fab1a0' : '#fd79a8',
        pie11: isDarkMode ? '#a29bfe' : '#6c5ce7',
        pie12: isDarkMode ? '#ffeaa7' : '#f9ca24',

        // === 饼图样式 ===
        pieStrokeWidth: '2px',
        pieOpacity: '0.7',
        pieOuterStrokeColor: isDarkMode ? '#555' : '#333',
        pieOuterStrokeWidth: '2px',
        pieTitleTextSize: '25px',
        pieTitleTextColor: isDarkMode ? '#ddd' : '#333',

        // === 需求图 ===
        requirementBackground: isDarkMode ? '#2d3436' : '#f8f9fa',
        requirementBorderColor: isDarkMode ? '#666' : '#ccc',
        requirementBorderSize: '1px',
        requirementTextColor: isDarkMode ? '#ddd' : '#333',
        relationColor: isDarkMode ? '#74b9ff' : '#0984e3',
        relationLabelBackground: isDarkMode ? '#2d3436' : '#f8f9fa',
        relationLabelColor: isDarkMode ? '#ddd' : '#333',

        // === 序列图 ===
        labelColor: isDarkMode ? '#ffffff' : '#000000',
        signalColor: isDarkMode ? '#74b9ff' : '#0984e3',
        signalTextColor: isDarkMode ? '#9e9e9e' : '#242424',
        labelBoxBorderColor: isDarkMode ? '#666' : '#ccc',
        labelBoxBkgColor: isDarkMode ? '#2d3436' : '#f8f9fa',
        labelTextColor: isDarkMode ? '#ddd' : '#333',
        loopTextColor: isDarkMode ? '#ddd' : '#333',

        // === 注释 ===
        noteBkgColor: isDarkMode ? '#c96' : '#fff5ad',
        noteTextColor: isDarkMode ? '#000' : '#242424',
        noteBorderColor: isDarkMode ? '#c86' : '#333',

        // === 激活 ===
        activationBorderColor: isDarkMode ? '#666' : '#ccc',
        activationBkgColor: isDarkMode ? '#3d3d3d' : '#f0f0f0',
        sequenceNumberColor: isDarkMode ? '#ffffff' : '#000000',

        // === 角色/参与者 ===
        actorBorder: isDarkMode ? '#666' : '#ccc',
        actorBkg: isDarkMode ? '#2d3436' : '#f8f9fa',
        actorTextColor: isDarkMode ? '#ddd' : '#333',
        actorLineColor: isDarkMode ? '#666' : '#ccc',

        // === 人员 ===
        personBorder: isDarkMode ? '#666' : '#ccc',
        personBkg: isDarkMode ? '#2d3436' : '#f8f9fa',

        // === 类图 ===
        classText: isDarkMode ? '#ddd' : '#333',
        attributeBackgroundColorEven: isDarkMode ? '#0d1117' : '#fff',
        attributeBackgroundColorOdd: isDarkMode ? '#161b22' : '#f8f8f8',

        // === Timeline时间线图 ===
        // 时间段背景颜色 (cScale0-cScale11)
        cScale0: isDarkMode ? '#2d3436' : '#e3f2fd',
        cScale1: isDarkMode ? '#636e72' : '#f3e5f5',
        cScale2: isDarkMode ? '#00b894' : '#e8f5e8',
        cScale3: isDarkMode ? '#0984e3' : '#fff3e0',
        cScale4: isDarkMode ? '#6c5ce7' : '#fce4ec',
        cScale5: isDarkMode ? '#fd79a8' : '#f1f8e9',
        cScale6: isDarkMode ? '#fdcb6e' : '#e0f2f1',
        cScale7: isDarkMode ? '#e17055' : '#fff8e1',
        cScale8: isDarkMode ? '#81ecec' : '#f3e5f5',
        cScale9: isDarkMode ? '#fab1a0' : '#e8eaf6',
        cScale10: isDarkMode ? '#a29bfe' : '#e1f5fe',
        cScale11: isDarkMode ? '#ffeaa7' : '#fafafa',

        // 时间段文字颜色 (cScaleLabel0-cScaleLabel11)
        cScaleLabel0: isDarkMode ? '#ffffff' : '#1565c0',
        cScaleLabel1: isDarkMode ? '#ffffff' : '#7b1fa2',
        cScaleLabel2: isDarkMode ? '#ffffff' : '#2e7d32',
        cScaleLabel3: isDarkMode ? '#ffffff' : '#ef6c00',
        cScaleLabel4: isDarkMode ? '#ffffff' : '#c2185b',
        cScaleLabel5: isDarkMode ? '#ffffff' : '#558b2f',
        cScaleLabel6: isDarkMode ? '#ffffff' : '#00695c',
        cScaleLabel7: isDarkMode ? '#ffffff' : '#ff8f00',
        cScaleLabel8: isDarkMode ? '#ffffff' : '#7b1fa2',
        cScaleLabel9: isDarkMode ? '#ffffff' : '#3f51b5',
        cScaleLabel10: isDarkMode ? '#ffffff' : '#0277bd',
        cScaleLabel11: isDarkMode ? '#333333' : '#424242',

    }),
    class: {
        hideEmptyMembersBox: true,
    },
    flowchart: {
        // 预定义的节点类样式
        htmlLabels: true,
        curve: 'basis',
    },
    look: 'handDrawn',
})

export default defineClientConfig({
    setup() {
        setupThemeColors()
    }
}) as ClientConfig
