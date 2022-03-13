<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  <h2>姓名{{ person.name }}</h2>
  <h2>年龄{{ person.age }}</h2>
  <button @click="changInfo">sayHello</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // let name = ref("rr");
    // let age = ref(12);

    const person = reactive({
      age: 12,
      name: "rr",
    });
    function changInfo() {
      person.name = "李四";
      person.age = 13;
    }
    // 返回一个对象
    return {
      person,
      changInfo,
    };
    //返回一个渲染函数
    // return () => h("h1", "rr");
  },
};
</script>

