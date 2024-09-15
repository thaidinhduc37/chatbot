import config from '~/config';
//Page
import Home from '~/pages/Home';
import SingleMovie from '~/pages/SingleMovie';
import SeriesMovie from '~/pages/SeriesMovie';
import GenreMovie from '~/pages/GenreMovie';
import CountryMovie from '~/pages/CountryMovie';
import YearOfRelease from '~/pages/YearOfRelease';
import TheaterMovie from '~/pages/TheaterMovie';
import Trailer from '~/pages/Trailer';

// Public Route
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.singlemovie, component: SingleMovie },
    { path: config.routes.seriesmovie, component: SeriesMovie },
    { path: config.routes.genremovie, component: GenreMovie },
    { path: config.routes.countrymovie, component: CountryMovie },
    { path: config.routes.yearofrelease, component: YearOfRelease },
    { path: config.routes.theatermovie, component: TheaterMovie },
    { path: config.routes.trailer, component: Trailer },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
