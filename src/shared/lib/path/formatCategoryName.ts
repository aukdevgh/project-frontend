export const formatCategoryName = (mainCategoryName: string, subcategory: string) => {
  if (subcategory.startsWith(`${mainCategoryName}-`)) {
    return subcategory.split('-').slice(1).join()
  }
  return subcategory
}
