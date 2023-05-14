import { CiViewList, CiDollar, CiShoppingCart, CiEdit,CiLogout } from "react-icons/ci";
import { AiOutlineBarChart } from "react-icons/ai";



export const categories = [
  { name: "Dashboard", icon: <CiViewList color="white" size="1.5em" /> },
  { name: "Finance", icon: <CiDollar color="white" size="1.5em" /> },
  { name: "Shopping", icon: <CiShoppingCart color="white" size="1.5em" /> },
  { name: "To Do List", icon: <CiEdit color="white" size="1.5em" /> },
  { name: "Analytics", icon: <AiOutlineBarChart color="white" size="1.5em" /> },
  { name: "Logout", icon: <CiLogout color="white" size="1.5em" /> },
];
