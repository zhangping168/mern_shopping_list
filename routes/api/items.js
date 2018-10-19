const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@route GET api/items
//@desc  Get all items
//@access public

router.get('/', (req, res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
})

//@route Post api/items
//@desc  Add new item
//@access public

router.post('/', (req, res)=>{
   const newItem = new Item({
        name:req.body.name
    });  
    newItem.save().then(item=>res.json(item));
    
})


//@route Delete api/items/:id
//@desc  Delete A Item
//@access public

router.delete('/:id', (req, res)=>{
   
    //find the item first
    Item.findById(req.params.id)
        .then(item=>item.remove()
            .then(()=>res.json({success:true}))
    
    )
    .catch(err=>res.status(404).json({success:false}));
     
 })
 

module.exports = router;