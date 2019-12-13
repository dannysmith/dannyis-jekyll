const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
  const pass = (body) => {
    //TODO: Add code here that filters and reshapes the body.
    let returnPayload = body.records.map(function(record) {
      return {
        id: record.id,
        title: record.fields['Title'],
        url: record.fields['URL'],
        excerpt: record.fields['Excerpt'],
        imageUrl: record.fields['Image URL'],
        hasImage: !record.fields['Image URL'].includes('no_image_card.png'),
        createdAt: record.createdTime,
        type: 'pocketItem',
      }
    })

    callback(null, { statusCode: 200, body: JSON.stringify(returnPayload) })
  }

  try {
    let response = await fetch(
      'https://api.airtable.com/v0/app0sEvudHX6svP8C/Pocket%20Items',
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
