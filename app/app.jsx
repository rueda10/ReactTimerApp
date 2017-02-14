var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
// var Route = require("react-router").Route
// var Router = require("react-router").Router
// var IndexRoute = require("react-router").IndexRoute
// var hashHistory = require("react-router").hashHistory
var Main = require("Main");
var Timer = require("Timer");
var Countdown = require("Countdown");

// Load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

// App css
require("style-loader!css-loader!sass-loader!applicationStyles")

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Router path="countdown" component={Countdown}></Router>
      <IndexRoute component={Timer}></IndexRoute>
    </Route>
  </Router>,
  document.querySelector("#app")
);
