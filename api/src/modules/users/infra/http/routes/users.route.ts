import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import Joi from '@hapi/joi';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();


usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
