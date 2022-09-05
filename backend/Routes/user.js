const express = require('express');
const connection = require('../connection');
const router = express.Router();
// user routes

router.get('/Students', (req, res) => {
    let Query = `select * from third_year`
    connection.query(Query, (err, results) => {
        if (err) {
            console.log("Data fetch error", err);
        }
        else if (results.length > 0) {
            res.send(results);
        }
        else {
            res.send({
                message: "No data has been retrieved",
                data: []
            });

        }
    })
})
router.get('/Students/:StudentRollnumber', (req, res) => {

    var StudentRollnumber = req.params.StudentRollnumber;
    let Query = `select * from third_year where Student_Rollnumber = '${StudentRollnumber}'`;
    console.log(typeof (Query));
    connection.query(Query, (err, result) => {
        if (err) {
            console.log("Fetch Error: ", err);
        }

        else if (result.length <= 0) {
            res.send("Data not found");
        }
        else {
            res.send(result);
        }

    });
});



module.exports = router;