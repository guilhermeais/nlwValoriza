import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization;

 
  // Validar se o token está preenchido
  if (!authToken) {
    return response.status(401).json({error:"Unauthorized"});
  }

  const token = authToken.split(" ")[1]; // separamos o token do Bearer

  try {
    // decodificamos o token, esse verify irá descryptografar o token, e no caso, a informações que inserimos nele foi o email do usuário, o sub(o id do usuário), depois o iat(quando foi gerado), exp(quando vai expirar)
    const { sub } = verify(token, "3512ef018fd65024416d38855ee92ce3") as IPayload;

    request.user_id = sub;
  } catch (error) {
    return response.status(401).json({error:"Unauthorized"});
  }

  return next();
}
