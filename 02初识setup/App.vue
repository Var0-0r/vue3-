<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h2>姓名{{ name }}</h2>
  <h2>年龄{{ age }}</h2>
  <button @click="sayHello">sayHello</button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  setup() {
    let name = "rr";
    let age = 12;
    function sayHello() {
      alert(`我叫${name},我${age}岁了`);
    }
    // 返回一个对象
    return {
      name,
      age,
      sayHello,
    };
    //返回一个渲染函数
    // return () => h("h1", "rr");
  },
};
</script>

