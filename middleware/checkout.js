export default function ({ route, redirect }) {
  if (route.fullPath === '/checkout/' || route.fullPath === '/checkout') {
    return redirect('/checkout/information/')
  }
}
