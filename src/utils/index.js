import querystring from 'querystring'

/**
 * 将url的?的后面的参数转成对象
 * @param {String} url
 */
export const param2Obj = url => {
  const search = url.split('?')[1]
  if (!search) return {}
  return querystring.parse(search)
}
