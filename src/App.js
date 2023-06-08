import {Routes , Route} from 'react-router-dom'
import Home from './FrontEnd/Home/Home';
import Navbar from './FrontEnd/Navbar';
import Login from './Auth/Login';
import NotFound from './FrontEnd/NotFound';
import Dashboard from './Dashboard/Dashboard';
import DashboardHome from './Dashboard/DashboardHome';
import ListEvent from './Dashboard/ListEvent';
import EventCategory from './Dashboard/EventCategory';
import Order from './Dashboard/Order';
import CreateEvent from './Dashboard/CreateEvent';
import CreateVenue from './Dashboard/CreateVanue';
import SignUp from './Auth/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Auth/Update';
import Loading from './Auth/Loading/Loading';
import UserList from './Dashboard/UserList';
import SingleViewUser from './User/SingleViewUser';
import UserProfile from './Dashboard/UserProfile';
import AddFish from './Dashboard/AddFish';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/l' element={<Loading/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/update' element={<Update/>}></Route>


        <Route path='/dashboard/list-user/user/:_id' element={<SingleViewUser/>}></Route>


        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='/dashboard/' element={<DashboardHome/>}></Route>
          <Route path='/dashboard/list-event' element={<ListEvent/>}></Route>
          <Route path='/dashboard/my-profile' element={<UserProfile/>}></Route>
          <Route path='/dashboard/event-category' element={<EventCategory/>}></Route>
          <Route path='/dashboard/order' element={<Order/>}></Route>
          <Route path='/dashboard/create-event' element={<CreateEvent/>}></Route>
          <Route path='/dashboard/create-venue' element={<CreateVenue/>}></Route>
          <Route path='/dashboard/list-user' element={<UserList/>}></Route>
          <Route path='/dashboard/add-fish' element={<AddFish/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>


      <ToastContainer/>
    </div>
  );
}

export default App;
