import config from '~/config';
//Page
import Home from '~/pages/Home';
import Infor from '~/pages/Infor';
import Virtualassistant from '~/pages/Virtualassistant';
import NavigationPage from '~/pages/NavigationPage';

// Public Route
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.infor, component: Infor },
    { path: config.routes.virtualassistant, component: Virtualassistant },
    { path: config.routes.navigationpage, component: NavigationPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
