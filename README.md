![cf](http://i.imgur.com/7v5ASc8.png) 31-32: Redux Budget Tracker
===

This lab uses Redux to manage the state of a simple budget categories listing app.  The state consists of an array of budget categories and an object containing expenses, keyed to the corresponding category:
```
{
    categories:[
        {
            name: 'category name',
            budget: amount,
            id: uuid string,
            createdOn: date string,
        }
    ],
    expenses: {
        [category.id]: {
            desc: 'description',
            amount: number,
            categoryId: parent category's uuid,
            id: uuid string,
            timestamp: date string,
        }
    }
}
```
The application state is saved to localStorage so things are not forgotten between sessions.

Components (from the bottom up) include:
  - expense-form. Form for creating and updating expenses.
  - expenses. Collects all expenses for a given category.
  - category-form.  This is the form used to create and update categories.
  - categories.  This is the wrapper component for category form. Adds a title with the current values.
  - Landing. This builds the actual page, putting a category-form at the top and then a list of items from the state.
  - App. Top level component. Establishes the route to Landing ('/').

Other files
  - action/*.js. Includes action helper functions that wrap a category or expense item with action type and other required properties (in the case of create action).
  - reducers/*.js. Includes the reducers for categories and expenses parts of the state. Combined in main.js into a single reducer.
  - src/middleware/*.js. Includes middleware code for loggin actions, errors, and saving state to localStorage.
  - main.js. Combines reducers, reates the Redux store and renders React div on the DOM.

Testing via cypress has been created. Execute `npm run cypress:open`, then, withing the Cypress gui, execute  ./cypress/integration/app.spec.js.
