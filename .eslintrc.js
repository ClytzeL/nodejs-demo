module.exports = {	
    "extends": [require.resolve('we-build/eslint')],//解决react 组件is defined but never used no-unused-vars,
    "globals": {
        "MOCK": false,
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "env": {
        "es6": true,
        "browser": true,
    },
    "rules":{
        "no-script-url":0,//关闭Script URL is a form of eval 
        "prefer-rest-params":0,
        "func-names":0,//关闭匿名函数warning
        "semi":"off", //关闭分号检查
        "brace-style":"off",//关闭es6 大括号位置检查
        "no-else-return":"off",//关闭else return检查
        "class-methods-use-this":"off",//关闭类静态方式检查
        "import/no-webpack-loader-syntax":"off", //关闭import 里面 ！检测
        "import/no-named-as-default": "off", //关闭import里面导出多个报错
        "import/no-named-as-default-member": "off", //关闭本地导出本地导入
        "react/prop-types":"off", //关闭react类型定义
        "react/no-string-refs":"off", //关闭ref使用
		"react/no-direct-mutation-state":"off", //关闭react中 setState
		"no-tabs":"off",// 关闭tabs
        "no-underscore-dangle": "off",//关闭下划线规则检查
        "no-console":"off",
        "no-multi-assign":"off"
    }
}