export interface UserFetcherInterface {
    getUsers(): Promise<object[]>
}

class UserRepo implements UserFetcherInterface {
    getUsers(): Promise<object[]> {
        const users = [
            { name: 'Fred Flinstone' },
            { name: 'Wilma Flinstone' },
            { name: 'Barney Rubble' }
        ];

        return Promise.resolve(users)
    }
}