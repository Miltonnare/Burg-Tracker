const express=require('express');
const router = express.Router();


const bugController = require('../controllers/bugController');

router.post('/', bugController.createBug);
router.get('/',bugController.getAllBugs);
router.get('/project/:projectId', bugController.getBugsByProject);
router.get('/:id', bugController.getBug);

module.exports=router;
