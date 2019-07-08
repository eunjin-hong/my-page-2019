import Vue from 'vue'
import Vuetify, {
    VApp,
    VCard,
    VCardText,
    VContainer,
    VContent,
    VNavigationDrawer,
    VFooter,
    VFlex,
    VImg,
    VLayout,
    VToolbar,
    VProgressCircular,
    VFadeTransition,
    VResponsive,
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    iconfont: 'md',
    components: {
        VApp,
        VCard,
        VCardText,
        VContainer,
        VContent,
        VFlex,
        VImg,
        VLayout,
        VNavigationDrawer,
        VFooter,
        VToolbar,
        VProgressCircular,
        VFadeTransition,
        VResponsive
    },
})