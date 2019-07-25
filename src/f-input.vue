<template>
    <input class="f-input" 
    ref="input"
    @[trigger]="handleTrigger" 
    @keyup="handleKeyup"
    :value="rule.value"
    autocomplete="off" 
    :type="type">
</template>

<script>
import mix from './utils/index'
export default {
    name:'fInput',
    data(){
        return {
            rule:{
                pattern:undefined,       
                required:false,     
                errorMsg:"请输入值",     
                formatter:undefined,       
                trigger:"change",      
                error:false
            },
            value:null
        }
    },
    props:{
        type:{
            type:String,
            default:'text'
        }
    },
    computed:{
        trigger:function(){
            return this.rule.trigger || 'change'
        }
    },
    mixins:[mix],
    created(){
        this.$on('recive-from-item',(...params)=>{
            this.rule = Object.assign(this.rule,params[0])
            let error = this.validateInput(params[1])
            if(error){
                throw new Error('input initialValue in not suit the pattern')
            }else{
                this.value = params[1]
            }
        })
    },
    methods:{
        handleTrigger(e){
            this.validateInput(e.target.value)
        },
        validateInput(value){
            if(this.rule.required && this.rule.pattern){
                if(!this.rule.pattern.test(value)){
                    this.dispatch('fFormItem','inputvaliderror')
                    return true
                }else{
                    this.dispatch('fFormItem','inputvalidnoerror')
                    return false
                }
            }
            return false
        },
        handleKeyup(e){
            if(this.rule.formatter){
                e.target.value = this.rule.formatter(e.target.value)
            }
        }
    }
}
</script>

<style>

</style>
