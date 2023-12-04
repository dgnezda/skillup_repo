import express from "express";
import employees from "../../data/employees.json" assert { type: "json"};
const __dirname = import.meta.dirname; 

export const router = express.Router();

const data = {};
data.employees = employees;

router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        res.json({
            "name": req.body.name,
            "occupation": req.body.occupation
        })
    })
    .put((req, res) => {
        res.json({
            "name": req.body.name,
            "occupation": req.body.occupation
        })
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id });
    })