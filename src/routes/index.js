import config from '~/config';
//Page
import Home from '~/pages/Home';
import Infor from '~/pages/Infor';
import Watch from '~/pages/Watch';
import MovieLayout from '~/pages/MovieLayout';

// Public Route
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.infor, component: Infor },
    { path: config.routes.watch, component: Watch },
    { path: config.routes.singlemovie, component: () => <MovieLayout title="Phim Lẻ" /> },
    { path: config.routes.seriesmovie, component: () => <MovieLayout title="Phim Bộ" /> },
    { path: config.routes.genremovie, component: MovieLayout }, // Dùng slug
    { path: config.routes.countrymovie, component: MovieLayout }, // Dùng slug
    { path: config.routes.yearofrelease, component: MovieLayout }, // Dùng slug
    { path: config.routes.theatermovie, component: () => <MovieLayout title="Phim Chiếu Rạp" /> },
    { path: config.routes.trailer, component: () => <MovieLayout title="Phim Sắp Chiếu" /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
