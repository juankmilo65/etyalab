import Home from './components/home/home';
import { Route, Switch } from "react-router-dom";

function App(): JSX.Element {
  return <Switch>
    <Route path="/" component={Home} />
    {/* <Route path="/singUp" component={UseSingUp} />
  <Route path="/dashboard/:page" component={UseDashboard} /> */}
  </Switch>
}

export default App;
