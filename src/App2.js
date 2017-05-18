import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = (props) => (
  <Router>
    <div>
      {/*optional matching*/}
      {/*<Route path="/:page?/:subpage?" render={({ match }) => (
        <h1>
          PAGE: { match.params.page || 'Home' }<br />
          SUBPAGE: {match.params.subpage}
        </h1>
      )} />*/}

      {/*regular expression matching*/}
      <Route path="/:a(\d+)/:b" render={({match}) => (
        <h1>
          paramA: {match.params.a}<br/>
          paramB: {match.params.b}
        </h1>
      )} />
    </div>
  </Router>
)

export default App;