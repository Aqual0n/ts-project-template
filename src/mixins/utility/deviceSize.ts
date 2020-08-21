import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DeviceSize extends Vue {
    deviceSize = {
        mobile: false,
        tablet: false,
        desktop: false,
        tablet768: false,
    }

    mounted() : void {
        this.getDeviceSize();
        window.addEventListener('resize', this.getDeviceSize);
    }

    destroyed() : void {
        window.removeEventListener('resize', this.getDeviceSize);
    }

    getDeviceSize() : void {
        this.deviceSize.mobile = window.innerWidth < 650;
        this.deviceSize.tablet = window.innerWidth >= 650 && window.innerWidth < 1200;
        this.deviceSize.tablet768 = window.innerWidth >= 768 && window.innerWidth < 1200;
        this.deviceSize.desktop = window.innerWidth >= 1200;
    }
}
