const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');

exports.login = (req, res) => {
  const { email, password} = req.body;

  if (!password || !email) {
    return res.status(422).send({errors: [{title: 'Missing Data', detail: 'Email or password is missing!'}]});
  }
  
  User.findOne({email}, (error, foundUser) => {
    if (error) {
      return res.status(422).send({errors: [{title: 'DB Error', detail: 'Oooops, something went wrong!'}]});
    }

    if (!foundUser) {
      return res.status(422).send({errors: [{title: 'Invalid Email', detail: "User with provided email doesn't exist"}]});
    }

    if (foundUser.hasSamePassword(password)) {
      const token = jwt.sign({
        sub: foundUser.id,
        username: foundUser.username
      }, config.JWT_SECRET, { expiresIn: '2h'})
      return res.json(token);
    } else {
      return res.status(422).send({errors: [{title: 'Invalid Password', detail: 'Provided password is wrong!'}]});
    }

  })
}


exports.register = (req, res) => {
  const { username, email, password, passwordConfirmation } = req.body;

  if (!password || !email) {
    return res.status(422).send({errors: [{title: 'Missing Data', detail: 'Email or password is missing!'}]});
  }

  if (password !== passwordConfirmation) {
    return res.status(422).send({errors: [{title: 'Invalid password', detail: 'Password is not maching confirmation password!'}]});
  }

  User.findOne({email}, (error, existingUser) => {
    if (error) {
      return res.status(422).send({errors: [{title: 'DB Error', detail: 'Oooops, something went wrong!'}]});
    }

    if (existingUser) {
      return res.status(422).send({errors: [{title: 'Invalid Email', detail: 'User with provided email already exists!'}]});
    }

    const user = new User({username, email, password});
    user.save((error) => {
      if (error) {
        return res.status(422).send({errors: [{title: 'DB Error', detail: 'Oooops, something went wrong!'}]});
      }

      return res.json({status: 'registered'});
    })
  })
}