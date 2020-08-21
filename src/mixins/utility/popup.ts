import scrollLock from 'scroll-lock';

import { Component, Prop, Watch } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import HandlerOnEsc from './handlerOnEsc';

@Component
export default class Popup extends mixins(HandlerOnEsc) {
    @Prop() active!:boolean

    onKeyDown(e : KeyboardEvent) : void{
        this.handlerOnEsc(this.closePopup, e);
    }

    closePopup() : void {
        this.$emit('close');
    }

    @Watch('active')
    onActiveChange(val: boolean, oldValue: boolean) : void {
        if (val) {
            document.addEventListener('keydown', this.onKeyDown);
            scrollLock.disablePageScroll(this.$refs.popup);
        } else {
            document.removeEventListener('keydown', this.onKeyDown);
            scrollLock.enablePageScroll();
        }
    }
}
