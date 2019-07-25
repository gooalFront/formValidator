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
```

## method

| 方法名 | 参数 | 格式 |
| ------ | ------ | ------ |
| validateForm | callback | Function |
| getFieldsValue | name | String / Array|

## 说明
功能待完善

