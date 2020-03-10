export interface UserFetcher {
    getUsers(): Promise<object[]>
}

class UserRepo implements UserFetcher {
    getUsers(): Promise<object[]> {
        const users = [
            { name: 'Fred Flinstone' },
            { name: 'Wilma Flinstone' },
            { name: 'Barney Rubble' }
        ];

        return Promise.resolve(users)
    }
}