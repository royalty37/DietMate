const LOSE_WEIGHT_FAST_GOAL = 0;
const LOSE_WEIGHT_GOAL = 1;
const MAINTAIN_WEIGHT = 2;
const GAIN_WEIGHT_GOAL = 3;
const GAIN_WEIGHT_FAST_GOAL = 4;

const MALE = 0;
const FEMALE = 1;

class Diet {
    constructor(dietGoal, age, gender, height, weight, activityLevel, weightlifter, overweight, protein, carbs, fat, calories, foods) {
        this.dietGoal = dietGoal;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.activityLevel = activityLevel;
        this.weightlifter = weightlifter;
        this.overweight = overweight;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
        this.calories = calories;
    }

    get dietGoal() {
        return this.dietGoal;
    }

    set dietGoal(dietGoal) {
        this.dietGoal = dietGoal;
    }

    get age() {
        return this.age;
    }

    set age(age) {
        this.age = age;
    }

    get gender() {
        return this.gender;
    }

    set gender(gender) {
        this.gender = gender;
    }

    get height() {
        return this.height;
    }

    set height(height) {
        this.height = height;
    }

    get weight() {
        return this.weight;
    }

    set weight(weight) {
        this.weight = weight;
    }

    get activityLevel() {
        return this.activityLevel;
    }

    set activityLevel(activityLevel) {
        this.activityLevel = activityLevel;
    }

    get weightlifter() {
        return this.weightlifter;
    }

    set weightlifter(weightlifter) {
        this.weightlifter = weightlifter;
    }

    get overweight() {
        return this.overweight;
    }

    set overweight(overweight) {
        this.overweight = overweight;
    }

    get protein() {
        return this.protein;
    }

    set protein(protein) {
        this.protein = protein;
    }

    get carbs() {
        return this.carbs;
    }

    set carbs(carbs) {
        this.carbs = carbs;
    }

    get fat() {
        return this.fat;
    }

    set fat(fat) {
        this.fat = fat;
    }

    get calories() {
        return this.calories;
    }

    set calories(calories) {
        this.calories = calories;
    }

    get foods() {
        return this.foods;
    }

    set foods(foods) {
        this.foods = foods;
    }

    static get LOSE_WEIGHT_FAST_GOAL() {
        return LOSE_WEIGHT_FAST_GOAL;
    }

    static get LOSE_WEIGHT_GOAL() {
        return LOSE_WEIGHT_GOAL;
    }

    static get MAINTAIN_WEIGHT() {
        return MAINTAIN_WEIGHT;
    }

    static get GAIN_WEIGHT_GOAL() {
        return GAIN_WEIGHT_GOAL;
    }

    static get GAIN_WEIGHT_FAST_GOAL() {
        return GAIN_WEIGHT_FAST_GOAL;
    }

    static get MALE() {
        return MALE;
    }

    static get FEMALE() {
        return FEMALE;
    }
}