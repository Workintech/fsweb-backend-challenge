//Imports
const router = require('express').Router();
const userModel = require('./users-model');

//Middlewares--


//Routers
router.get('/', async (req,res,next)=>{
  try {
    const usersDetail = await userModel.getAll();
    res.json(usersDetail);
  } catch (error) {
    next()
  }
})

router.get('/:id', async (req,res,next)=>{
  try {
    const usersDetail = await userModel.getById(req.params.id);
    res.json(usersDetail);
  } catch (error) {
    next()
  }
})


//4 Errors -- Server has an errorfunc for all

//5 Exports
module.exports=router;