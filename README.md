####React Best Practices
1.  We always create one component per file. No matter how small it is.
2.  Normaly we call React Components a functional component. because it literally a function. there is another type of component in React is Class Component. It use to some type of record keeping.
3.  Class Based components must have render method declaration. Otherwise you will get an error.
4.  You should always start with functional Components and while refactoring you can introduce class based component to make them more intelligent.
5.  State is a plain javascript object that is use to record in react to use events. Each class based component that we define as it's onw state object. what ever a component state change, component immidiatly rerendered and it also forces all of it's childers to be rerendered as well.
6.  Functional components do not have state only class based components do.
7.  State is the javascript object in any class based components.
8.  You must update state by using this.setState() throughout the component except in constructor of the class based component.
9.  Controlled field is a form element (like input) whose value is set by the state property.
10. To instantiat an object of js class in JSX just put name of the class with angle brackets. <App /> Where App is the class.