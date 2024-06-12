import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './HeaderComponent/Header';
import Content from './ContentComponent/Content';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Register from './RegisterComponent/Register';
import Service from './ServiceComponent/Service';
import Login from './LoginComponent/login';
import Logout from './Logout/Logout';
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import Addcategory from './AddcategoryComponent/Addcategory';
import Addsubcategory from './AddsubcategoryComponent/Addsubcategory';
import Userhome from './UserhomeComponent/Userhome';
import Searchproduct from './SearchproductComponent/Searchproduct';
// import Addproduct from './AddproductComponent/Addproduct';
import EPAdmin from './EPAdminComponent/EPAdmin';
import EPUser from './EPUserComponent/EPUser';
import ViewProduct from './ViewProductComponent/ViewProduct';
import Showproduct from './ShowproductComponent/Showproduct';
import Addproduct from './AddproductComponent/Addproduct';
import Searchsubcategory from './SearchsubcategoryComponent/Searchsubcategory';
import Footer from './FooterComponent/Footer';
import Verifyuser from './VerifyusersComponent/Verifyusers';
import ReadMore from './ReadMore/readmore';
import AddCard from './Add-to-card/AddCard';
function App() {
   return (
      <div className="main-layout">

         <Header />
         <Routes>
            <Route path='/' element={<Content />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/service' element={<Service />}></Route>
            <Route path='/admin' element={<Adminhome />}></Route>
            <Route path='/manageusers' element={<Manageusers />}></Route>
            <Route path='/addcategory' element={<Addcategory/>}></Route>
            <Route path='/addsubcategory' element={<Addsubcategory/>}></Route>
            <Route path='/user' element={<Userhome />}></Route>
            <Route path='/searchproduct' element={<Searchproduct />}></Route>
            <Route path='/epadmin' element={<EPAdmin />}></Route>
            <Route path='/epuser' element={<EPUser />}></Route>
            <Route path='/addproduct' element={<Addproduct />}></Route>
            <Route path='/viewsubcat/:catname' element={<Searchsubcategory />}></Route>
            <Route path='/viewproduct' element={<ViewProduct/>}></Route>
            <Route path='/viewads/:catname/:subcatname/' element={<Showproduct/>}></Route>
            <Route path='/verifyuser/:email' element={<Verifyuser />}></Route>
            <Route path='/addproduct' element={<Addproduct />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/ReadMore' element={<ReadMore />}></Route>
            <Route path='/addcard' element={<AddCard />}></Route>
         </Routes>
      <Footer/>
      {/* contaianer end */}
      </div>
   );
}

export default App;
