<template lang="pug">
    include ../../tools/mixins.pug
    +b.HEADER.header
        +e.container.container
            p {{headerText}}
            p {{firstSecond}}
            p {{$store.getters.foo}}
            p {{$store.getters.bar}}
            p mobile: {{deviceSize.mobile}}
            p tablet: {{deviceSize.tablet}}
            p desktop: {{deviceSize.desktop}}
</template>

<script lang="ts">

import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import DeviceSize from '../../mixins/utility/deviceSize';

@Component
export default class TheHeader extends mixins(DeviceSize) {
    @Prop() private headerText!:string;

    test1 = 'first';

    test2 = 'second';

    get firstSecond() : string {
        return `${this.test1} ${this.test2}`;
    }
}
</script>
