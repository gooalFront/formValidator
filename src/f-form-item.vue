<template>
    <div class="f-form-item" :name="label">
        <span class="form-item_label"><b v-if="rule.required" class="form-item_label_required">*</b>{{label}}</span>
        <span class="form-item" :class="{error:rule.error}">
            <slot></slot>
            <span v-if="rule.error" class="form-item_error">{{rule.errorMsg}}</span>
        </span>
    </div>
</template>

<script>
import mix from './utils/index'
export default {
    name:"fFormItem",
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
        }
    },
    props:{
        label:String,
        value:String
    },
    mixins:[mix],
    created(){
        // 接受来自form的规则
        this.$on('reciveRule',(...arg)=>{
            arg.forEach(v=>{
                if(v[0] === this.value){
                    this.rule = Object.assign(this.rule,v[1])
                    arg[1] = this.rule
                    this.broadcast('fInput','recive-from-item',[this.rule,arg[2] || ''])
                }
            })
        })

        this.$on('inputvaliderror',()=>{
            this.rule.error = true
            this.dispatch('fForm','inputvaliderror',this.value)
        })
        this.$on('inputvalidnoerror',()=>{
            this.rule.error = false
            this.dispatch('fForm','inputvalidnoerror',this.value)
        })
    },
    methods:{
    }
}
</script>

