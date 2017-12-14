const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  getAll: (req, res, next) => {
     User.find({})
    console.log(User, "POLLLLLLLLO");
    //   .then(users => res.status(200).json(users))
    //   .catch(e =>
    //     res.status(500).json({ message: `Error getting all users -> ${e}` })
    //   );
  },
  getOne: (req, res, next) => {
    User.findById(req.params.id)
      .then(user => res.status(200).json(user))
      .catch(e => res.status(500).json({ message: `Error getting user -> ${e}`}));
  },
  editUser: (req, res, next) => {
    const {
      username,
      firstName,
      lastName,
      email,
      seasonStarts,
      seasonEnds
    } = req.body;
    User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          seasonStarts: seasonStarts,
          seasonEnds: seasonEnds
        }
      },
      { new: true }
    )
      .exec()
      .then(user => {
        console.log(user);
        res.status(200).json(user);
      })
      .catch(e =>
        res.status(500).json({ message: `Error updating user -> ${e}` })
      );
  },
  deleteUser: (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'User removed' }))
      .catch(e =>
        res
          .status(500)
          .json({ message: `Error when trying to delete user -> ${e}` })
      );
  }


};
