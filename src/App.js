import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Department from './components/Department/Department';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Home/Services';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            {/* home  */}
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            {/* services  */}
            <Route path='/services'>
              <Services></Services>
            </Route>

            {/* appointment  */}
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>

            {/* about  */}
            <Route path='/about'>
              <About></About>
            </Route>

            {/* login  */}
            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Register></Register>
            </Route>

            <PrivateRoute path='/department/:departmentId'>
              <Department></Department>
            </PrivateRoute>

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
