import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories";

class ListUserSendComlimentsService {
  async execute(user_id: string) {
    const comlimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await comlimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
      relations:["userSender", "userReceiver", "tag"]
    });

    return compliments;
  }
}

export { ListUserSendComlimentsService };
