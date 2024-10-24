import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";

const Layout = ({ nombre,message }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <Header nombre={nombre} message={message} />
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
