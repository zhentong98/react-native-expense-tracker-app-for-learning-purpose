import {StyleSheet} from "react-native";
import {useContext} from "react";

import {ExpensesContext} from "../store/expenses-context";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import {getDateMinusDays} from "../util/date";

function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = expensesCtx.expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo;
    });

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"}/>
    );
}

export default RecentExpenses;

const styles = StyleSheet.create({});
