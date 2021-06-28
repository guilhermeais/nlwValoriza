import { Request, Response } from "express";
import { ListUserSendComlimentsService } from "../../services/Compliments/ListUserSendComplimentsService";


class ListUserSendComplimentsController{
    async handle(request: Request, response: Response){

        const {user_id} = request;
        const listUserSendComplimentsService = new ListUserSendComlimentsService();

        const compliments = await listUserSendComplimentsService.execute(user_id)

        return response.json(compliments)
    }
}

export { ListUserSendComplimentsController}