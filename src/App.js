import React, { useState } from 'react';
import './styles/style.scss';
import Avatar from './js/components/avatar/avatar.content';
import { Home } from './js/components/home/home.content'
import Form from './js/components/Form'
import RefComp from './js/components/RefComp';
import FocusInput from './js/components/FocusInput';
import WithCounter from './js/components/hoc/WithCounter'
import HoverCounter from './js/components/hoc/HoverCounter';
import ClickCounter from './js/components/hoc/ClickCounter';
import Counter from './js/components/render-props/Counter';
import ClickCounterTwo from './js/components/render-props/ClickCounterTwo';
import HoverCounterTwo from './js/components/render-props/HoverCounterTwo';
import PostList from './js/components/http/PostList';
import FormPost from './js/components/http/FormPost';
import HookCounterTwo from './js/components/hooks/HookCounterTwo';
import HookWithObject from './js/components/hooks/hook-with-object';
import UsersContainer from './js/components/lists/users-container';
import Cake from './js/containers/cake';
import IceCream from './js/containers/iceCream';
import Users from './js/containers/Users';
import { Header, RenderRoutes } from './js/components/navigation/header';
import SignUp from './js/components/signup/signup.component'
import List from './js/components/lists/list.content'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import HookExamples from './js/components/hooks/hook-examples'
import HocExample2 from './js/components/hoc/example2'

const App = () => {

  // const user = {
  //   name: "psavale",
  //   age: 29,
  //   initial: "PS"
  // }
  // const [activeScreen, changeScreen] = useState(0);

  // function changeActiveScreen() {
  //   changeScreen(activeScreen == 0 ? 1 : 0);
  // }

  const HandleMenu = () => {

  };

  return (
    <div className="App">


      <div className="body">
        <Router>
          <header className="header">
            <Header />
          </header>

          <div className="container">


            <Switch>
              <Route exact path="/Home" component={Home} exact />
              <Route exact path="/">
                <Redirect to="/Home" />
              </Route>
              <Route path="/userlist" component={UsersContainer} />
              <Route path="/signup" component={SignUp} />
              <Route path="/list" component={List} />
              <Route path="/HookExamples" component={HookExamples} />
              <Route path="/hocExample2" component={HocExample2} />
            </Switch>


            {/* <Router>
            <Route path="/HookExamples" component={HookExamples} />
            <Router path="/hocExample2" component={HocExample2} />
          </Router> */}
          </div>
        </Router>
        {/* <Home {...user} /> */}
        {/* <UsersContainer />

        <div>
          <h2> You can Buy Cake and Ice Cream here</h2>
          <Cake />
          <IceCream />
        </div> */}

        {/* example of functional component with useEffect and dispatch  
        <Users/> */}

        {/* React hook demo for useState with object
        <HookWithObject/> */}

        {/* React hooks demo for useState with prevState 
        <HookCounterTwo/> */}


        {/* <h2>http post request demo using axios</h2>
            <FormPost/> 
        */}

        {/* http get request demo in react using axios
          <PostList/>         
        */}

        {/* Render props demo to share the code between the components 

        <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo incrementCount={incrementCount} count={count} />
          )}
        </Counter>

        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo incrementCount={incrementCount} count={count} />
          )}

        </Counter>
        */}

        {/* Higher order component demo 
          <HoverCounter/>
          <ClickCounter name="Parameshwar"/> 
        
        */}

        {/* Ref keyword demo to call child component methods <FocusInput/> */}

        {/* this for profile Avatar  

            <div style={{ marginTop: "15px", border: "1px solid blue" }}>
              <Avatar initial={initial} />         
            </div> 
        */}

        {/* React Ref demo <RefComp/> */}

        {/* React form demo <Form/> */}

        {/* demo for list rendering
            <div style={{ marginTop: "15px", border: "1px solid red" }}>
            <h3>Array listing </h3>
            </div>
        */}

        {/* conditional rendering
        
              <button onClick={changeActiveScreen}>Home</button>  
              <button onClick={changeActiveScreen}>Coaches</button>

              <div>{activeScreen}</div>

              {false && <div> <h1>Home</h1></div>}

              <div> <h1>Coaches</h1></div> 
      
        */}


      </div>

      <footer className="App-footer">
        Copyright &copy; 2019 Lowes CA
      </footer>

    </div>
  );
}

export default App;
