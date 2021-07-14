import {VARIABLES} from "../mutation-types";

export const counter = {
    namespaced:true,
    state:{
        counter:0
    },
    mutations:{
        [VARIABLES.SET_COUNTER](state){
            state.counter++;
        }
    },
    actions:{
        [VARIABLES.SET_COUNTER]({commit}) {
            commit(`${VARIABLES.COUNTER2}${VARIABLES.SET_COUNTER}`,null,{root:true});
            commit(VARIABLES.SET_COUNTER);
        }
    },
    getters:{
        [VARIABLES.GET_COUNTER](state){
            return state.counter;
        }
    }
}