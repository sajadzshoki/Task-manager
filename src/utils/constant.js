import { CiViewList, CiDollar, CiShoppingCart, CiEdit,CiCalendarDate,CiSettings} from "react-icons/ci";
import { AiOutlineBarChart } from "react-icons/ai";



export const weekDays = ["S","M", "T", "W", "T", "F", "S"]


export const expenses = [
  { name: "Grocery", prices: [325, 15, 84, 3, 54, 49, 712] ,color:"border-green-400"},
  { name: "Transportation", prices:[12, 15, 4, 51, 23, 10, 6] ,color:"border-purple-400"},
  { name: "Other", prices:[21, 33, 45, 85, 1, 24, 97] ,color:"border-yellow-400"},
  { name: "Test", prices:[21, 33, 45, 24, 1, 325, 97] ,color:"border-red-400"},
]




export const categories = [
  { name: "Dashboard", icon: <CiViewList color="white" size="1.5em" /> },
  { name: "Finance", icon: <CiDollar color="white" size="1.5em" /> },
  { name: "To Do List", icon: <CiEdit color="white" size="1.5em" /> },
  { name: "Shopping", icon: <CiShoppingCart color="white" size="1.5em" /> },
  { name: "Analytics", icon: <AiOutlineBarChart color="white" size="1.5em" /> },
  { name: "Calendar", icon: <CiCalendarDate color="white" size="1.5em" /> },
  { name: "Setting", icon: <CiSettings color="white" size="1.5em" /> },
];
