import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/organisms/ImageSlider/ImageSlider";
import { IPhoto } from "./shared/types/photo.model";
import data from './server/data.json'
import BigImageSlider from "./components/organisms/BigImageSlider/BigImageSlider";
import ButtonSample from "./components/samples/atoms/ButtonSample/ButtonSample";
import IconSample from "./components/samples/atoms/IconSample/IconSample";
import LogoSample from "./components/samples/molecules/LogoSample/LogoSample";
import FullScreenSample from "./components/samples/molecules/FullScreenSample/FullScreenSample";
import SideBarSample from "./components/samples/organisms/SideBarSample/SideBarSample";
import RedirectingToNavBar from "./components/samples/atoms/RedirectingToNavBar/RedirectingToNavBar";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/atoms/Button" element={<ButtonSample />} />
            <Route path="/atoms/Icon" element={<IconSample />} />
            <Route path="/atoms/NavBar" element={<RedirectingToNavBar />} />
            <Route path="/molecules/Logo" element={<LogoSample />} />
            <Route path="/molecules/FullScreen" element={<FullScreenSample />} />
            <Route path="/organisms/ImageSlider" element={<ImageSlider photos={data.photos as IPhoto[]} />} />
            <Route path="/organisms/BigImageSlider" element={<BigImageSlider photos={data.photos as IPhoto[]} />} />
            <Route path="/organisms/SideBar" element={<SideBarSample />} />
            <Route path="/*" element={<Navigate to={'/organisms/ImageSlider'} />} />
        </Routes>
    )
}

export default AppRoutes;