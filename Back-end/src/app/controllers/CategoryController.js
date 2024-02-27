import * as Yup from 'yup'
import Category from '../models/Category'
import User from '../models/User'

class CategoryController {
    async store(request, response){
        try{
            const schema = Yup.object().shape({
                name: Yup.string().required()
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            const { admin: isAdmin} = await User.findByPk(request.userId)

            if(!isAdmin) {
                return response.status(401).json()
            }

            const { name } = request.body

            const {filename: path} = request.file

            const categoryExists = await Category.findOne({ where: { name } })
            
            if(categoryExists){
                return response.status(400).json({ error: 'Category already exists' })
            }

            const id = await Category.create({ name, path })

            return response.json({ name, id: id.id})
        }catch(error){
            return response.status(400).json({ error: error.message})
        }
    }

    async index(request, response){
        const category = await Category.findAll()

        return response.json(category)
    }

    async update(request, response){
        try{
            const schema = Yup.object().shape({
                name: Yup.string()
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            const { admin: isAdmin} = await User.findByPk(request.userId)

            if(!isAdmin) {
                return response.status(401).json()
            }

            const { id } = request.params
            const categoryExists = await Category.findByPk(id)
            
            if(!categoryExists){
                return response.status(401).json({ error: 'Make sure your category id is correct' })
            }

            let path
            if(request.file){
                path = request.file.filename
            }

            const { name } = request.body
            await Category.update({ name, path }, {where: { id }})

            return response.status(200).json()
        }catch(error){
            return response.status(400).json({ error: error.message})
        }
    }
}

export default new CategoryController()