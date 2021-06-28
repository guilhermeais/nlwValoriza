import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories";

class ListUserReceiveComlimentsService {
  async execute(user_id: string) {
    const comlimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await comlimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations:["userSender", "userReceiver", "tag"]
    });

    return compliments;
  }
}

export { ListUserReceiveComlimentsService };
