const server = require('../server');

describe( "Says hello", () => {
    test("helloMessage should return Hello, Server", () => {
        expect(server.helloMessage()).toEqual("Hello, Server");
    });
});