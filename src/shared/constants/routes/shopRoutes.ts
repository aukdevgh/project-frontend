import { CategoryRouteCollection } from '@shared/types/route'

export const shopRoutes: CategoryRouteCollection = {
  men: {
    category: { path: '/mens', title: 'mens' },
    subcategories: [
      { path: '/mens/shirts', title: 'shirts' },
      { path: '/mens/watches', title: 'watches' },
      { path: '/mens/shoes', title: 'shoes' },
    ],
  },
  women: {
    category: { path: '/womens', title: 'womens' },
    subcategories: [
      { path: '/womens/dresses', title: 'dresses' },
      { path: '/womens/bags', title: 'bags' },
      { path: '/womens/jewellery', title: 'jewellery' },
      { path: '/womens/watches', title: 'watches' },
      { path: '/womens/shoes', title: 'shoes' },
    ],
  },
}
