# React
This code repository includes code snippet for below concepts 

1. Hooks (useState, useEffects, useContext etc..)

2. SSR (server side rendering with express server) -- reference taken from plural site video https://github.com/danielstern/server-rendered-react-app/blob/master/client/client.jsx

3. React Api references (createStore, combineReducers, applyMiddleware, bindActionCreator, compose)
  a. bindActionCreator
     The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it

    an action is a payload of information, and an action creator is a factory that creates an action.
    Sometimes we say bound action creators to mean functions that call an action creator and immediately dispatch its result to a specific store instance.
    
4. Hoc ( high order component)
5. render props, refs 
6. React Router 
7. Axios 
8. reducers 
   a. handleActions
   b. createAction()
9. redux 
    a. dispatch action (Dispatches an action. This is the only way to trigger a state change)
    b. With React Redux, your components never access the store directly - connect does it for you
    c. connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
10. Sagas
    a. redux-saga/effects
11. Store Provider 
11. React class component & functional component 
12. Destructing props 
13. bootstrap 
14. Saas for style
15. React.Fragment, React.createRef, React.forwardRef, React.memo, React.PureComponent
16. class properties (defaultProps, displayName)
17. instance properties (props, state), 
18. <h4> Named and default export </h4>


--- Step by steps to understand action dispatch in react ---
1. create a file & define all the actions using createAction method from 'redux-actions'
    ex: export const cakeAction = createAction(BUY_CAKE, (cakeCount: number) => cakeCount);
    

---- Testing ---
1. Snapshot Testing with jest 
    Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
    A snapshot test generates an HTML-like output so you can see how your component is structured. It’s especially useful if you want to see how your CSS properties are injected according to events.

    Snapshots are a fantastic tool for identifying unexpected interface changes within your application – whether that interface is an API response, UI, logs, or error messages.

    With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm.

2. logic testing using jest 
    Ref : https://jestjs.io/docs/en/expect
     1. To run only one test with Jest, temporarily change that test command to a test.only
     2. Jest is great for mocking not only your functions but also your modules.
     3. Jest is testing framework and its a test runner(supports following features Asserts, Mocking functions, async functions test, Dom manipulation, parallelization, snapshot testing, code coverage, Dom manipulation)
     Ref: https://blog.logrocket.com/comparing-react-testing-libraries/
     
3. enzyme 
Enzyme is intended for unit/integration testing. Its API was designed to test the implementation
Enzyme allows you to access the internal workings of your components. You can read and set the state, and you can mock children to make tests run faster.

    Shallow
       shallow method is used to render the single component that we are testing. It does not render child components.
       This does not require a DOM.
       As of Enzyme v3, the shallow API does call React lifecycle methods such as componentDidMount and componentDidUpdate.

    Mount 
      mount method renders the full DOM including the child components of the parent component that we are testing.
      If you want to test component lifecycle and children behavior, use mount.

    render 
      render which is used to render react components to static HTML and analyze the resulting HTML structure.

Ref: https://djangostars.com/blog/what-and-how-to-test-with-enzyme-and-jest-full-instruction-on-react-component-testing/

4. react-testing library 

On the other hand, react-testing-library doesn't give you any access to the implementation details. It renders the components and provides utility methods to interact with them. The idea is that you should communicate with your application in the same way a user would. So rather than set the state of a component you reproduce the actions a user would do to reach that state

Ref: 
https://blog.usejournal.com/testing-with-jest-and-enzyme-in-react-part-3-best-practices-when-testing-with-jest-and-enzyme-ae3fe0c39d06

https://jest-bot.github.io/jest/docs/mock-function-api.html#content

  Props testing 
  https://djangostars.com/blog/what-and-how-to-test-with-enzyme-and-jest-full-instruction-on-react-component-testing/

    


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
      https://www.codingame.com/playgrounds/8595/reactjs-higher-order-components-tutorial

3. What is store?
  An object that holds the complete state of your app. The only way to change its state is by dispatching actions. 
  You may also subscribe to the changes to its state to update the UI.
  The Store is also an Observable, so you can subscribe to changes with libraries like RxJS.


