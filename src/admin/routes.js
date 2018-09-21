
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import UpdateUser from './pages/User/Update'
import Product from './pages/Product'
import CreateProduct from './pages/Product/Create'

export default [
    { path: '/admin', component: Dashboard, exact:true },

    { path: '/admin/users', component: User, exact: true},
    { path: '/admin/users/edit', component: UpdateUser, exact:false},

    { path: '/admin/products', component: Product, exact:true},
    { path: '/admin/products/create', component: CreateProduct, exact:true}
]