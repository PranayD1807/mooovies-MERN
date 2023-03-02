import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";
const MainLayout = () => {
  return (
    <>
      {/* Global loading */}
      <GlobalLoading />
      {/* Global loading */}

      {/* login modal */}
      {/* login modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        <Topbar />
        {/* header */}
        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}
      </Box>
      {/* footers */}
      <Footer />
      {/* footers */}
    </>
  );
};

export default MainLayout;
