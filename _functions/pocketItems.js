const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API
})
const base = Airtable.base('app0sEvudHX6svP8C')

// eslint-disable-next-line func-names
exports.handler = (event, context, callback) => {
  const allRecords = []
  base('Pocket Items')
    .select({
      maxRecords: 100,
    })
    .eachPage(
      (records, fetchNextPage) => {
        records.forEach((record) => {
          allRecords.push({
              id: record.id,
              title: record.fields['Title'],
              url: record.fields['URL'],
              excerpt: record.fields['Excerpt'],
              imageUrl: record.fields['Image URL'],
              hasImage: !record.fields['Image URL'].includes('no_image_card.png'),
              tags: record.fields['Tags'],
              addedAt: Date.parse(record.fields['Added At'].split(' at ')[0]),
              createdAt: Date.parse(record._rawJson.createdTime),
              type: 'pocketItem',
          })
        })
        fetchNextPage()
      },
      (err) => {
        if (err) {
          callback(err)
        } else {
          const body = JSON.stringify(allRecords.sort((a,b) => b.createdAt - a.createdAt))
          const response = {
            statusCode: 200,
            body,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=300, public'
            }
          }
          callback(null, response)
        }
      }
    )
}
