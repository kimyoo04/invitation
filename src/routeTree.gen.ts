import { Route as IndexImport } from './routes'
import { Route as rootRoute } from './routes/__root'

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren([IndexRoute])
