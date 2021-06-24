import express, {Request, Response, NextFunction} from "express";
import "reflect-metadata";
import "express-async-errors"

import {router} from './routes'

import "./database";

const app = express();
app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
  if (err instanceof Error) { // aqui, nós verificamos se o erro recebido, é uma instancia de Error, para pegarmos somente os erros que nós criamos com o new Error('...')
    return response.status(400).json({
      error: err.message
    })
  }else{ // se for qualquer outro tipo de erro não criado por nós
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error"
    })
  }
})

app.listen(3000, () => {
  console.log("Server started!");
});
