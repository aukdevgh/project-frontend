export const generateCategoryPath = (subcategory: string = '') => {
  const mainCategory = subcategory?.split('-')[0]
  return `/${mainCategory}/${subcategory}`
}
