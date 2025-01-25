export const generateCategoryPath = (subcategory: string = '', catalog?: string) => {
  const paths = subcategory?.split('-')
  const main = paths[0]
  return catalog ? `/${catalog}/${main}/${subcategory}` : `shop/${main}/${subcategory}`
}
