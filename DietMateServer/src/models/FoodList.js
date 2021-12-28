const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    calories: {  
        type: Number,
        required: true,
    },
    protein: {  // grams
        type: Number,
        required: true,
    },
    carbs: {  // grams
        type: Number,
        required: true,
    },
    fat: {  // grams
        type: Number,
        required: true,
    },
});

const foodListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    foods: [foodSchema],
});

mongoose.model('FoodList', foodListSchema);