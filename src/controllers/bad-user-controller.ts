import { UserRepo } from '../repos/user-repo';
import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';

export class UserController {
    private userRepo: UserRepo;

    constructor() {
        this.userRepo = new UserRepo();
    }

    async handleGetUsers (req: Request, res: ResponseToolkit): Promise<ResponseObject> {
        const users = await this.userRepo.getUsers();
        return res.response({ users })
    }
}