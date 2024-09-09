import { Budget, ExpenseTotal, Remaining } from "../Budget_manager/Budget";
import { useSelectedCategory } from "../../ZustandStore";
import { AppProvider } from "../../context/budgetContext";

const BudgetSmall = () => {
  //takes you to sshopping feed
  const setSelectedCategory = useSelectedCategory(
    (state) => state.setSelectedCategory
  );
  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
  };
  return (
    <AppProvider>
      <div className="w-80 shadow-md bg-white p-3 rounded-md grid gap-3">
        <h1
          onClick={() => handleCategoryChange("Shopping")}
          className=" text-lg cursor-pointer hover:drop-shadow-md"
        >
          Shopping
        </h1>
        <Budget />
        <Remaining />
        <ExpenseTotal />
      </div>
    </AppProvider>
  );
};

export default BudgetSmall;
