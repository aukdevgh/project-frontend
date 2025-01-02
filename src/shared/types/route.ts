export interface Route {
  path: string
  title: string
}

export interface CategoryRoute {
  category: Route
  subcategories?: Route[]
}

export type Routes = Route[]
export type RouteDictionary = Record<string, Route>
export type RoutesByCategory = Record<string, Routes>
export type CategoryRouteCollection = Record<string, CategoryRoute>
