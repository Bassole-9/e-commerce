import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";

const Layout = ({ nombre,message,handleSearch}) => {
  return (
    <>
      <div>
        <div>
          <div>
            <Header nombre={nombre} message={message} handleSearch={handleSearch}/>
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
