export default function ({ store, redirect, route }) {
  if (!store.state.user) {
    // alert('로그인 후 이용가능합니다.')
    return redirect('/login')
  }
}