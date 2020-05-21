module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true
    },
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            arrowFunctions: true,
            classes: true,
            modules: true,
            defaultParams: true
        },
        sourceType: 'module'
    },
    parser: 'babel-eslint',
    plugins: [
        'react',
        'jsx-a11y'
    ],
    rules: {
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 'error',
        // 'indent': ['error', 4, { "SwitchCase": 1 }],
        'semi': [
            'error',
            'always'
        ],
        // 总是使用 === 或 !==
        'eqeqeq': [
            'error',
            'always'
        ],
        // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
        // @off 要求太严格了，有时需要在循环中写 await
        'no-await-in-loop': 'off',
        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 'off',
        // @off 有时候 debugger debug 还是有用
        'no-debugger': 'off',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        // 禁止在 switch 语句中出现重复测试表达式的 case
        'no-duplicate-case': 'error',
        // 禁止出现空代码块，允许 catch 为空代码块
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],
        // @off 允许布尔类型转换，比如 !! 或 Boolean
        'no-extra-boolean-cast': 'off',
        // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
        'no-extra-parens': [
            'error',
            'functions'
        ],
        // @fixable 禁止出现多余的分号
        'no-extra-semi': 'error',
        // 禁止将一个函数声明重新赋值，如：function foo() {};  foo = bar
        'no-func-assign': 'error',
        // @fixable 对象的最后一个属性末尾必须有逗号
        // @off 没必要限制
        'comma-dangle': 'off',
        // 定义过的变量必须使用
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'none',
                'caughtErrors': 'none',
                'ignoreRestSiblings': true
            }
        ],
        // 禁止对使用 const 定义的常量重新赋值
        'no-const-assign': 'error',
        // 禁止重复定义类
        'no-dupe-class-members': 'error',
        // 禁止将自己与自己比较
        'no-self-compare': 'error',
        // setter 必须有对应的 getter，getter 可以没有对应的 setter
        'accessor-pairs': [
            'error',
            {
                'setWithoutGet': true,
                'getWithoutSet': false
            }
        ],
        // @fixable 逗号前禁止有空格，逗号后必须要有空格
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        // constructor 中必须有 super
        'constructor-super': 'error',
        // new 后面的类名必须首字母大写
        'new-cap': [
            'error',
            {
                'newIsCap': true,
                'capIsNew': false,
                'properties': true
            }
        ],
        // @fixable new 后面的类必须有小括号
        'new-parens': 'error',
        // 禁止使用 Array 构造函数
        'no-array-constructor': 'error',
        // 禁止对定义过的 class 重新赋值
        'no-class-assign': 'error',
        // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        // 禁止混用空格和缩进
        'no-mixed-spaces-and-tabs': 'error',
        // @off 不强制要求写 displayName
        'react/display-name': 'off',
        // 不强制要求写 prop-types
        'react/prop-types': 'off',
        // 禁止使用已废弃的 api
        'react/no-deprecated': 'error',
        // 禁止直接修改 this.state
        'react/no-direct-mutation-state': 'error',
        // 数组中的 jsx 必须有 key
        'react/jsx-key': 'error',
        // @fixable jsx 的 props 缩进必须为四个空格
        // 'react/jsx-indent-props': ['error', 4]
    }
};
