<template>
    <input class="f-input" 
    @[trigger]="handleTrigger" 
    @input="handleInput"
    :value="rule.value"
    AUTOCOMPLETE="off" 
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
            this.value = params[1]
        })
    },
    methods:{
        handleTrigger(e){
            if(this.rule.required && this.rule.pattern){
                if(!this.rule.pattern.test(e.target.value)){
                    this.dispatch('fFormItem','inputvaliderror')
                }else{
                    this.dispatch('fFormItem','inputvalidnoerror')
                }
            }
        },
        handleInput(){
            if(this.formatter){

            }
        }
    }
}
</script>

<style>

</style>
