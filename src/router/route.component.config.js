
/**
 * 路由用到的组件都在这里注册
 * 格式：
 *  "home" 字符串，直接读取 views 目录下的文件
 *  ["examples", "qqList"] 数组，按顺序拼接路径，以 views 为根路径，以数组最后一个元素作为名字
 */
const TAB_ROUTERS = [
  "home", // 首页

  // 示例组件
  /* ***** PC 端 ***** */
  ["examples", "commonView"],
  /* ***************** */

  /* ***** 移动端 ***** */
  ["examples", "qqList"],
  /* ***************** */
]

export default TAB_ROUTERS;

// 说明：将路由组件的注册抽离出来，是为了方便路由的配置，以及路由与菜单栏的配合。