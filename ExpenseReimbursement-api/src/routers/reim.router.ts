import express from 'express';
import * as rDao from '../daos/sql-reim.doa';
//import { authMiddleware } from '../middleware/auth.middleware';

export const reimRouter = express.Router();

reimRouter.get('', 
    async (req, res) => {
        console.log('reim');
        const reims = await rDao.findAll();
        res.json(reims);
    });


/**
 * /users/:id
 * find user by some id
 */
reimRouter.get('/author/userId/:userId', async (req, res) => {
    const reim = await rDao.findByAuthorId(+req.params.userId);
    res.json(reim);
});

/**
 * /users/status/:statusID
 */
reimRouter.get('/status/:statusId', async (req, res) => {
    const status = req.params.statusId;
    const reims = await rDao.findByStatusId(status);
    res.json(reims);
});

/**
 * /users
 * create new user resource
 */
reimRouter.post('', async (req, res) => {
    const reim = req.body;
    if (!reim) {
        res.sendStatus(400);
    } else {
        const id = await rDao.save(reim);
        if (!id) {
            res.sendStatus(400);
        } else {
            reim.id = id;
            res.status(201); // created status code
            res.json(reim);
        }
    }
});

/**
 * /users
 * partially update user resource
 */
reimRouter.patch('', async (req, res) => {
    // const userId = req.body.id;
    // const currentLoggedInUser = req.session.user;
    // if (currentLoggedInUser && currentLoggedInUser.id === userId) {
        const updatedUser = await rDao.update(req.body);
        res.json(updatedUser);
    // } else {
    //     res.sendStatus(403);
    // }
});

/**
 * /users/:id
 * find user by some id
 */
reimRouter.get('/:id', async (req, res) => {
    const reim = await rDao.findById(+req.params.id);
    res.json(reim);
});

