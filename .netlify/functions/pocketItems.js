exports.handler = async (event, context, callback) => {
  let xhr = new XMLHttpRequest()
  xhr.open(
    'GET',
    'https://api.airtable.com/v0/app0sEvudHX6svP8C/Pocket%20Items'
  )
  xhr.setRequestHeader('Authorization', 'Bearer ' + process.env.AIRTABLE_API)
  xhr.send()
  xhr.onload = function() {
    if (xhr.status == 200) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(xhr.response),
      })
    }
  }
}
