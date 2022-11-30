import { Outlet } from "react-router-dom";

const GymLayout =({children})=>{
  
  return (
      <>
      <Outlet />
      </>
  );
}
export default GymLayout;