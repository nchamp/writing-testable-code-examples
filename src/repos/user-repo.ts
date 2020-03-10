export class UserRepo {
    getUsers(): Promise<object[]> {
        const users = [
            { name: 'Fred Flinstone' },
            { name: 'Wilma Flinstone' },
            { name: 'Barney Rubble' }
        ];

        return Promise.resolve(users)
    }
}