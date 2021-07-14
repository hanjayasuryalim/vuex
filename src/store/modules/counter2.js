import { VARIABLES } from "../mutation-types";


export const counter2 = {
    namespaced:true,
    state:{
        counter:0
    },
    mutations:{
        [VARIABLES.SET_COUNTER](state){
            state.counter +=10;
        }
    },
    actions:{
        [VARIABLES.SET_COUNTER]({commit}) {
            commit(VARIABLES.SET_COUNTER);
        }
    },
    getters:{
        [VARIABLES.GET_COUNTER](state){
            return state.counter;
        }
    }
}