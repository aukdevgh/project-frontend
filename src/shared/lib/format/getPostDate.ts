export const getPostDate = (dateString: string): string => {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Use 'YYYY-MM-DD'.")
  }

  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-US', options)

  return `Posted on ${formattedDate}`
}
