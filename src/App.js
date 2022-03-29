import  "./css/main.css"
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import {routes} from "./router";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
            {routes.map(route => {
                    return <Route key={route.id} path={route.path} exact={route.exact} component={route.component}/>
            })
            }
            <Route path='*' component={Search} />
        </Switch>
    </div>
  );
}

export default App;
