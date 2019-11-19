<template>
    <div>
        <p>{{ count }}</p>
        <p>
            <button @click="increment">increment ++</button>
            <button @click="decrement">decrement --</button>
            <button @click="incrementN(10)">incrementN</button>
            <button @click="incrementAny({num: 20})">incrementAny</button>
            <button @click="incrementAnyAnotherType">incrementAnyAnotherType</button>
        </p>
    </div>
</template>

<script>

    import { mapState, mapMutations } from 'vuex'



    const sty4 = mapState([
      // 映射 this.count 为 store.state.count
      'count'
    ]);

    const sty1_methonds = {
      increment() {
        this.$store.commit('increment')
      },
      decrement() {
        this.$store.commit('decrement')
      },
      incrementN(num) {
        this.$store.commit('incrementN', num)
      },
      incrementAny(payload) {
        this.$store.commit('incrementAny', payload)
      },
      incrementAnyAnotherType() {
        this.$store.commit({
          type: 'incrementAny',
          num: 100
        })
      }
    }

    const sty2_methonds = {
      ...mapMutations([
        'increment',
        'decrement',
        'incrementN',
        'incrementAny'
      ]),
      incrementAnyAnotherType() {
        this.$store.commit({
          type: 'incrementAny',
          num: 100
        })
      }
    }

  export default {
    name: 'Exam2',
    data() {
      return {
        localCount: 10
      }
    },
    computed: {
      ...sty4
    },
    methods: sty2_methonds
  }
</script>
