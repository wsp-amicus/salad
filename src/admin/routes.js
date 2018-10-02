import Dashboard from './pages/Dashboard'
import User from './pages/User'
import UpdateUser from './pages/User/Update'
import Product from './pages/Product'
import CreateProduct from './pages/Product/Create'
import EditProduct from './pages/Product/Edit'

export default [
  { path: '/admin', component: Dashboard, exact: true, permission: 0 },

  { path: '/admin/users', component: User, exact: true, permission: 0 },
  {
    path: '/admin/users/edit',
    component: UpdateUser,
    exact: false,
    permission: 0,
  },

  { path: '/admin/products', component: Product, exact: true, permission: 50 },
  {
    path: '/admin/products/create',
    component: CreateProduct,
    exact: true,
    permission: 100,
  },
  {
    path: '/admin/products/edit', component: EditProduct, exact: false, permission: 100
  }
]
