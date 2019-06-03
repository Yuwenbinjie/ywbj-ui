<template>
  <div id="app">
    <img src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <div class="pb48 underline">
      <h2>Button组件</h2>
      <p>1.基础样式：type</p>
      <yw-button>default</yw-button>
      <yw-button type="success">success</yw-button>
      <yw-button type="error">error</yw-button>
      <yw-button type="warning">warning</yw-button>
      <yw-button type="info" style="min-width:120px">info</yw-button>
      <p>2.按钮大小：size</p>
      <yw-button>default</yw-button>
      <yw-button size="small">small</yw-button>
      <yw-button size="medium">medium</yw-button>
      <yw-button size="large">large</yw-button>
      <p>3.按钮形状：shape</p>
      <yw-button>default</yw-button>
      <yw-button shape="circle" type="info">circle</yw-button>
      <yw-button shape="rectangle" type="info">rectangle</yw-button>
      <p>4.禁用按钮：isDisabled</p>
      <yw-button isDisabled>default</yw-button>
      <yw-button type="success" isDisabled>success</yw-button>
      <yw-button type="error" isDisabled>error</yw-button>
      <yw-button type="warning" isDisabled>warning</yw-button>
      <yw-button type="info" isDisabled>info</yw-button>
    </div>
    <div class="pt48">
      <h2>modal组件</h2>
      <p>1.基础样式</p>
      <yw-button @click="show1=true">default</yw-button>
      <yw-modal 
        @on-ok="show1=false"
        @on-cancel="show1=false"
        :isShow="show1"></yw-modal>
      <p>2.自定义内容</p>
      <yw-button @click="show2=true">自定义内容</yw-button>
      <yw-button @click="show3=true">自定义宽度</yw-button>
      <yw-modal 
        @on-ok="show2=false"
        @on-cancel="show2=false"
        :isShow="show2">
        <template>自定义文字</template>
        <template slot="modal-title">
          <p>Hello World!</p>
        </template>
        <template slot="modal-body">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </template>
        <template slot="modal-footer">
          <yw-button type="warning" @click="show2=false">取消</yw-button>
        </template>
      </yw-modal>
      <yw-modal 
        @on-ok="show3=false"
        @on-cancel="show3=false"
        :width="300"
        :isShow="show3"></yw-modal>
      <p>3.自定义size</p>
      <yw-button @click="showSize('small')">small</yw-button>
      <yw-button @click="showSize('medium')">medium</yw-button>
      <yw-button @click="showSize('large')">large</yw-button>
      <yw-button @click="showSize('full')">full</yw-button>
      <yw-modal 
        @on-ok="show4=false"
        @on-cancel="show4=false"
        :size="size"
        :isShow="show4"></yw-modal>
    </div>
  </div>
</template>

<script>
// import Button from '@/components/Button/Button'
// import Modal from '@/components/Modal/Modal'
export default {
  name: 'app',
  // components: {
  //   ywButton: Button,
  //   ywModal: Modal,
  // },
  data () {
    return {
      msg: 'Welcome to ywbj-ui',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      size: '',
    }
  },
  methods: {
    showSize(item) {
      this.size = item
      this.show4 = true
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.pt48, .py48 {
  padding-top: 48px;
}
.pb48, py48 {
  padding-bottom: 48px;
}
.underline {border-bottom: 1px solid #ccc;}
</style>
