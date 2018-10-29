import Dashboard from './pages/Dashboard'
import User from './pages/User'
import UpdateUser from './pages/User/Update'
import Ingredient from './pages/Ingredient'
import CreateIngredient from './pages/Ingredient/Create'
import EditIngredient from './pages/Ingredient/Edit'

export default [
  { path: '/admin', component: Dashboard, exact: true, permission: 0 },

  { path: '/admin/users', component: User, exact: true, permission: 0 },
  {
    path: '/admin/users/edit',
    component: UpdateUser,
    exact: false,
    permission: 0,
  },

  { path: '/admin/ingredients', component: Ingredient, exact: true, permission: 50 },
  {
    path: '/admin/ingredients/create',
    component: CreateIngredient,
    exact: true,
    permission: 100,
  },
  {
    path: '/admin/ingredients/edit',
    component: EditIngredient,
    exact: false,
    permission: 100,
  },
]
