# Questions and Answers

1. What is the difference between Component and PureComponent? Give an example where it might break my app.

- PureComponent handles shouldComponentUpdate by itself and it's a shallow comparison, whereas Component does not handle it. If the shallow comparison cannot find a change, it won't re-render and may cause unwanted state.

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

- If value in context changes but shouldComponentUpdate returns false, Child components won't get the updates.

3. Describe 3 ways to pass information from a component to its PARENT.

- Callback functions: Parent component passes a function to Child component as a prop.
- Context: Using Context
- Using 3rd party libraries like Redux, Recoil, etc.

4. Give 2 ways to prevent components from re-rendering.

- Using React.memo() for functional components
- Using shouldComponentUpdate for class components

5. What is a fragment and why do we need it? Give an example where it might break my app.

- Fragment is syntax that allows to group multiple elements together without adding an extra DOM element. If we use it in React root element, it will break the project as React requires a single root element. Using Fragment can also cause some unwanted styles.

6. Give 3 examples of the HOC pattern.

- HOC, High Order Component is a wrapper component which takes another component and adds some functionality over it. withLoading can be implemented to add Loading State to any Component. withError and withAuth can also be other examples for this.

7. What's the difference in handling exceptions in promises, callbacks and async...await?

- In promises; we handle error and success seperately in .catch() and .then() methods.
- In callbacks, error and data are handled in callback functional parameters.
- We have to use async keyword before a function in async/await and await the promise to resolve with await keyword.

8. How many arguments does setState take and why is it async.

- setState takes 2 arguments. First one is either a new value or an updater function. Second one is optional if we want to do something after re-render is finished. This is async because it will be scheduled to be updated for optimizing performance.

9. List the steps needed to migrate a Class to Function Component.

- Convert class syntax to function syntax
- Convert lifecycle methods to corresponding hooks
- Convert render method to return JSX

10. List a few ways styles can be used with components.

- Adding style prop to a component
- Using className prop to add classes from Stylesheet which can be imported directly
- Using Global styles

11. How to render an HTML string coming from the server.

- By using dangerouslySetInnerHTML
