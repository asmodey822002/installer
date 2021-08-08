import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./components/ExampleComponent.vue').default,
        name: 'welcome'
    },
    {
        path: '/install/welcome',
        component: require('./components/install/WelcomeToInstall.vue').default,
        name: 'welcome-to-install'
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});
