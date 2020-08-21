<template lang="pug">
    include ../../tools/mixins.pug
    +b.popup(
        ref="popup"
        :class="{'active': active}"
    )
        +e.background(
            v-on:click="closePopup"
        )
        +e.scroller(
            data-scroll-lock-scrollable
        )
            +e.wrapper--absolute
                +e.BUTTON.close(
                    v-on:click="closePopup"
                )
                p asl;dfkjhlskjdfhljksdhfjkhsdkjffh
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import Popup from '../../mixins/utility/popup';

export default class PopupComponent extends mixins(
    Popup,
) {

}
</script>
