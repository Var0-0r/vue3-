<template>
  <!-- vue3组件中的模板结构可以没有根标签 -->
  姓：<input type="text" v-model="person.firstName" /> 名：<input
    type="text"
    v-model="person.lastName"
  />
  <!-- <button @click="changInfo">sayHello</button>
   -->
  <h2>全名{{ fullName }}</h2>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "App",
  setup() {
    // let name = ref("rr");
    // let age = ref(12);

    const person = reactive({
      firstName: "张",
      lastName: "三",
    });
    person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    });
    return {
      person,
      fullName,
    };
  },
};

// 返回一个对象

//返回一个渲染函数
// return () => h("h1", "rr");
</script>

