<template lang="pug">
    include ../../tools/mixins.pug
    div
        header-component(
            :headerText="'TheHeader'"
        )
        div(style="font-size:80px;text-align: center") New project
        footer-component

</template>

<script>
import MyHeader from '../sections/TheHeader.vue';
import MyFooter from '../sections/TheFooter.vue';

export default {
    components: {
        'header-component': MyHeader,
        'footer-component': MyFooter,
    },
};
</script>
