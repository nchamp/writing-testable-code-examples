import { UserController } from '../../controllers/bad-user-controller';
import { Request, ResponseToolkit } from '@hapi/hapi';

const controller = new UserController();

export const userRoute = {
    method: 'GET',
    path: '/users',
    handler: (req: Request, res: ResponseToolkit) => controller.handleGetUsers(req, res)
};
