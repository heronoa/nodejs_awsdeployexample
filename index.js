const express = require('express');

const server = express();

server.get('/', (Request, Response) => {
    return Response.json({message: 'Server is up!'})
})

server.listen(3333);