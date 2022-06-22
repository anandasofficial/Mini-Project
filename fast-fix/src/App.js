import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { StateProvider } from "./StateProvider";
import Cart from "./Cart";
import Admin from "./Admin";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Login from "./Login";
import UserAuth from "./UserAuth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import TaskerLogin from "./TaskerLogin";
import TaskerHomePage from "./TaskerHomePage";
import Taskers from "./Taskers";
import SearchResult from "./SearchResult";
import Banner from "./Banner";
import ServicePage from "./ServicePage";
import CategoryOption from "./CategoryOption";
import Category from "./Category";
import ServiceDetails from "./ServiceDetails";
import Sample from "./Sample";
import TaskerDetails from "./TaskerDetails";
import TaskDescription from "./TaskDescription";
import Services from "./Services";
import MyTasks from "./MyTasks";
import MyTasksPage from "./MyTasksPage";
import Review from './Review';
import BookService from './BookService';
import AdminPage from './AdminPage';
import AdminCategory from './AdminCategory';
import AdminAddService from './AdminAddService';
import AdminSidebar from './AdminSidebar';
import AdminViewService from "./AdminViewService";
import AdminTaskers from './AdminTaskers';
import AdminUpdateCategory from './AdminUpdateCategory';
import AdminAllServices from './AdminAllServices';
import AdminUpdateService from './AdminUpdateService';
import AdminSignUp from './AdminSignUp';
import AdminLogin from './AdminLogin';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/taskerhomepage">
              <Header />
              <TaskerHomePage />
              <Footer />
            </Route>

            <Route path="/review">
             <Review />
            </Route>

            <Route path="/admintaskers">
             <AdminTaskers />
            </Route>
           

            <Route path="/adminallservices">
             <AdminAllServices />
            </Route>
            <Route path="/adminsignup">
             <AdminSignUp />
            </Route>
            <Route path="/adminlogin">
             <AdminLogin />
            </Route>
            <Route path="/adminUpdateCategory/:categoryId">
             <AdminUpdateCategory />
            </Route>

            <Route path="/adminUpdateService/:serviceId">
             <AdminUpdateService />
            </Route>
            <Route path="/admincategory">
             <AdminCategory />
            </Route>
            <Route path="/adminpage">
             <AdminPage />
            </Route>
            <Route path="/bookservice/:taskerId">
              <Header />
             <BookService />
            </Route>
           

            <Route path="/adminviewservice/:categoryId">
              <AdminSidebar />
              <AdminViewService />
             </Route>
            <Route path="/adminservice/:categoryId">
              
             <AdminAddService />
            </Route>
            <Route path="/categories/:categoryId">
              <Header />
              <Category />
            </Route>
            <Route path="/service/:serviceId">
              <Header />
              <Services />
              
            </Route>
            <Route path="/tasker/:taskerId">
              <Header />
              <TaskDescription />
            </Route>
            <Route path="/servicedetails">
              <Header />
              <ServiceDetails />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/sample">
              <Header />
              <Sample />
              <Footer />
            </Route>
            <Route path="/description">
              <TaskDescription />
            </Route>
            <Route path="/search">
              <Header />
              <SearchResult />
            </Route>
            <Route path="/services">
              <Header />

              <Services />
            </Route>
            <Route path="/mytasks">
              <Header />
              <MyTasks />
            </Route>
            <Route path="/taskerlogin">
              <Header />
              <TaskerLogin />
            </Route>
            <Route path="/login">
              <Login />
              <UserAuth />
            </Route>
            <Route path="/taskers">
              <Header />
              <TaskerDetails />
            </Route>
            <Route path="/Cart">
              <Header />
              <Cart />
            </Route>
            <Route path="/mytasks">
              <Header />
              <MyTasks />
            </Route>
            <Route path="/mytaskspage">
              <Header />
              <MyTasksPage />
            </Route>
            <Route path="/servicepage">
              <Header />
              <ServicePage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/taskers">
              <Header />
              <Taskers />
            </Route>
            <Route path="/addservice">
              <AdminAddService />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>

          
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
