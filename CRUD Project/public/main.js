var routes = require('D:/CRUD Project/APIs.js')

const deleteButton = document.querySelector('#delete-button')
deleteButton.addEventListener('click', _ => {
    fetch("/qoutes", {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: req.body.name
      })
    })
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(data => {
        window.location.reload()
      })
  })

