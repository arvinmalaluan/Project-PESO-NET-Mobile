const pool = require("../config/db.conn");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO tbl_userlogin(email, role, password) VALUES (?, ?, ?)`,
      [data.email, data.role, data.password],
      (error, results, fields) => {
        if (error) {
          console.log("error 1");
          return callBack(error);
        }

        pool.query(
          `SELECT id FROM tbl_userlogin WHERE email = ?`,
          [data.email],
          (error, results) => {
            if (error) {
              console.log("error 2");
              return callBack(eror);
            }

            pool.query(
              `INSERT INTO tbl_userinfo(firstname, lastname, fk_userlogin) VALUES (?, ?, ?)`,
              [data.fname, data.lname, results[0].id],
              (error, results, fields) => {
                if (error) {
                  console.log("error 3");
                  return callBack(error);
                }
              }
            );
          }
        );

        return callBack(null, results);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(`SELECT * FROM tbl_userlogin`, [], (err, results, fields) => {
      if (err) {
        return callBack(err);
      }

      return callBack(null, results);
    });
  },

  getUserById: (id, callBack) => {
    pool.query(
      `SELECT * FROM tbl_userlogin WHERE id = ?`,
      [id],
      (err, results, fields) => {
        if (err) {
          return callBack(err);
        }

        return callBack(null, results);
      }
    );
  },

  update: (data, callBack) => {
    pool.query(
      `UPDATE tbl_userinfo SET firstname = ?, lastname = ?, address = ?, number = ? WHERE fk_userlogin = ?`,
      [data.firstname, data.lastname, data.address, data.number, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        console.log(data);
        return callBack(null, results);
      }
    );
  },

  getEmail: (identifier, callBack) => {
    pool.query(
      `SELECT * FROM tbl_userlogin WHERE email = ? or username = ?`,
      [identifier, identifier],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results[0]);
      }
    );
  },

  getJobPost: (callBack) => {
    pool.query(`SELECT * FROM tbl_userpost`, [], (error, results) => {
      if (error) {
        return callBack(error);
      }

      return callBack(null, results);
    });
  },

  initJobPost: (data, callBack) => {},

  upload: (data, callBack) => {
    if (!data) {
      console.log("hello");
    } else {
      console.log("hi");
    }
  },
};
