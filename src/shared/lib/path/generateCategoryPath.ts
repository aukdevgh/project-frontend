export const generateCategoryPath = (subcategory: string = '') => {
  const paths = subcategory?.split('-')
  const mainCategory = paths[0]
  const subCategory = paths[1]
  return `/${mainCategory}/${subCategory}`
}
