const User = require('../models/user');

class UserService {
  static async getAllUsers() {
    return await User.findAll();
  }

  static async getUserById(id) {
    return await User.findByPk(id);
  }

  static async createUser(data) {
    return await User.create(data);
  }

  static async updateUser(id, data) {
    const user = await User.findByPk(id);
    if (user) {
      await user.update(data);
      return user;
    }
    throw new Error('User not found');
  }

  static async deleteUser(id) {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      return user;
    }
    throw new Error('User not found');
  }
}

module.exports = UserService;

