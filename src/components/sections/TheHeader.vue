<template lang="pug">
    include ../../tools/mixins.pug
    +b.HEADER.header
        +e.container.container
            p {{headerText}}
            p {{firstSecond}}
            p {{$store.getters.foo}}
            p {{$store.getters.bar}}
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
    @Prop() private headerText!:string;

    test1 = 'first';

    test2 = 'second';

    get firstSecond() : string {
        return `${this.test1} ${this.test2}`;
    }
}
</script>
