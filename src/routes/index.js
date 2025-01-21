import config from '~/config';
//Page
import Home from '~/pages/Home';
import Infor from '~/pages/Infor';
import Virtualassistant from '~/pages/Virtualassistant';

// Public Route
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.infor, component: Infor },
    { path: config.routes.virtualassistant, component: Virtualassistant },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
