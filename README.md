# React
This code repository includes code snippet examples for below features 

1. Hooks (useState, useEffects, useContext etc..)

2. SSR (server side rendering with express server) -- reference taken from plural site video https://github.com/danielstern/server-rendered-react-app/blob/master/client/client.jsx

3. bindActionCreator 
4. Hoc ( high order component)
5. render props, refs 
6. React Router 
7. Axios 
8. reducers 
9. redux 
10. React class component & functional component 
11. Destructing props 
12. bootstrap 
13. Saas for style
14. React.Fragment, React.createRef, React.forwardRef, React.memo, React.PureComponent
15. class properties (defaultProps, displayName)
16. instance properties (props, state), 
17.




----- Documentation Source is taken from react website itself----
1. What is component in react?
  Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

2. What is higher order component?
 A higher-order component (HOC) is an advanced technique in React for reusing component logic.
 Concretely, a higher-order component is a function that takes a component and returns a new component (extends the wrapped component).
 
 The HOC can read, edit and delete state of the WrappedComponent instance, and you can also add more state if you need to
 
 ex: connect(mapStateToProps, mapDispatchToProps)(UserPage) 
 Ref: https://css-tricks.com/what-are-higher-order-components-in-react/
      https://github.com/franleplant/react-hoc-examples/blob/master/pp_state.js





 ---- New features ----
React.memo()
React.lazy()



