const axios = require('axios')
const cq = require('concurrent-queue')

const client = axios.create({
  baseURL: 'http://localhost:5001/cbpq-7e4c6/us-central1/app',
})

const queue = cq().limit({ concurrency: 1 }).process(task => task())

const call = async (cbpq) => {
  const response = await client.get(`/license/cbpq/${cbpq}`)
  await response.data
}

for (let i = 0; i < 10; i++) {
  queue(() => call(i))
}

queue.drained(() => console.log('Finished'))
