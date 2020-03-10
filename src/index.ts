import { Server } from '@hapi/hapi';
import { userRoute } from './routes/users';

const server: Server = new Server({
    port: 4000,
    host: 'localhost',
    address: '0.0.0.0', // listen on all - because why not?!
    router: {
        stripTrailingSlash: true
    }
});

server.realm.modifiers.route.prefix = '/example-service';

const init = async () => {
    server.route(userRoute);

    await server.start();

    console.log(`Server running @ ${server.info.uri}`);
    console.log('Happy hacking! 💣')
};

init();