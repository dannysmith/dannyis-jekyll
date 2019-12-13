const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
  const pass = (body) => {
    let returnPayload = body.records.map(function(record) {
      return {
        id: record.id,
        title: record.fields['Title'],
        url: record.fields['URL'],
        hasImage: false,
        createdAt: record.createdTime,
        type: 'mediumClap',
      }
    })

    callback(null, { statusCode: 200, body: JSON.stringify(returnPayload) })
  }

  try {
    let response = await fetch(
      'https://api.airtable.com/v0/app0sEvudHX6svP8C/Medium%20Claps',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API}`,
          'Content-Type': 'application/json',
        },
      }
    )
    let data = await response.json()
    await pass(data)
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    }
    await pass(error)
  }
}
