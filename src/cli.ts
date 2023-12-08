
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import argv from 'minimist'

dotenv.config()

let args = argv(process.argv.slice(2))
if (!process.env.DATABASE_URL && !args.url) {
  throw new Error('define DATABASE_URL environment variable or --url argument')
}

let u = new URL(process.env.DATABASE_URL!)
let dbname = '`' + u.pathname.slice(1) + '`'
u.pathname = '/mysql'

let connection = await mysql.createConnection({
  uri: u.toString(),
})

try {
  await connection.execute(`DROP DATABASE IF EXISTS ${dbname}`)
  await connection.execute(`CREATE DATABASE ${dbname}`)
} finally {
  await connection.end()
}
