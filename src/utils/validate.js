export function isvalidUsername(str) {
  const userNameList = ['admin', 'editor']
  return userNameList.indexOf(str) >= 0
}
