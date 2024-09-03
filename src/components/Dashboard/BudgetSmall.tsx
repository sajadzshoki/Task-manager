import { Budget, ExpenseTotal, Remaining } from "../Budget_manager/Budget";
import { useSelectedCategory } from "../../ZustandStore";
import { AppProvider } from "../../context/budgetContext";

const BudgetSmall = () => {
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
          className=" text-lg cursor-pointer"
        >
          shopping
        </h1>
        <Budget />
        <Remaining />
        <ExpenseTotal />
      </div>
    </AppProvider>
  );
};

export default BudgetSmall;
