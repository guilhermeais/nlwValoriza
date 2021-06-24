import {Request, Response, NextFunction} from "express"

export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    //verificar se o usuário é admin. 
    const admin = true; // como ainda não temos um jwt do usuário, vamos criar essa constante admin fixa em true

    if (admin) {
        return next // se o usuário for admin, deixamos ele rodar um next, ou seja, proseguir a aplicação
    }

    return response.status(401).json({ 
        error: "Unauthorized"
    })
}