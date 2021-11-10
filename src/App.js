import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import AddNewService from './Components/AddNewService/AddNewService';
import Login from './Components/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/service">
            <Service></Service>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/team">
            <Team></Team>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <PrivateRoute exact path="/manageAllOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>

          <PrivateRoute exact path="/addNewService">
            <AddNewService></AddNewService>
          </PrivateRoute>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute exact path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute exact path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
