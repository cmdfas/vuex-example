<template>
    <div>
        <h2>TODO-List</h2>
        <p v-for="todo in todoList" :key="'a' + todo.id">{{ todo.text }}</p>
        <h2>TODO-DONE-List <span style="color:red;">数量：{{ doneTodoListCount }}</span></h2>
        <p v-for="todo in doneTodoList" :key="'b' + todo.id">{{ todo.text }}</p>
        <h2>getTodoById</h2>
        <p>ID:{{ getTodoById.id }}</p>
        <p>Text:{{ getTodoById.text }}</p>

    </div>
</template>

<script>

    import { mapState,mapGetters } from 'vuex'

    const sty0 = {
      // 常规
      todoList() {
        return this.$store.state.todoList
      },
      doneTodoList() {
        return this.$store.getters.doneTodoList
      },
      doneTodoListCount() {
        return this.$store.getters.doneTodoListCount
      },
      getTodoById() {
        return this.$store.getters.getTodoById(2);
      }
    };

    const sty1_state = mapState([
      'todoList'
    ]);

    const sty1_getters = mapGetters([
      // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
      'doneTodoList',
      'doneTodoListCount',
      'getTodoById'
    ]);


  export default {
    name: 'Exam2',
    data() {
      return {
        localCount: 10
      }
    },
    computed: {
      ...sty1_state,
      ...sty1_getters
    }
  }
</script>
