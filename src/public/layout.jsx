import { Outlet } from "react-router-dom";
import Header from "../component/header";
import Footer from "../component/footer";

const Layout = ({ nombre }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <Header nombre={nombre} />
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
