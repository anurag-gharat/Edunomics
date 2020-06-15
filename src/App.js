import React,{useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import "materialize-css/dist/js/materialize.min.js";
import './App.css';
import AOS from 'aos';
import {Provider} from 'react-redux' 
import store from './Redux/Store'
import'aos/dist/aos.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Application from './Pages/Application'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Knowmore from './Pages/Knowmore';
import Error from './Pages/Error';
import Search from './Pages/Search';
import ScrollToTop from './Components/ScrollToTop';
import UserDashboard from './Pages/UserDashboard';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import AllBlogs from './Pages/AllBlogs'
import AllCategories from './Pages/AllCategories';
import NewBlog from './Pages/NewBlog';
import Category from './Pages/Category';
import CategorizedBlogs from './Pages/CategorizedBlogs';
import Test from './Components/Test';
import UserResume from './Pages/UserResume';
import PrivateRoutes from './PrivateRoutes';




function App(){
  
  
useEffect(()=>{
  AOS.init();
},[])

  return (
    <div>
      <Provider store={store}>
        <Router >
          <ScrollToTop >
          <Navbar />
          
          <Switch>
              <Route path="/" exact component={Home}    />
              <Route path="/knowmore" exact component={Knowmore}    />
              <Route path="/applynow" component={Application}    />
              <Route path="/search" component={Search}    />
              <PrivateRoutes path="/user/dashboard" component={UserDashboard}    />
              <PrivateRoutes path="/user/resume/" exact component={UserResume}    />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/allblogs" component={AllBlogs} />
              <Route path="/allcategories" component={AllCategories} />
              <Route path="/newblog" component={NewBlog} />
              <Route path="/category/:categoryId" component={Category} />
              <Route path="/blogs/:categoryId" component={CategorizedBlogs} />
              <Route path="/Test" component={Test} /> 





              <Route component={Error}    />


            
          </Switch>
          
          <Footer />
          </ScrollToTop>
        </Router>
        </Provider>
    </div>
  );
}

export default App;

