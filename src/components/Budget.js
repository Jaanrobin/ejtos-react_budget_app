import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    
    

    const handleBudgetChange = (event) => {
        console.log("Budget:" + budget)
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
        if(event.target.value > 20000){
            alert("Budget is over 20000")
        }
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(event.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending")
        }
        
        
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" max="20000"value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;