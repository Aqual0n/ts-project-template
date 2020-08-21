<template lang="pug">
    include ../../tools/mixins.pug
    div
        header-component(
            :headerText="'TheHeader'"
            @openPopup="active = true"
        )
        div(style="font-size:80px;text-align: center") New project New projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew projectNew project
        footer-component
        popup-component(
            @close="active = false"
            :active="active"
        )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyHeader from '../sections/TheHeader.vue';
import MyFooter from '../sections/TheFooter.vue';

import PopupComponent from '../sections/Popup.vue';

@Component({
    components: {
        'header-component': MyHeader,
        'popup-component': PopupComponent,
        'footer-component': MyFooter,
    },
})
export default class Index extends Vue {
    active = false
}
</script>
