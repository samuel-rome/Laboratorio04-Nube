const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 5000');
});

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { nombreCliente: 'Samuel', apellidoCliente: 'Romero', codigoCliente: '4123' },
    { nombreCliente: 'Raul', apellidoCliente: 'Garay', codigoCliente: '1234'  }, 
    { nombreCliente: 'Milton',  apellidoCliente: 'Guzman', codigoCliente: '6542'  }
  ];
  res.render('clientes', { clientes });
});

// Ruta de productos
app.get('/productos', (req, res) => {
  const productos = [
    { nombreProducto: 'Monitor', precioProducto: 800, marcaProducto: 'Samsung' },
    { nombreProducto: 'Computadora', precioProducto: 3500, marcaProducto: 'HP' },
    { nombreProducto: 'Mouse', precioProducto: 20, marcaProducto: 'Logitech' }
  ];
  res.render('productos', { productos });
});