const { json } = require('express');
let mysql = require('../../../Creacion_api/bd/mysql')
module.exports = {
    listar: (req,res) => {
        mysql.query(' select * from datos ',function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
            
        })
    },
    mostrarId : (req,res) => {
        let id = req.params.id;
        console.log(' buscando ' + id);
        mysql.query(' select * from datos where id =  ' + id ,function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        })
    },

    eliminarId : (req,res) => {
        let id = req.params.id;
        console.log('Eliminando ' + id);
        mysql.query ('delete from datos where id = ' + id, function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        }) 
    },

    agregar: (req,res) => {
        console.log(req.body);
        let edad = req.body.edad;
        let nombre = req.body.nombre;
        console.log("insert into datos (nombre,edad) values('"+nombre+"',"+edad+")")
        mysql.query ("insert into datos (nombre,edad) values('"+nombre+"',"+edad+")",  function (error, results, fields) {
            if (error) res.json(error)
            else {
                res.json(results)
            }
        }) 
        
    }
    
};