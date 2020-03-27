var socket = io();

//Escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

//Emitir información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function() {
    console.log('Se disparó el callback');
})

//Escuchar info

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})