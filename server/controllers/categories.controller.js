import Categories from '../models/categories.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => { 
    const category= new Categories(req.body) 
    try {
        await category.save()
        return res.status(200).json({ 
            message: "Successfully created category!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
        })
    } 
}
const list = async (req, res) => { 
	try {
	    let categories = await Categories.find().select('name') 
	    res.json(categories)
	} catch (err) {
	    return res.status(400).json({
	        error: errorHandler.getErrorMessage(err) 
	    })
	} 
}

const removeAll = async (req, res) => { 
    try {
        // remove all categories using mongoose
        let categories = await Categories.deleteMany({})
        res.json(categories)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
        })
    } 
}
export default { create, list, removeAll }
