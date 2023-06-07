import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegistrationPage from '../views/RegistrationPage.vue'

export const routeNames = {
  welcome: 'welcome',
  home: 'home',
  login: 'login',
  registration: 'registration',
}

export const routes = [
    { path: '/', component: WelcomePage, name: routeNames.welcome, },
    { path: '/home', component: HomePage, name: routeNames.home, },
    { path: '/login', component: LoginPage, name: routeNames.login, },
    { path: '/registration', component: RegistrationPage, name: routeNames.registration, },
]