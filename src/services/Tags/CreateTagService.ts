import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../../repositories/TagsRepositories"


class CreateTagService {
    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if (!name) {
            throw new Error("Name cannot be empty!")
        }

        // verificar se há um tag com o mesmo nome
        const tagAlreadyExists = await tagsRepositories.findOne({name})
        if (tagAlreadyExists) {
            throw new Error("Tag already exists!")
        }

        // se estiver tudo ok, criamos uma tag nova
        const tag = tagsRepositories.create({
            name
        })
        // salvamos
        await tagsRepositories.save(tag)
        // e a retornamos
        return tag

    }
}

export { CreateTagService }