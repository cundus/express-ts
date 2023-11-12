import User from "../models/user";

class UserServices {
   async create(body: any) {
      await User.create(body);

      return true;
   }
}

export default new UserServices();
