import {db} from '../db.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *         name:
 *           type: string
 *           description: The user's name.
 *         email:
 *           type: string
 *           description: The user's email address.
 *       example:
 *         id: 1
 *         name: John Doe
 *         email: john@example.com
 *
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users from the database.
 *     responses:
 *       200:
 *         description: A list of users was retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: An error occurred while trying to retrieve the users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: Database query error
 */
export const getUsers = (_, res) => {
    const query = 'SELECT * FROM users';

    db.query(query, (err, data) => {
        if (err) return res.status(500).json({message: 'Database query error'});

        return res.status(200).json(data);
    });
};
