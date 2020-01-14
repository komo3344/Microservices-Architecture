import Cookie from 'js-cookie'
export default function ({ store, redirect, route }) {
  if (!store.state.user) {
    // alert('로그인 후 이용가능합니다.')
    return redirect('/login')
  }
//   if (Cookie.get('token') == undefined || !store.state.use) {
//     // alert('로그인 후 이용가능합니다.')
//     return redirect('/login')
//   }
}