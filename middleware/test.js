
export default function(context) {
  console.log('Test Middleware')

  return context.$axios
    .$post('https://reqres.in/api/login', {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    })
    .then((res) => {
      console.log(res)
      if (res.token !== 'QpwL5tke4Pnpja7X4') {
        context.redirect('/')
      }
    })
}
