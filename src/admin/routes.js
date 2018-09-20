
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Product from './pages/Product'

export default [
    { path: '/admin', component: Dashboard },
    { path: '/admin/users', component: User},
    { path: '/admin/products', component: Product}
]