3. What is redux?
  Redux is only concerned with managing the state. In a real app, you'll also want to use UI bindings like react-redux.
  Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
  
  1.createStore(reducer, [preloadedState], [enhancer])
  2.combineReducers(reducers)  -->
  3.applyMiddleware(...middlewares)
  4.bindActionCreators(actionCreators, dispatch)
  5.compose(...functions)

  Ref: https://redux.js.org/api/api-reference

 --> 2. Don't create more than one store in an application! Instead, use combineReducers to create a single root reducer out of many.

---- References ----
React Routes: https://www.educative.io/blog/react-router-tutorial

4. what is Jsdom?
  jsdom is a pure-JavaScript implementation of many web standards

5. what is difference between ReactJs &  React-native
React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities.

React-Native is a framework, where ReactJS is a javascript library you can use for your website.
React-Native doesn’t use HTML to render the app, but provides alternative components that work in a similar way.





 ---- New features ----
React.memo()
  -- React.memo only checks for prop changes (re-render happens only if there is change in the props or state). If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, it will still rerender when state or context change.

  When to use React.memo()
    Pure functional component ( your component is functional and given the same props, always renders same output)
    your component render often 
  
React.lazy()


For sample docker application pls refer 
  https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-prepare-app

  steps to host the application using docker 
  1. Create a sample application, it can be nodejs, python 
  2. Create docker file in project 
       https://docs.docker.com/language/nodejs/build-images/
  3. Build the docker image 
      docker build --tag node-docker .

  ======> docker commands =========> 
  1. docker ps 
  2. docker ps -a 
  # to see list of docker images in the local machine
  3. docker images   

  # check the container logs 
  4. docker containerName logs

  # remove the image 
  5. docker rmi imageID

  # remove the container 
  6. docker rm containerID 
  # build the image 
  7. docker build --tag NameOfImageToSet .

  # The Docker tag command creates a new tag for an image. It does not create a new image. The tag points to the same image and is just another way to reference the image.
  8. docker tag node-docker:latest node-docker:v1.0.0 

  # run the docker image (which run the application in container)
  9.  docker run ImageName 

  # run the docker image in detached mode
  10. docker run -d -p 8888:8888 ImageName 
  
  # Start the container and expose port 8000 to port 8000 on the host.
  11. docker run --publish 8887:8887 node-docker
      docker run -d -p 8000:8000 --name container-name image-name

 # remove all the container at once 
  12. docker rm $(docker ps -a -q)
  13. docker stop $(docker ps -a -q)
  14. docker compose up -d 
  15. docker compose down 

  docker kill $(docker ps -q)

  docker rm -vf $(docker ps -aq)

 # enter the docker container 
 docker exec -it <container id> /bin/bash

# run the docker compose in detached mode 
  docker-compose up -d --build
  
# Docker mapped the 8080 port inside of the container to the port 49160 on your machine
ID            IMAGE                                COMMAND    ...   PORTS
ecce33b30ebf  <your username>/node-web-app:latest  npm start  ...   49160->8080

  docker run -d -p 0.0.0.0:5555:8888 react-app99 
  docker exec clever_mayer yarn install

  docker exec -it containerName bash


#  install the vim editor in docker to veiw the file content 
RUN ["apt-get", "update"]
RUN ["apt-get", "-y", "install", "vim"]

vim filename [ex: package.json]

# come out of docker container 
ctr+d

================= pulling mongo image from docker hub =================
docker run -it --rm -d -v mongodb:/data/db \
  -v mongodb_config:/data/configdb -p 27017:27017 \
  --network mongodb \
  --name mongodb \
  mongo

  docker run \
  -it --rm -d \
  --network mongodb \
  --name rest-server \
  -p 5558:8888 \
  -e CONNECTIONSTRING=mongodb://mongodb:27017/notes \
  my-node-app


 curl --request POST \
  --url http://localhost:8000/my-react-app \
  --header 'content-type: application/json' \
  --data '{"name": "this is a note", "text": "this is a note that I wanted to take while I was working on writing a blog post.", "owner": "peter"}'

============ Node Sass binding issue in docker container =================

 # node sass binding issue in docker container 
 docker exec -it containerName bash and then run
 yarn add node-sass

mount node_modules as volumes as shown below
 volumes:
      - .:/app
      - /app/node_modules/
command: bash -c "npm rebuild node-sass && yarn run server" 

 # couldn't find webpack module 
  docker-compose up --build
  docker-compose down -v



