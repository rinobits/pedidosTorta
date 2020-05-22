//

const express = require('express');
const app = express();
const Pedido = require('../models/datos');

app.get('/', (req, res) =>{
    res.render('index');
});
app.post('/', (req, res) => {
    console.log('POST /');
    body = req.body;
    console.log(body);
    let pedidos = new Pedido();              
    pedido.solicitante = body.solicitante;
    pedido.telefono = body.telefono;
    pedido.tipoMasa = body.tipoMasa.name;
    pedido.saborMasa = body.saborMasa.name;
    pedido.cobertura = body.cobertura.name;
    pedido.tamano = body.tamano.name;
    pedido.catacteristicas = body.catacteristicas;
    pedido.mensaje = body.mensaje;
    pedido.abono = body.abono;
    pedido.precio = body.precio;
    pedido.horaDrop = body.horaDrop;
    pedido.save((err, pedidoGuardado) => {
        if(err) res.status(500).send({message: `Error guardando en BD ${err}`});
        //res.status(200).redirect(request.get('/reload'));
        res.status(200).send("DONE");
        
    });
});

module.exports = app;