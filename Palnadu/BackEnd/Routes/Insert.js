const express = require('express');
const connection = require('../connection');
const mysql = require('mysql2');
const Router = express.Router();


Router.post('/Details', (req, res) => {
    Details = req.body;
    SerialKeyQuery = `SELECT SerialNumber FROM secretariatsconstituencymandalwise where SECRETARIAT_CODE = '${Details.SECRETARIAT_CODE}'`
    connection.query(SerialKeyQuery, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            Details = Object.assign(Details, result[0]);
            Connection_to_Work = `select Connection_to_Work from PrimaryDetails where Connection_to_Work = (select max(Connection_to_Work) from PrimaryDetails)`
            connection.query(Connection_to_Work, (err, result) => {
                if (err) {
                    res.send(err)
                }
                else {
                    Details = Object.assign(Details, result[0]);
                    PrimaryDetails = `INSERT INTO PrimaryDetails VALUES(${Details.Connection_to_Work + 1},'${Details.Name}','${Details.Age}','${Details.Father_Name}','${Details.Mother_Name}','${Details.Guardian}','${Details.Gender}',${Details.SerialNumber})`;
                    connection.query(PrimaryDetails, (err, result) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            WorkDetails = `INSERT INTO WorkDetails VALUES('${Details.Father_Work}','${Details.Mother_Work}','${Details.Cast}','${Details.Religion}','${Details.Type_of_Work}',${Details.Connection_to_Work + 1},${Details.SerialNumber})`
                            connection.query(WorkDetails, (err, result) => {
                                if (err) {
                                    res.send(err)
                                }
                                else {
                                    StudyDetails = `INSERT INTO  studydetails VALUES(${Details.SerialNumber},'${Details.SchoolJoined}','${Details.StudiedClass}','${Details.ClasstobeAdmitted}','${Details.Nearest_School}',${Details.Connection_to_Work + 1})`;
                                    connection.query(StudyDetails,(err,result)=>{
                                        if(err){
                                            res.send(err);
                                        }
                                        else{
                                            disabilityDetails = `INSERT INTO disability VALUES(${Details.Connection_to_Work + 1},${Details.SerialNumber},'${Details.MentallyRetired}','${Details.DeafandDumb}','${Details.InheritedDisabilities}','${Details.PovertyandMalnutration}','${Details.Physicallyhandycapped}')`;
                                            connection.query(disabilityDetails,(err,result)=>{
                                                if(err){
                                                    res.send(err);
                                                }
                                                else{
                                                    RequirementsDetails = `INSERT INTO requirements VALUES('${Details.Ration}','${Details.Aadhar}','${Details.LivingRequirements}',${Details.SerialNumber},${Details.Connection_to_Work + 1})`;
                                                    connection.query(RequirementsDetails,(err,result)=>{
                                                        res.send({
                                                            Message: "All the Tables are inserted successfully.",
                                                            Connection_to_Work: Details.Connection_to_Work + 1
                                                        })
                                                    });
                                                }
                                            })
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });

        }
    });
});



module.exports = Router;