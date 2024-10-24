import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ImageSliderSample from "./components/samples/organisms/ImageSliderSample/ImageSliderSample";
import BigImageSliderSample from "./components/samples/organisms/BigImageSliderSample/BigImageSliderSample";
import ButtonSample from "./components/samples/atoms/ButtonSample/ButtonSample";
import IconSample from "./components/samples/atoms/IconSample/IconSample";
import LogoSample from "./components/samples/molecules/LogoSample/LogoSample";
import FullScreenSample from "./components/samples/molecules/FullScreenSample/FullScreenSample";
import SideBarSample from "./components/samples/organisms/SideBarSample/SideBarSample";
import RedirectingToNavBar from "./components/samples/atoms/RedirectingToNavBar/RedirectingToNavBar";
import ModalSample from "./components/samples/organisms/ModalSample/ModalSample";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/atoms/Button" element={<ButtonSample />} />
      <Route path="/atoms/Icon" element={<IconSample />} />
      <Route path="/atoms/NavBar" element={<RedirectingToNavBar />} />
      <Route path="/molecules/Logo" element={<LogoSample />} />
      <Route path="/molecules/FullScreen" element={<FullScreenSample />} />
      <Route path="/organisms/ImageSlider" element={<ImageSliderSample />} />
      <Route
        path="/organisms/BigImageSlider"
        element={<BigImageSliderSample />}
      />
      <Route path="/organisms/SideBar" element={<SideBarSample />} />
      <Route path="/organisms/Modal" element={<ModalSample />} />
      <Route path="/*" element={<Navigate to={"/organisms/ImageSlider"} />} />
    </Routes>
  );
};

export default AppRoutes;
