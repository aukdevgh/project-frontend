export const formatPathName = (mainPathname: string, pathname: string) => {
  if (pathname.startsWith(`${mainPathname}-`)) {
    return pathname.split('-').slice(1).join()
  }
  return pathname
}
