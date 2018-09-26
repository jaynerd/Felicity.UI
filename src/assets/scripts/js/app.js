import Vue from 'vue';
import Modal from '../../../components/widgets/Modal.vue';

export default {
    methods: {
        CreateModal: (title, body, btn1Text, btn1Callback, btn2Text, btn2Callback) => {
            var Dialog = Vue.extend(Modal);
            var dialog = new Dialog({
                data: {
                    btn1Text: btn1Text,
                    btn1Callback: btn1Callback,
                    btn2Text: btn2Text,
                    btn2Callback: btn2Callback
                }
            });

            dialog.$slots.title = [title];
            dialog.$slots.body = [body];

            dialog.$mount();

            document.querySelector('#modal-anchor').appendChild(dialog.$el);
        }
    }
};