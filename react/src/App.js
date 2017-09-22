import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import PatientsIndexContainer from './containers/PatientsIndexContainer';
import PatientShowContainer from './containers/PatientShowContainer';
import AdmissionInfoTile from './components/AdmissionInfoTile'



const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/patients' component={NavBar}>
        <IndexRoute component={PatientsIndexContainer} />
        <Route path='/patients/:id' component={PatientShowContainer}/>
        <Route path='/admissions/:id' component={AdmissionInfoTile}/>
      </Route>
    </Router>
  )
}

export default App;
