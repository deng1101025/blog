module.exports = {
    lang: 'zh-CN',
    title: '你好， 帅锅 镁铝 ！',
    description: '前端的知识，vue，react，基础，底层',

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',

        navbar: [
            {
                text: '首页',
                link: '/assets/home/',
            },
            {
                text: 'Vue',
                children: [{
                    text: '源码解析',
                    link: '/assets/vue/sourceCodeAnalysis/'
                },{
                    text: '性能优化',
                    link: '/assets/vue/performance/'
                }],
            },
            {
                text: 'React',
                children: [{
                    text: '源码解析',
                    link: '/assets/vue/sourceCodeAnalysis/'
                },{
                    text: '性能优化',
                    link: '/assets/vue/performance/'
                }],
            }
        ],

        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: {

            '/assets/home/': [
                {
                    text: '前端知识',
                    children: [''],
                },
            ],
            '/assets/vue/sourceCodeAnalysis/': [
                {
                    text: 'Vue源码解析',
                    children: [''],
                },
            ],
            '/assets/vue/performance/': [
                {
                    text: 'Vue性能优化',
                    children: [''],
                },
            ],
            '/assets/react/sourceCodeAnalysis/': [
                {
                    text: 'React源码解析',
                    children: [''],
                },
            ],
            '/assets/react/performance/': [
                {
                    text: 'React性能优化',
                    children: [''],
                },
            ],
        }
    },
}