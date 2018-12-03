import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import UpdateUser from "./pages/User/Update";
import Ingredient from "./pages/Ingredient";
import CreateIngredient from "./pages/Ingredient/Create";
import EditIngredient from "./pages/Ingredient/Edit";
import Product from "./pages/Product";
import CreateProduct from "./pages/Product/Create";
import EditProduct from "./pages/Product/Edit";
import Transaction from "./pages/Transaction";
import IncomePerMonth from "./pages/Transaction/IncomePerMonth";
import Payment from "./pages/Transaction/Payment";
import MostUserBuy from "./pages/Transaction/MostUserBuy";

export default [
  { path: "/admin", component: Dashboard, exact: true, permission: 0 },

  { path: "/admin/users", component: User, exact: true, permission: 0 },
  {
    path: "/admin/users/edit",
    component: UpdateUser,
    exact: false,
    permission: 0
  },

  {
    path: "/admin/ingredients",
    component: Ingredient,
    exact: true,
    permission: 50
  },
  {
    path: "/admin/ingredients/create",
    component: CreateIngredient,
    exact: true,
    permission: 100
  },
  {
    path: "/admin/ingredients/edit",
    component: EditIngredient,
    exact: false,
    permission: 100
  },
  { path: "/admin/products", component: Product, exact: true, permission: 50 },
  {
    path: "/admin/products/create",
    component: CreateProduct,
    exact: true,
    permission: 100
  },
  {
    path: "/admin/products/edit",
    component: EditProduct,
    exact: false,
    permission: 100
  },
  {
    path: "/admin/transactions",
    component: Transaction,
    exact: true,
    permission: 100
  },
  {
    path: "/admin/transactions/incomepermonth",
    component: IncomePerMonth,
    exact: false,
    permission: 100
  },
  {
    path: "/admin/transactions/payment",
    component: Payment,
    exact: false,
    permission: 100
  },
  {
    path: "/admin/transactions/mostuserbuy",
    component: MostUserBuy,
    exact: false,
    permission: 100
  }
];
