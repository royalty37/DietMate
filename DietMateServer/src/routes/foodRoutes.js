const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const FoodList = mongoose.model('FoodList');

const router = express.Router();

router.use(requireAuth);

router.get('/foodlist', async (req, res) => {
    const foodlist = await FoodList.findOne({ userId: req.user._id });
    res.send(foodlist);
});

router.post('/foodlist', async (req, res) => {
    const { foodlist } = req.body;

    if (!foodlist) {
        return res.status(422).send({ error: 'Must provide foodlist' });
    }
    
    const foodlistToSave = new FoodList({ userId: req.user._id, foodlist });
    await foodlistToSave.save();
    res.send(foodlistToSave);
});