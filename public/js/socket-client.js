
// ? Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lnlOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();


socket.on('connect', () => {
    lnlOffline.style.display = 'none';
    lblOnline.style.display = '';
})

socket.on('disconnect', () => {
    lblOnline.style.display = 'none';
    lnlOffline.style.display = '';
})

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '1231c',
        fecha: new Date()
    }
    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id)
    } );

})

socket.on('enviar-mensaje', ( payload ) => {
    console.log( payload )
})