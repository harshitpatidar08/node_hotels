const  express = require('express')
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async(req, res) => {
  try {
    const data = req.body
    const response = await MenuItem.insertMany(data);
    console.log('data saved');
    res.status(200).json(response);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: 'internal server error' });
  }
})

router.get('/' , async(req , res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch(err) {
         console.log(err);
    res.status(500).json({ error: 'internal server error' });
    }
})

router.get('/:taste' , async(req , res) =>{
  try{
    const taste = req.params.taste;
    if(taste == 'sour' || taste == 'spicy' || taste == 'sweet') {
      const response = await MenuItem.find({taste: taste });
      console.log('response fetched');
      res.status(200).json(response);
    } else{
      res.status(404).json({error : 'Invalid data type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({error : 'internal server error'});
  }
})


router.put('/:id' , async(req , res) =>{
  try{
    const MenuItemId = req.params.id;
    const updatedMenuItemData = req.body;
    const response = await MenuItem.findByIdAndUpdate( MenuItemId , updatedMenuItemData , {
      new: true,
      runValidators: true,
    })
    if(!response) {
      return res.status(404).json({error : 'MenuItem not found'});
    }
    console.log('data updated');
    res.status(200).json(response);
  } catch(err) {
    console.log(err);
    res.status(500).json({error : 'internal server error' });
  }
})

module.exports = router;