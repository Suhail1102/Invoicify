import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="absolute top-1/2 left-1/2"> <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box></div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return <>
{
    children}
  </>
};
export default PrivateRoute;

