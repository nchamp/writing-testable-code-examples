import { UserController } from '../src/controllers/better-user-controller';
import { Request, ResponseToolkit } from '@hapi/hapi';

const mockUserRepo = {
    getUsers: jest.fn()
};

jest.mock('../src/repos/user-repo', () => mockUserRepo);

describe('UserController', () => {
    let controller: UserController, mockRequest: Request, mockResponseToolkit: ResponseToolkit;
    beforeEach(() => {
        mockUserRepo.getUsers.mockReset()
        controller = new UserController(mockUserRepo);
    });

    describe('handleGetUsers()', () => {
        test('should return users', async () => {
            const expectedUsers = [
                { name: 'George Jetson' },
                { name: 'Homer Simpson' },
                { name: 'Peter Griffin' }
            ];

            mockUserRepo.getUsers.mockResolvedValueOnce(expectedUsers);

            // @ts-ignore
            mockResponseToolkit = { response: jest.fn(response => ({ status: 200, response })) };

            const result = await controller.handleGetUsers(mockRequest, mockResponseToolkit);

            expect(result).toEqual({ status: 200, response: { users: expectedUsers } });

            expect(mockUserRepo.getUsers).toHaveBeenCalledWith();
            expect(mockUserRepo.getUsers).toHaveBeenCalledTimes(1);

            expect(mockResponseToolkit.response).toHaveBeenCalledWith({ users: expectedUsers });
            expect(mockResponseToolkit.response).toHaveBeenCalledTimes(1);
        });
    });
});