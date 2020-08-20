// import Vue from 'vue'

import { MutationTree } from 'vuex';
import { RootState } from '../types';

const mutations : MutationTree<RootState> = {
    setBar(state, newValue : number) {
        state.bar = newValue;
    },
};

export default mutations;
