import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Appointment from './components/Appointment/Appointment';
import Department from './components/Department/Department';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path='/department/:departmentId'>
              <Department></Department>
            </Route>

            {/* <Route path='/department/:departmentId'>
            <Department></Department>
          </Route> */}


            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
