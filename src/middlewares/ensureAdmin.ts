import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request; // pegamos o user_id que inserimos no nosso request, no middleware ensureAuthenticated
  const usersRepositories = getCustomRepository(UserRepositories);
  const {admin} = await usersRepositories.findOne(user_id);

  if (admin) {
    return next(); // se o usuário for admin, deixamos ele rodar um next, ou seja, proseguir a aplicação
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
