import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/organismes/ImageSlider/ImageSlider";
import { IPhoto } from "./shared/types/photo.model";
import data from './server/data.json'
import BigImageSlider from "./components/organismes/BigImageSlider/BigImageSlider";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/organismes/ImageSlider" element={<ImageSlider photos={data.photos as IPhoto[]} />} />
            <Route path="/organismes/BigImageSlider" element={<BigImageSlider photos={data.photos as IPhoto[]} />} />
            <Route path="/*" element={<Navigate to={'/organismes/ImageSlider'} />} />
        </Routes>
    )
}

export default AppRoutes;