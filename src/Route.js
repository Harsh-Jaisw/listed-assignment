// import './App.css';
import {Routes,Route} from "react-router-dom"
import Dashboard from './component/Dashboard/Dashboard';
import Signin from './component/Signin/Signin';
function Routing() {
  return (
    // <div >
     <Routes>
      <Route element={<Dashboard/>} path="/"/>
      <Route element={<Signin/>} path="/login"/>
     </Routes>
    // </div>
  );
}

export default Routing;
