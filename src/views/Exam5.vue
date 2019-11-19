<template>
    <div>
        <p>{{ count }}</p>
        <p>
            <button @click="increment">increment</button>
            <button @click="incrementDest">incrementDest</button>
            <button @click="incrementAsync">incrementAsync</button>
            <button @click="incrementAnyAsync({num: 10})">incrementAnyAsync</button>
            <button @click="decrement">-</button>
        </p>
        <p></p>
        <p>
            <button @click="actionASave">actionASave</button>
            <button @click="actionBSave">actionBSave</button>
            <button @click="actionCSave">actionCSave</button>
        </p>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'


    const sty4 = mapState([
      // 映射 this.count 为 store.state.count
      'count'

    ]);


    const sty1_methods =  {
      increment() {
        this.$store.dispatch('increment')
      },
      incrementDest() {
        this.$store.dispatch('incrementDest')
      },
      incrementAsync() {
        this.$store.dispatch('incrementAsync')
      },
      incrementAnyAsync() {
        this.$store.dispatch('incrementAnyAsync',{
          num: 10
        })
      },
      decrement() {
        this.$store.commit('decrement')
      }
    }

    const sty2_methods = {
      ...mapActions([
        'increment',
        'incrementDest',
        'incrementAsync',
        'incrementAnyAsync',
        'actionA',
        'actionB',
        'actionC',
      ]),
      decrement() {
        this.$store.commit('decrement')
      },
      actionASave() {
        this.actionA().then(() => {
          alert('SUCCESS')
        });
      },
      actionBSave() {
        this.actionB().then(() => {
          console.log('TIP')
        });
      },
      actionCSave() {
        this.actionC().then(() => {
          console.log('NBA')
        });
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
      localAddTen() {
        return this.localCount + 10;
      },
      ...sty4
    },
    methods: sty2_methods
  }
</script>
