import express from "express";
import { createNewEmployee, deleteEmployee, getAllEmployees, getEmployee, updateEmployee } from "../../controllers/employeeController.js";

export const router = express.Router();

// OG functions now in controllers/employeeController.js!
router.route('/')
    .get(getAllEmployees)
    .post(createNewEmployee)
    .put(updateEmployee)
    .delete(deleteEmployee);

router.route('/:id')
    .get(getEmployee)