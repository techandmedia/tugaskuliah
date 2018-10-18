const express = require("express");
const router = express.Router();
const mySQL = require("../config/config-MySQL");

// exports.getHome = router.get("/api/users", (req, res) => {
//   mySQL.query("SELECT * from users", (err, results) => {
//     if (err) console.log(err);
//     res.send("Welcome to the API - 123");
//   });
// });

exports.login = router.post("/api/users/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  mySQL.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].password == password) {
          res.send({
            "code": 200,
            "success": "login sucessfull"
          });
        }
        else {
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      }
      else {
        res.send({
          "code": 204,
          "success": "Email does not exits"
        });
      }
    }
  });
});

exports.getAllContacts = router.get("/api/users", (req, res) => {
  mySQL.query("SELECT * from users", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getSortedContact = router.get("/api/users/ordered", (req, res) => {
  mySQL.query(
    "SELECT * FROM `users` ORDER BY `fullname`",
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

exports.getContactByID = router.get("/api/users/:id", (req, res) => {
  mySQL.query(
    "SELECT * from users where id=?",
    [req.params.id],
    (err, results, fields) => {
      if (err) console.log(err);
      res.end(JSON.stringify(results));
    }
  );
});

exports.putContact = router.put("/api/users/update/:id", (req, res) => {
  const putData = req.body;
  const idToPutData = req.params.id;
  mySQL.query("UPDATE `users` SET `userid=?`, `fullname`=?, `usergroup=?`, `emailid`=?, `mobile`=?, `title`=?, `pp=?`, WHERE id=?",
    [putData.userid, putData.fullname, putData.usergroup, putData.emailid, putData.mobile, putData.title, putData.pp, idToPutData],
    (err, results, fields) => {
      if (err) console.log(err);
      // console.log(results.insertId);
      res.end(JSON.stringify(results));
    }
  );
});

exports.postContact = router.post("/api/users/new", (req, res) => {
  var today = new Date();
  var users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "password": req.body.password,
    "created": today,
    "modified": today
  }

  var email = req.body.email;

  mySQL.query('SELECT * FROM users WHERE email = ?', [email], function (err, results, fields) {
    if (results.length > 0) {
      if (results[0].email == email) {
        res.send({
          "code": 204,
          "status": 'Failed',
          "message": "This email address is already registered, please login instead"
        });
      }
    }
    else {
      mySQL.query("INSERT INTO users SET ?", users,
        (err, results, fields) => {
          if (err)
            res.send({
              "code": 400,
              "status": 'Failed',
              "message": 'Something wrong with the connection'
            })
          res.send({
            "code": 400,
            "status": 'Success',
            "message": 'User is successfully registered'
          })
        }
      );
    }
  });
});

module.exports = router;

// mySQL.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
//   if (error) {
//     // console.log("error ocurred",error);
//     res.send({
//       "code": 400,
//       "failed": "error ocurred"
//     })
//   } else {
//     // console.log('The solution is: ', results);
//     if (results.length > 0) {
//       if (results[0].email == email) {
//         res.send({
//           "code": 204,
//           "success": "email sudah terdaftar"
//         });
//       }
//       else {
//         mySQL.query("INSERT INTO users SET ?", users,
//           (err, results, fields) => {
//             if (err)
//               res.status(400).json({
//                 value: '0',
//                 status: 'gagal',
//                 message: 'Ada error'
//               })
//             res.status(201).json({
//               value: '1',
//               status: 'success',
//               message: 'Kontak berhasill ditambah'
//             })
//           }
//         );
//       }
//     }
//   }
// });