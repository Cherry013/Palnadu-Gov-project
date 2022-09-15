const express = require('express');
const mysql = require('mysql2');
const connection = require('../connection');
const Router = express.Router();

//Secratariet 

Router.get('/', (req, res) => {
    res.send({ Message: "Connection Done!" })
});
Router.post('/Survey', (req, res) => {
    Details = req.body;
    res.send(Details.Email);
});
Router.post('/Login', (req, res) => {
    Login = req.body;
    console.log(Login)
    sql = `select * from secretariatsconstituencymandalwise where SECRETARIAT_CODE = ${Login.Username}`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.send({
                Message: "Connection Failed!",
                err: err
            });
        }
        else {
            console.log(result);
            res.send(result[0]);
        }
    });
});


Router.get('/RecievedData', (req, res) => {
    res.send({ Message: "Working!" })
});



Router.post('/RecievedData', (req, res) => {
    data = req.body;
    connection.query(`INSERT INTO data VALUES('${data.Name}','${data.Age}','${data.Gender}','${data.Father_Name}','${data.Guardian}','${data.Mother_Name}','${data.Cast}','${data.Religion}','${data.Father_Work}','${data.Mother_Work}','${data.MentallyRetired}','${data.DeafandDumb}','${data.InheritedDisabilities}','${data.PovertyandMalnutration}','${data.Physicallyhandycapped}','${data.Type_of_Work}','${data.StudiedClass}','${data.SchoolAddress}','${data.NearestSchool}','${data.AdmittedClass}','${data.child}','${data.LivingRequirement}','${data.Aadhar}','${data.Ration}','${data.SECRETARIAT_CODE}','${data.MANDAL}'
        )` , (err, result) => {
        if (err) {
            res.send({
                Message: "Connection Failed!",
                err: err
            });
        }
        else {
            res.send({ Message: "Insert Success" })
        }
    });
});



// ................get data.module............................


Router.get('/getdata/:Anyvar/:begging/', (req, res) => {
    var data = req.params.Anyvar;
    console.log(data)
    var begging = req.params.begging;
    console.log(begging)
        sql = `SELECT COUNT(Type_of_Work) as begging FROM data WHERE Type_of_Work = "${begging}" and MANDAL = "${data}";`
        connection.query(sql, (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            else {
                res.send(result[0])
            }
        });
});


module.exports = Router;