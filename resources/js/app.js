import './bootstrap';
import 'vue-select/dist/vue-select.css';

import router from './routes';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import vSelect from 'vue-select';

Vue.component('pulse-loader', PulseLoader)
Vue.component('v-select', vSelect)

new Vue({
    el: '#app',

    router: router,
});
