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
            childName:"fFormItem"
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
            callback && callback(error,this.rules)
        }
    }
}
</script>

<style>

</style>
