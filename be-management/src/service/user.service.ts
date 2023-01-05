import User from "../model/user.model";
import { IUser } from "../types";
export const createUser = async (name: string, password: string) => {
  const res = await User.create({ name, password });
  return res.dataValues;
};
export const getUserInfo = async ({ name }: IUser) => {
  const whereOpt = {};
  name && Object.assign(whereOpt, { name });
  const res = await User.findOne({
    attributes: ["id", "name", "password", "rank"],
    where: whereOpt,
  });
  return res ? res.dataValues : null;
};
