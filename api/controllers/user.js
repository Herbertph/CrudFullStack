import { db } from '../db.js';

/**
 * Retrieve a list of all users from the database.
 *
 * @async
 * @function
 * @param {Object} _ - Request object. Not used in this function.
 * @param {Object} res - Response object to send the data.
 * @returns {Object} JSON response with the list of users or an error message.
 */
export const getUsers = (_, res) => {
    const query = 'SELECT * FROM users';

    db.query(query, (err, data) => {
        if (err) return res.status(500).json({ message: 'Database query error' });

        return res.status(200).json(data);
    });
};

/**
 * Add a new user to the database.
 *
 * @async
 * @function
 * @param {Object} req - Request object containing user data.
 * @param {Object} res - Response object to send the data.
 * @returns {Object} JSON response with the status of the operation or an error message.
 */
export const addUser = (req, res) => {
    const q = 'INSERT INTO users SET ?';

    const values = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        birthdate: req.body.birthdate,
    };

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json({ message: 'Database query error: ' + err.message });

        return res.status(200).json(data);
    });
};

/**
 * Update a user's data in the database.
 *
 * @async
 * @function
 * @param {Object} req - Request object containing user data and ID.
 * @param {Object} res - Response object to send the data.
 * @returns {Object} JSON response with the status of the operation or an error message.
 */
export const updateUser = (req, res) => {
    const q = 'UPDATE users SET name = ?, email = ?, phone = ?, birthdate = ? WHERE id = ?';

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.birthdate,
        req.params.id,
    ];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json({ message: 'Database query error' });

        return res.status(200).json(data);
    });
};

/**
 * Delete a user from the database.
 *
 * @async
 * @function
 * @param {Object} req - Request object containing user ID.
 * @param {Object} res - Response object to send the data.
 * @returns {Object} JSON response with the status of the operation or an error message.
 */
export const deleteUser = (req, res) => {
    const q = 'DELETE FROM users WHERE id = ?';

    db.query(q, req.params.id, (err, data) => {
        if (err) return res.status(500).json({ message: 'Database query error' });

        return res.status(200).json(data);
    });
}
