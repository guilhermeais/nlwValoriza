import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UserRepositories);

    // Verificar se o email existe
    const user = await userRepositories.findOne({ email });
   
    if (!user) {
      throw new Error("Email/Password is incorrect!");
    }

    // Verificar se a senha está correta usando o compare do bcrypt, que pega a senha que o usúario inseriu no sistema, com a senha que ele criptografou e ver se estão iguais
    const passwordMatch = await compare(password, user.password);
    
    if (!passwordMatch) {
      throw new Error("Email/Password is incorrect!");
    }

    // Gerar e retornar o token
    const token = sign(
      {
        email: user.email,
      },
      "3512ef018fd65024416d38855ee92ce3",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

   

    return token;
  }
}

export { AuthenticateUserService };
