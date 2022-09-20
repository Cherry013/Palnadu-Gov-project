const express = require('express');
const mysql = require('mysql2');
const connection = require('../connection');
const Router = express.Router();
//Secratariet 


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


Router.get('/getdata/:SecNumber', (req, res) => {
    SECRETARIAT_CODE = req.params.SecNumber;
    SerialNumberQuery = `SELECT SerialNumber FROM secretariatsconstituencymandalwise WHERE SECRETARIAT_CODE = '${SECRETARIAT_CODE}'`
    connection.query(SerialNumberQuery, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            SerialNumber = result[0].SerialNumber;
            var sql = `SELECT * FROM workdetails WHERE SerialNumber = ${SerialNumber}`
            console.log(SerialNumber);
            connection.query(sql, (err, Result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(Result[0]);
                }
            });
        }
    });

});


module.exports = Router;
