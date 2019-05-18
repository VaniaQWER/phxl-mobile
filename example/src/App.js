import React from 'react';
import { HashRouter, Route, Switch , Link } from 'react-router-dom';
import { routes } from './router';

function Home() {
  return (
    <ul>
      {
        routes.map((item,i) => {
          return (<li key={i}> <Link to={{pathname:`${item.path}`}}>{item.path}</Link></li>)
        })
      }
    </ul>
  )
}

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true}  component={Home}></Route>
        {routes.map((route, i) => (
          <Route key={i} path={route.path} exact={route.exact}  component={route.component}></Route>
        ))}
      </Switch>
    </HashRouter>
  );
}
export default App;
