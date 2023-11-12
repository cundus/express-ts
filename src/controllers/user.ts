import { Request, Response } from "express";
import UserServices from "../services/user";

class UserController {
   async create(req: Request, res: Response) {
      try {
         const { body } = req;

         const createUser = await UserServices.create(body);

         console.log(createUser);

         res.json({
            message: "succes create user",
         });
      } catch (error) {
         console.log(error);
         res.status(500).json({
            message: "Error ",
         });
      }
   }
}

export default new UserController();
