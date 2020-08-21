<template lang="pug">
    include ../../tools/mixins.pug
    +b.HEADER.header
        +e.container.container(
            ref="container"
        )
            p {{headerText}}
            p {{firstSecond}}
            p {{$store.getters.foo}}
            p {{$store.getters.bar}}
            p deviceSize:
            p mobile: {{deviceSize.mobile}}
            p tablet: {{deviceSize.tablet}}
            p desktop: {{deviceSize.desktop}}
            p getRem: {{getRemsByPx(100)}} {{getPxByRems(100)}}
            p separateNumber: {{separateNumber(10000000)}} {{separateNumber(123456)}}
            +e.fixed
                p getScroll: {{scroll}}
                p getOffset: {{offset}}
                p howMuchCentered: {{centered}}
                p IsAnyElementInViewport: {{anyViewport}}
                p IsElementInViewport: {{inViewport}}
                +e.BUTTON.button(
                    v-on:click="$emit('openPopup')"
                ) попуп

</template>

<script lang="ts">

import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import DeviceSize from '../../mixins/utility/deviceSize';
import GetRem from '../../mixins/utility/getRem';
import GetScroll from '../../mixins/utility/getScroll';
import GetOffset from '../../mixins/utility/getOffset';
import HowMuchCentered from '../../mixins/utility/howMuchCentered';
import IsAnyElementInViewport from '../../mixins/utility/isAnyElementInViewport';
import IsElementInViewport from '../../mixins/utility/isElementInViewport';
import SeparateNumber from '../../mixins/utility/separateNumber';

@Component
export default class TheHeader extends mixins(
    DeviceSize,
    GetRem,
    GetScroll,
    GetOffset,
    HowMuchCentered,
    IsAnyElementInViewport,
    IsElementInViewport,
    SeparateNumber,
) {
    $refs!: {
        container : HTMLElement
    }

    @Prop() private headerText!:string;

    test1 = 'first';

    test2 = 'second';

    scroll = { x: 0, y: 0 };

    offset = { top: 0, left: 0 };

    centered = 0;

    anyViewport = false;

    inViewport = false;

    get firstSecond() : string {
        return `${this.test1} ${this.test2}`;
    }

    mounted() : void {
        this.scroll = this.getScroll();
        document.addEventListener('scroll', () => {
            this.scroll = this.getScroll();
        });

        const a = true;

        if (a) {
            this.offset = this.getOffset(this.$refs.container);
            document.addEventListener('scroll', () => {
                this.offset = this.getOffset(this.$refs.container);
            });

            this.centered = this.howMuchCentered(this.$refs.container);
            document.addEventListener('scroll', () => {
                this.centered = this.howMuchCentered(this.$refs.container);
            });

            this.anyViewport = this.isAnyElementInViewport(this.$refs.container);
            document.addEventListener('scroll', () => {
                this.anyViewport = this.isAnyElementInViewport(this.$refs.container);
            });

            this.inViewport = this.isElementInViewport(this.$refs.container);
            document.addEventListener('scroll', () => {
                this.inViewport = this.isElementInViewport(this.$refs.container);
            });
        }
    }
}
</script>
