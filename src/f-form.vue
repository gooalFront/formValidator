<template>
    <div class="f-form">
        <slot></slot>
    </div>
</template>

<script>
import mix from './utils/index.js'

export default {
    name:"fForm",
    data(){
        return {
            childName:"fFormItem",
            timer:null
        }
    },
    props:{
        rules:{
            type:Array,
            default:()=>[]
        }
    },
    mixins:[mix],
    mounted(){
        if(this.rules.length){
            let temp = this.rules
            temp.forEach(v=>{
                v[1].error = false
            })
            this.broadcast(this.childName,'reciveRule',temp)

            this.$on('inputvaliderror',(value)=>{
                let index = this.findChild(value)
                this.rules[index][1].error = true
            })
            this.$on('inputvalidnoerror',(value)=>{
                let index = this.findChild(value)
                this.rules[index][1].error = false
            })
        } 
    },
    methods:{
        findChild(value){
            let index
            this.rules.forEach((v,i)=>{
                if(v[0]===value){
                    index = i
                }
            })
            return index
        },
        validateForm(callback){
            let error = false
            for(let i=0;i<this.rules.length;i++){
                if(this.rules[i][1].error){
                    error = true
                    break
                }
            }

            if(error){
                callback && callback(error,{})
            }else{
                let res = this.getFieldsValue()
                callback && callback(error,res)
            }
        },
        getFieldsValue(name = null){
            let res = {}
            let children = this.getChildrenInput()
            children.forEach(v=>{
                if(name){
                    let inputKey = v.$parent.value
                    if(typeof name === 'object' && name instanceof Array){
                        if(name.includes(inputKey)){
                            res[inputKey] = v.$refs.input.value
                        }
                    }else if(typeof name === 'string'){
                        if(v.$parent.value === name){
                            res[inputKey] = v.$refs.input.value
                        }
                    }
                }else{
                    res[v.$parent.value] = v.$refs.input.value
                }
            })
            return res
        },
        getChildrenInput(){
            let children = this.$children
            let res = []
            function deep(children){
                children.forEach(v=>{
                    if(v.$options.name === 'fInput'){
                        res.push(v) 
                    }else{
                        if(v.$children.length){
                            deep(v.$children)
                        }
                    }
                })
            }
            deep(children)
            return res
        }
    }
}
</script>

<style>

</style>
