module.exports = [
  {
    title: '主页',
    path: '/'
  },
  {
    title: '前端',   // 必要的
    path: '/front',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  },
  {
    title: 'C语言',
    children: [
      {
        title: '刷题随记',
        path: '/clanguage/随记',
      }
    ]
  },
  {
    title: '数学',
    children: [ 
      {
        title: '高等数学',
        children: [
          {
            title: '极限',
            path: '/math/advancedmathematics/limit'
          }
        ]
      },
      {
        title: '线性代数',
        children: [
          {
            title: '行列式',
            path: '/math/linearalgebra/determinant'
          }
        ]
      }
     ],
    // initialOpenGroupIndex: -1 // 可选的, 默认值是 0
  }
]