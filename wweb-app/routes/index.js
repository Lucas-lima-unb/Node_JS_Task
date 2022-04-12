var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
  const db = require("../db");
  const Users = db.Mongoose.model('users', db.UserSchema, 'users');
 
  const docs = await Users.find({}).lean().exec();
  res.render('index', { docs });
});
module.exports = router;
