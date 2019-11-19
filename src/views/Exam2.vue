<template>
    <div>
        <p>{{ count }}</p>
        <p>{{ localAddTen }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>

    import { mapState } from 'vuex'

    const sty0 = {
      // 常规
      count() {
        return this.$store.state.count
      }
    };

    const sty1 = mapState({
      // 箭头函数可使代码更简练
      count: state => state.count
    });

    const sty2 = mapState({
      // 传字符串参数 'count' 等同于 `state => state.count`
      count: 'count'
    });

    const sty3 = mapState({
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      count(state) {
        return state.count + this.localCount
      }
    });

    const sty4 = mapState([
      // 映射 this.count 为 store.state.count
      'count'

    ]);

  export default {
    name: 'Exam2',
    data() {
      return {
        localCount: 10
      }
    },
    computed: {
      // localAddTen() {
      //   return this.localCount + 10;
      // },
      ...sty0
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }
  }
</script>
