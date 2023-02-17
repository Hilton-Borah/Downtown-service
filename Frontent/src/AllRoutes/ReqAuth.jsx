import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const location = useLocation();
  const isAuth = useSelector((store)=>store.isAuth)
  console.log(location)
//   console.log(isAuth)

  if (!isAuth){
    return <Navigate to="/" state={{form:location.pathname}} replace/>
  }
  return children
};

export default ReqAuth;