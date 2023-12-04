import express from "express";
import { createNewEmployee, deleteEmployee, getAllEmployees, getEmployee, updateEmployee } from "../../controllers/employeeController.js";
export const router = express.Router();
import { ROLES_LIST } from "../../config/roles_list.js";
import { verifyRoles } from "../../middleware/verifyRoles.js";

router.route('/')
    .get(getAllEmployees) // Every user can access
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), createNewEmployee) // Editors and admins can create/post
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), updateEmployee) // Editors and admins can update/put
    .delete(verifyRoles(ROLES_LIST.Admin), deleteEmployee); // only Admins can delete

router.route('/:id')
    .get(getEmployee)