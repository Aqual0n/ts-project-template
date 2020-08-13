import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import actions from './actions';
import { mutations } from './mutations';
import { RootState } from '../types';

Vue.use(Vuex);

const store : StoreOptions<RootState> = {
    state: {
        foo: 'some text',
        bar: 2,
    },
    getters: {
        foo(state) {
            return state.foo;
        },
        bar(state) {
            return state.bar;
        },
    },
    actions,
    mutations,
};

export default new Vuex.Store<RootState>(store);
