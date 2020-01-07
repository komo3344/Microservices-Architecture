export default function ({ store, redirect, route }) {
  // auth 확인
  if (!store.state.localStorage.token && route.path == 'http://127.0.0.1:3000') {
    return redirect('http://127.0.0.1:3000/login')
  }
}