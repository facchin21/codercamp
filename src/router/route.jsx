import { Routes, Route } from 'react-router-dom';
import {Intro} from '../pages/Intro';
import {Blog} from '../pages/Blog';
import {NotFound} from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
