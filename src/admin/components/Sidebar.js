import React, { Component } from "react";
import MetisMenu from "react-metismenu";
import RouterLink from "react-metismenu-router-link";
import "react-metismenu/dist/react-metismenu-standart.min.css";

const content = [
  {
    icon: "dashboard",
    label: "Dashboard",
    to: "/admin"
  },
  {
    icon: "user",
    label: "User",
    to: "/admin/users"
  },
  {
    icon: "shopping-basket",
    label: "Ingredient",
    content: [
      {
        icon: "eye",
        label: "View",
        to: "/admin/ingredients"
      },
      {
        icon: "plus",
        label: "Add",
        to: "/admin/ingredients/create"
      }
    ]
  },
  {
    icon: "shopping-basket",
    label: "Products",
    content: [
      {
        icon: "eye",
        label: "View",
        to: "/admin/products"
      },
      {
        icon: "plus",
        label: "Add",
        to: "/admin/products/create"
      }
    ]
  },
  {
    icon: "bar-chart",
    label: "Transactions",
    content: [
      {
        icon: "bar-chart",
        label: "Income",
        to: "/admin/transactions/incomepermonth"
      },
      {
        icon: "bar-chart",
        label: "Payment",
        to: "/admin/transactions/payment"
      },
      {
        icon: "bar-chart",
        label: "Most User",
        to: "/admin/transactions/mostuserbuy"
      }
    ]
  }
];

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <MetisMenu
          content={content}
          LinkComponent={RouterLink}
          activeLinkFromLocation
        />
      </div>
    );
  }
}

export default Sidebar;
