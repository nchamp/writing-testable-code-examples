import { UserController } from '../src/controllers/betterer-user-controller';
import { UserFetcher } from '../src/repos/better-user-repo'
import { Request, ResponseToolkit } from '@hapi/hapi';

class MockUserRepo implements UserFetcher {
    getUsers(): Promise<object[]> {
        return Promise.resolve([
            { name: 'Homer Simpson' },
            { name: 'Ned Flanders'},
            { name: 'Montgomery Burns' }
        ]);
    };
}

describe('UserController', () => {
    let controller: UserController, mockRequest: Request, mockResponseToolkit: ResponseToolkit;
    beforeEach(() => {
        controller = new UserController(new MockUserRepo());
    });

    describe('handleGetUsers()', () => {
        test('should return users', async () => {
            const expectedUsers = [
                { name: 'Homer Simpson' },
                { name: 'Ned Flanders'},
                { name: 'Montgomery Burns' }
            ];

            // @ts-ignore
            mockResponseToolkit = { response: jest.fn(response => ({ status: 200, response })) };

            const result = await controller.handleGetUsers(mockRequest, mockResponseToolkit);

            expect(result).toEqual({ status: 200, response: { users: expectedUsers } });

            expect(mockResponseToolkit.response).toHaveBeenCalledWith({ users: expectedUsers });
            expect(mockResponseToolkit.response).toHaveBeenCalledTimes(1);
        });
    });
});