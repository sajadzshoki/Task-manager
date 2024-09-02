import {
  Remaining,
  Budget,
  ExpenseTotal,
  ExpenseList,
  AddExpenseForm,
} from "./Budget_manager/Budget";
import { AppProvider } from "../context/budgetContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Budget />

          <Remaining />

          <ExpenseTotal />
        </div>
        <h3 className="text-2xl font-semibold mt-6">Expenses</h3>
        <div className="mt-4">
          <div className=" border rounded-md shadow-sm bg-white">
            <ExpenseList />
          </div>
        </div>
        <h3 className="text-2xl font-semibold mt-6">Add Expense</h3>
        <div className="mt-4">
          <AddExpenseForm />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
