import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SeparateNumber extends Vue {
    separateNumber(value : number) : string {
        if (Number.isNaN(value) || value === null) {
            return '0';
        }
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
}
