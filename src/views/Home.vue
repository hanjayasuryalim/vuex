<template>
  <div class="home">
    <div>Counter : {{counter}}</div>
    <div>Counter2 : {{counter2}}</div>
    <button @click="increment">Click</button>
    <button @click="increment2">Click</button>
  </div>
</template>

<script>
import {VARIABLES} from "../store/mutation-types";
import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'Home',
  methods:{
    ...mapActions(
      {
        increment:`${VARIABLES.COUNTER}${VARIABLES.SET_COUNTER}`,
        increment2:`${VARIABLES.COUNTER2}${VARIABLES.SET_COUNTER}`,
      },
    )
  },
  computed:{
    ...mapGetters({
      counter:`${VARIABLES.COUNTER}${VARIABLES.GET_COUNTER}`,
      counter2:`${VARIABLES.COUNTER2}${VARIABLES.GET_COUNTER}`
    })
  }

}
</script>
