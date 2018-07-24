![cf](http://i.imgur.com/7v5ASc8.png) 31: Redux Budget Tracker
===

This lab uses Redux to manage the state of a simple budget categories listing app.  The state consists of an array of objects:
```
[
    {
        name: 'category name',
        budget: amount
    }
]
```
Components (from the bottom up) include:
  - category-form.  This is the form used to create and update categories.
  - categories.  This is the wrapper component for category form. Adds a title with the current values.
  - Landing. This builds the actual page, putting a category-form at the top and then a list of items from the state.
  - App. Top level component. Establishes the route to Landing ('/').

Other files
  - action/categories.js. Includes the action helper functions that wrap a budget item with action type and other required properties (in the case of create action).
  - main.js. Creates the Redux store and renders React div on the DOM.

