const pool = require("../config/db.conn");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO tbl_userlogin(email, role, password) VALUES (?, ?, ?)`,
      [data.email, data.role, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }

        pool.query(
          `SELECT id FROM tbl_userlogin WHERE email = ?`,
          [data.email],
          (error, results) => {
            if (error) {
              return callBack(eror);
            }

            pool.query(
              `INSERT INTO tbl_userinfo(firstname, lastname, fk_userlogin) VALUES (?, ?, ?)`,
              [data.fname, data.lname, results[0].id],
              (error, results, fields) => {
                if (error) {
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
        null, results;
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

  getAllJobPost: (callBack) => {
    pool.query(
      `SELECT * FROM tbl_userpost LEFT JOIN tbl_userinfo ON tbl_userpost.jobposter = tbl_userinfo.id`,
      [],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  initJobPost: (data, callBack) => {
    pool.query(
      `INSERT INTO tbl_userpost(imagename, jobtitle, jobdescription, reqskills, reqeducation, reqexpi, location, salaryrange, jobtype, jobposter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.img,
        data.title,
        data.descrip,
        data.skills,
        data.educ,
        data.expi,
        data.location,
        data.salary,
        data.type,
        data.poster,
      ],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  search: (data, callBack) => {
    if (data.search != "" && data.location != "") {
      pool.query(
        `SELECT * FROM tbl_userpost LEFT JOIN tbl_userinfo ON tbl_userpost.jobposter = tbl_userinfo.id WHERE (jobtitle LIKE CONCAT('%', ?, '%') OR jobtype LIKE CONCAT('%', ?, '%') OR companyname LIKE CONCAT('%', ?, '%')) AND location LIKE CONCAT('%', ?, '%')`,
        [data.search, data.search, data.search, data.location],
        (error, results) => {
          if (error) {
            return callBack(error);
          }

          return callBack(null, results);
        }
      );
    } else if (data.search == "" || data.location == "") {
      let query = "";
      let values = [];

      if (data.search == "") {
        query = `SELECT * FROM tbl_userpost LEFT JOIN tbl_userinfo ON tbl_userpost.jobposter = tbl_userinfo.id WHERE location LIKE CONCAT('%', ?, '%')`;
        values = [data.location];
      } else {
        query = `SELECT * FROM tbl_userpost LEFT JOIN tbl_userinfo ON tbl_userpost.jobposter = tbl_userinfo.id WHERE jobtitle LIKE CONCAT('%', ?, '%') OR jobtype LIKE CONCAT('%', ?, '%') OR companyname LIKE CONCAT('%', ?, '%')`;
        values = [data.search, data.search, data.search];
      }

      pool.query(query, values, (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      });
    }
  },

  like: (data, callBack) => {
    pool.query(
      `INSERT INTO liked_posts (user_id, post_id) VALUES (?, ?)`,
      [data.user_id, data.post_id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },

  save: (data, callBack) => {
    pool.query(
      `INSERT INTO saved_posts (user_id, post_id) VALUES (?, ?)`,
      [data.user_id, data.post_id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }

        return callBack(null, results);
      }
    );
  },
};
