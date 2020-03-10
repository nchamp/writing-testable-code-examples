import { UserController } from '../src/controllers/bad-user-controller';
import { Request, ResponseToolkit } from '@hapi/hapi';

describe('UserController', () => {
    let controller: UserController, mockRequest: Request, mockResponseToolkit: ResponseToolkit;
    beforeEach(() => {
        controller = new UserController();
    });

    describe('handleGetUsers()', () => {
        test('should return users', async () => {
            const expectedResponse = {
                users: [
                    { name: 'Fred Flinstone' },
                    { name: 'Wilma Flinstone' },
                    { name: 'Barney Rubble' }
                ]
            };

            // @ts-ignore
            mockResponseToolkit = { response: jest.fn(response => ({ status: 200, response })) };

            const result = await controller.handleGetUsers(mockRequest, mockResponseToolkit);

            expect(result).toEqual({ status: 200, response: expectedResponse });
            expect(mockResponseToolkit.response).toHaveBeenCalledWith(expectedResponse);
            expect(mockResponseToolkit.response).toHaveBeenCalledWith(expectedResponse);
            expect(mockResponseToolkit.response).toHaveBeenCalledTimes(1);
        });
    });
});