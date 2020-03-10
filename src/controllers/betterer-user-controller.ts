import { UserFetcher } from '../repos/better-user-repo';
import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';

export class UserController {
    private userRepo: UserFetcher;

    constructor(userRepo: UserFetcher) {
        this.userRepo = userRepo;
    }

    async handleGetUsers (req: Request, res: ResponseToolkit): Promise<ResponseObject> {
        const users = await this.userRepo.getUsers();
        return res.response({ users })
    }
}