import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import PatientsIndexContainer from './containers/PatientsIndexContainer';



const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/patients' component={NavBar}>
        <IndexRoute component={PatientsIndexContainer} />
      </Route>
    </Router>
  )
}

export default App;
