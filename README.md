# formValidator 

![npm](https://img.shields.io/badge/npm-6.4.1-green)         ![vue](https://img.shields.io/badge/vue-2.6.10-green)

## start with npm
`npm i f-form-validator --save`

## start with yarn
`yarn add f-form-validator --save`

```javascript
// somecode
import { formValidator } from 'f-form-validator'
Vue.use(formValidator)
```

## usage
```javascript
<f-form ref="form" :rules="rules">
    <f-form-item label="名字" value="username">
        <f-input type="text"></f-input>
    </f-form-item>
    <f-form-item label="年龄" value="age">
        <f-input type="password"></f-input>
    </f-form-item>
</f-form>

export default {
    data(){
        return {
            rules:[
                ['username', { required: false, pattern: /^[0-9]+/, errorMsg: '请输入用户名', trigger: 'change', formatter: this.formatter }, ''],
				['age', { required: true, errorMsg: '请输入年龄' }, '']
            ]
        }
    }
}
```
## attr 
`[name,rule,initialValue]`

<details>
<summary>name[String]:对应表单项的value</summary>
</details>  

<details>
<summary>rule[Object]:当前表单项对应的配置</summary>

`required<Boolean>:是否验证当前表单`   
`pattern<RegExp>:表单匹配的正则`  
`errorMsg<String>:验证不通过的提示信息`   
`trigger<String>:触发验证的事件名称`  
`formatter<Function>:表单相值的格式化函数`   

</details>  

<details>
<summary>initialValue[any]:初始值</summary>
</details>  

## method

| 方法名 | 参数 | 格式 |
| ------ | ------ | ------ |
| validateForm | callback | Function |
| getFieldsValue | name | String / Array|

## 说明
功能待完善

