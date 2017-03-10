
const Home = r => require.ensure([], () => r(require('../components/Index')), 'Index')
const Button = r => require.ensure([], () => r(require('../components/Button')), 'Button')

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home
  },
  {
    path: '/component/Button',
    name: 'Button',
    component: Button
  }
]

export default routes
