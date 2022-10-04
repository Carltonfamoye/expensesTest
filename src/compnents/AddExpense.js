import React from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpense = () => {
    const handleOnSubmit = (expense) => {
        console.log(expense);
    };

    return (
        <React.Fragment>
            <ExpenseForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddExpense;