const environment = process.env.NODE_ENV || 'development'
const config = require('../../../knexfile')[environment]
const db = require('knex')(config)

function addPackage(items) {
    console.log(items)
   let stringifiedItems = JSON.stringify(items)
//    return db('users')
//     .where('email', email)
    return db('orders')
    .insert({items: stringifiedItems})
    .then(data => {
       return data
//        return db('users')
//        .select()
//         .where({'id': data})        
    })
}


module.exports = {
    addPackage
}