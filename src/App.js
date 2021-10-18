// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Faq from './Pages/Faq/Faq';
import Contact from './Pages/Contact/Contact';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/"> 
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/faq">
              <Faq></Faq>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/ServiceDetail">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/signin">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
