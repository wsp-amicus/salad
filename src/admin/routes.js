
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Product from './pages/Product'
import CreateProduct from './pages/Product/Create'

export default [
    { path: '/admin', component: Dashboard },
    { path: '/admin/users', component: User},
    { path: '/admin/products', component: Product},
    { path: '/admin/products/create', component: CreateProduct}
]