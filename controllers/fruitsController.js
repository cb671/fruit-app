const FruitModel = require("../models/FruitModel");

const showAllFruits = async (req, res) => {
    try {
        const fruits = await FruitModel.showAllFruits();
        res.status(200).send(fruits);
    } catch(err) {
        res.status(500).send({ error: "Server error" });
    }
}

const showFruit = async (req, res) => {
    const name = req.params.name.toLowerCase();
	
    try {
        const fruit = await FruitModel.showFruit(name);
        res.status(200).send(fruit);
    } catch(err) {
	    res.status(404).send({error: err})
    }
}

const createFruit = async (req, res) => {
    try {
        const newFruit = await FruitModel.create(req.body);
        res.status(201).send(newFruit);
    } catch (err) {
        res.status(409).send({ error: err});
    }
};

const deleteFruit = async (req, res) => {
    try {
        const deletedFruit = await FruitModel.delete(req.params.name);
        res.status(200).send(deletedFruit);
    } catch (err) {
        res.status(404).send({ error: err });
    }
}

const putFruit = async (req, res) => {
    try {
        const updatedFruit = await FruitModel.put(req.params.name, req.body);
        res.status(200).send(updatedFruit);
    } catch (err) {
        res.status(404).send({ error: err });
    }
};

const patchFruit = async (req, res) => {
    try {
        const updatedFruit = await FruitModel.patch(req.params.name, req.body);
        res.status(200).send(updatedFruit);
    } catch (err) {
        res.status(404).send({ error: err });
    }
};


module.exports = {showAllFruits, showFruit, createFruit, deleteFruit, putFruit, patchFruit}