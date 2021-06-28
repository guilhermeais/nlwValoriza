import { Request, response, Response } from "express";
import { CreateComplimentService } from "../../services/Compliments/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, reponse: Response) {
    const { user_receiver, tag_id, message } = request.body; // o id do usuário já vamos obter direto do nosso token
    const {user_id} = request

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    return reponse.json(compliment);
  }
}

export { CreateComplimentController };
