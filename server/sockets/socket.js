const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar información recibida desde cliente

    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje);

        //callback();
    })
});