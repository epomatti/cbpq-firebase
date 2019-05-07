/*
* To run this program use:
* node validate.js <start> <end> <threads>
*
* Exemple: node validate.js 0 0 1
*/

const axios = require('axios')
const cq = require('concurrent-queue')

console.log(process.argv)

const start = Number(process.argv[2])
const end = Number(process.argv[3])
const threads = Number(process.argv[4])

const client = axios.create({
  baseURL: 'http://localhost:5001/cbpq-7e4c6/us-central1/app',
})

const queue = cq().limit({ concurrency: threads }).process(task => task())

let errors = 0

const call = async (cbpq) => {
  await client.get(`/license/cbpq/${cbpq}`)
    .catch(() => errors++);
}

for (let i = start; i <= end; i++) {
  queue(() => call(i))
}

queue.drained(() => console.log(`Finished with ${errors} errors`))
