<template>
    <div 
        v-show="isShow"
        :class="preCls+'-mask'">
        <div :class="preCls">
            <div :class="classModal" :style="{width: widthSize+'px'}">
                <span :class="preCls+'-cancel'" @click="onCancel">×</span>
                <div :class="preCls+'-title'" v-show="showTitle">
                    <slot name="modal-title">自定义标题</slot>
                </div>
                <div :class="preCls+'-body'" v-show="showBody">
                    <slot name="modal-body">自定义内容</slot>
                </div>
                <div :class="preCls+'-footer'" v-show="showFooter">
                    <slot name="modal-footer">
                        <yw-button type="info" @click="onOk" size="large">确定</yw-button>
                    </slot>
                    <slot>模版文字</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
export default {
    name: 'Modal',
    display: 'Modal模态框',
    components: {
        ywButton: Button,
    },
    data() {
        return {
            preCls: 'yw-modal',
        }
    },
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        width: Number,
        showTitle: {
            type: Boolean,
            default: true,
        },
        showBody: {
            type: Boolean,
            default: true,
        },
        showFooter: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String,
            default: 'medium',//['large', 'medium', 'small']
        }
    },
    computed: {
        classModal() {
            let {preCls, size} = this
            let className = [
                `${preCls}-warp`,
                {
                    [`${preCls}-full`]: size == 'full',
                },
            ]
            return className
        },
        widthSize() {
            let sizes = {
                'small': 400,
                'medium': 600,
                'large': 800,
            }
            return this.width > 0 ? this.width : sizes[this.size]
        }
    },
    methods: {
        onCancel() {
            this.$emit('on-cancel');
        },
        onOk() {
            this.$emit('on-ok');
        },

    },
}
</script>
