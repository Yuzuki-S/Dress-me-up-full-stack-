var hash = require("../auth/hash");

const db = require("./connection");

function createUser(email, first_name, last_name, password) {
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err);
      // console.log(hourlyrate);

      db("users")
        .insert({ email, first_name, last_name, hash })
        .then(user_id => resolve(user_id))
        .catch(err => reject(err));
    });
  });
}
function userExists(email) {
  return db("users")
    .where("email", email)
    .first();
}

function getUserByName(email) {
  return db("users")
    .where("email", email)
    .first();
}

module.exports = {
  createUser,
  userExists,
  getUserByName
};
