const LOSE_WEIGHT_FAST = 0;
const LOSE_WEIGHT = 1;
const MAINTAIN_WEIGHT = 2;
const GAIN_WEIGHT = 3;
const GAIN_WEIGHT_FAST = 4;

const SEDENTARY = 0;
const LIGHTLY_ACTIVE = 1;
const MODERATELY_ACTIVE = 2;
const ACTIVE = 3;
const VERY_ACTIVE = 4;
const EXTREMELY_ACTIVE = 5;

const MALE = 0;
const FEMALE = 1;

// Diet class contains all information and logic related to a users diet 
class Diet {
    // Constructor assigns all user input information and uses this information to generate nutritional information
    constructor(dietGoal, age, gender, height, weight, activityLevel, isWeightlifter, isOverweight) {
        this.dietGoal = dietGoal;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.activityLevel = activityLevel;
        this.isWeightlifter = isWeightlifter;
        this.isOverweight = isOverweight;
        
        this.calcCalories();
        this.calcProtein();
        this.calcFat();
        this.calcCarbs();
    };

    // Calculate calorie intake for diet
    calcCalories() {
        let genderS = (this.gender === MALE) ? 5 : -161;
        let bmr = 10 * this.weight+6.25*this.height-5*this.age+genderS;

        let activityLevelCalories = 0;
        switch (this.activityLevel) {
            case SEDENTARY:
                activityLevelCalories =  bmr * 1.2;
                break;
            case LIGHTLY_ACTIVE:              
                activityLevelCalories =  bmr * 1.37;
                break;
            case MODERATELY_ACTIVE:
                activityLevelCalories =  bmr * 1.46;
                break;
            case ACTIVE:
                activityLevelCalories =  bmr * 1.54;
                break;
            case VERY_ACTIVE:
                activityLevelCalories =  bmr * 1.72;
                break;
            case EXTREMELY_ACTIVE:
                activityLevelCalories =  bmr * 1.89;
        };

        switch (this.dietGoal) {
            case LOSE_WEIGHT_FAST:
                this.calories = (activityLevelCalories - 1000).toFixed(1);
                break;
            case LOSE_WEIGHT:
                this.calories = (activityLevelCalories - 500).toFixed(1);
                break;
            case MAINTAIN_WEIGHT:
                this.calories = (activityLevelCalories).toFixed(1);
                break;
            case GAIN_WEIGHT:
                this.calories = (activityLevelCalories + 500).toFixed(1);
                break;
            case GAIN_WEIGHT_FAST:
                this.calories = (activityLevelCalories + 1000).toFixed(1);
        };
    };

    // Calculate protein intake for diet
    calcProtein() {
        if (this.isOverweight === true) {
            if (this.isWeightlifter === true) 
                this.protein = (1.4 * this.weight).toFixed(1);
            else
                this.protein = (0.8 * this.weight).toFixed(1);
        } else {
            if (this.isWeightlifter === true) {
                if (this.dietGoal === LOSE_WEIGHT || this.dietGoal === LOSE_WEIGHT_FAST)
                    this.protein = (1.8 * this.weight).toFixed(1);
                else
                    this.protein = (1.6 * this.weight).toFixed(1);
            } else {
                if (this.activityLevel == SEDENTARY)
                    this.protein = (0.8 * this.weight).toFixed(1);
                else if (this.activityLevel == VERY_ACTIVE || this.activityLevel == EXTREMELY_ACTIVE)
                    this.protein = (1.2 * this.weight).toFixed(1);
                else
                    this.protein = (1.0 * this.weight).toFixed(1);
            };
        };
    };

    // Calculate fat intake for diet
    calcFat() {
        this.fat = (this.weight * 0.85).toFixed(1);
    };

    // Calculate Carbohydrate intake for diet
    calcCarbs() {
        this.carbs = ((this.calories - this.protein * 4 - this.fat * 9) / 4).toFixed(1);
    };

    // generateDiet method generates an array of foods and returns in based on nutritional information and foods input
    // Takes in an array of foods and returns an array of foods
    // Takes in an array to account for future ability to add custom foods or set preferences
    generateDiet(foods) {
        let diet = [];
        let remainingProtein = this.protein;
        let remainingFat = this.fat;
        let remainingCarbs = this.carbs;

        for (let i = 0; i < foods.length; i++) {
            let food = foods[i];

            if (food.protein <= remainingProtein && food.fat <= remainingFat && food.carbs <= remainingCarbs) {
                diet.push(food);
                remainingProtein -= food.protein;
                remainingFat -= food.fat;
                remainingCarbs -= food.carbs;
            }
        };

        this.foods = diet;
    };

    // Prints out all nutritional information for diet for debugging purposes
    printDiet() {
        console.log("Diet Goal: " + this.dietGoal);
        console.log("Age: " + this.age);
        console.log("Height: " + this.height);
        console.log("Weight: " + this.weight);
        console.log("Activity Level: " + this.activityLevel);
        console.log("Is Weightlifter: " + this.isWeightlifter);
        console.log("Is Overweight: " + this.isOverweight);
        console.log("Calories: " + this.calories);
        console.log("Protein: " + this.protein);
        console.log("Fat: " + this.fat);
        console.log("Carbs: " + this.carbs);
    };

    // Getters and Setters for all ...fields?
    // get dietGoal() {
    //     return this.dietGoal;
    // }

    // set dietGoal(dietGoal) {
    //     this.dietGoal = dietGoal;
    // }

    // get age() {
    //     return this.age;
    // }

    // set age(age) {
    //     this.age = age;
    // }

    // get gender() {
    //     return this.gender;
    // }

    // set gender(gender) {
    //     this.gender = gender;
    // }

    // get height() {
    //     return this.height;
    // }

    // set height(height) {
    //     this.height = height;
    // }

    // get weight() {
    //     return this.weight;
    // }

    // set weight(weight) {
    //     this.weight = weight;
    // }

    // get activityLevel() {
    //     return this.activityLevel;
    // }

    // set activityLevel(activityLevel) {
    //     this.activityLevel = activityLevel;
    // }

    // get weightlifter() {
    //     return this.weightlifter;
    // }

    // set weightlifter(weightlifter) {
    //     this.weightlifter = weightlifter;
    // }

    // get overweight() {
    //     return this.overweight;
    // }

    // set overweight(overweight) {
    //     this.overweight = overweight;
    // }

    // get protein() {
    //     return this.protein;
    // }

    // set protein(protein) {
    //     this.protein = protein;
    // }

    // get carbs() {
    //     return this.carbs;
    // }

    // set carbs(carbs) {
    //     this.carbs = carbs;
    // }

    // get fat() {
    //     return this.fat;
    // }

    // set fat(fat) {
    //     this.fat = fat;
    // }

    // get calories() {
    //     return this.calories;
    // }

    // set calories(calories) {
    //     this.calories = calories;
    // }

    // get foods() {
    //     return this.foods;
    // }

    // set foods(foods) {
    //     this.foods = foods;
    // }
}

export default Diet;