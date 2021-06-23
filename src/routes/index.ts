import { RouteConfig } from 'react-router-config'
import Home from '@/pages/home'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
]

export default routesConfig
