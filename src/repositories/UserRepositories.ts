import { EntityRepository, Repository } from "typeorm" // importamos o decorator entitiyRepository e a classe Repository, na qual vem com vários métodos disponíveis para manipulação da nossa entidade
import { User } from "../entities/User"

@EntityRepository(User) // aqui dizemos que esse repositório é da entidade user
class UserRepositories extends Repository<User>{ // criamos o repositório e extendemos o Repository, passando o tipo User para o Repository
   
}

export {UserRepositories}