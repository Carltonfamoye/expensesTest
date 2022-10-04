import React from 'react';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Header from '../compnents/Header';
import AddExpense from '../compnents/AddExpense';
import ExpenseList from '../compnents/ExpenseList';


// idg this page real

const AppRouter = () => {
    return(
        <BrowserRouter>
        <div>
            <Header />
            <div className ="main-content">
                <Switch>
                    <Route component={ExpenseList} path="/" exact={true}/>
                    <Route component = {AddExpense} path="/add"/>

                </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
};
export default AppRouter;