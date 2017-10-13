// 后台接口的基本路径
const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : ''
// 路由模式，history不带#(需要后台配合),hash带#,
// let routeMode = 'history'
const routeMode = 'hash'
export {
    baseUrl,
    routeMode
}
