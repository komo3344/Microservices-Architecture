// export default function ({ store, error }) {
//   if (!store.state.authUser) {
//     error({
//       message: 'You are not connected',
//       statusCode: 403
//     })
//   }
// }
import Cookie from 'js-cookie'

export default function ({ store, redirect, route }) {
  
  // 사용자가 인증을 하지 않은 경우.
  // console.log(store.getters.getLogin)
  if (!store.getters.getLogin && route.path == 'http://localhost:3000') {
    return redirect('http://localhost:3000/login')
  }
}