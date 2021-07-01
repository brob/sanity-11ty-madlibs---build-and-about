const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'lz1zbgww',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

