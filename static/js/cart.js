const url = '/update_item/'
const buttons = document.querySelectorAll('.update-cart ')

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const productId = this.dataset.product
    const action = this.dataset.action
    console.log('productId:', productId, 'Action:', action)

    if (user === 'AnonymousUser') {
      console.log('User is not authenticated')
    } else {
      updateUserOrder(productId, action)
    }
  })
})

console.log('csrftoken:', csrftoken)

function updateUserOrder(productId, action) {
  console.log('User is authenticated, sending data...')

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    body: JSON.stringify({ productId, action }),
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log('data:', data)
      location.reload()
    })
}
