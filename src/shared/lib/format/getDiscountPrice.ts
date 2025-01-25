export const getDiscountPrice = (price: number, discountPercentage: number) => {
  if (price < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Invalid price or discount percentage')
  }

  const discount = (price * discountPercentage) / 100
  return price - discount
}
