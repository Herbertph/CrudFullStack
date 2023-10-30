import express from 'express';
import { getUsers, addUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

/**
 * @swagger
 * paths:
 *  /:
 *    get:
 *      summary: Retrieve a list of users
 *      description: Return a complete list of users from the database.
 *      responses:
 *        200:
 *          description: A list of users.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: integer
 *                      description: The user's ID
 *                    name:
 *                      type: string
 *                      description: The user's name
 *                    email:
 *                      type: string
 *                      description: The user's email
 */
router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
