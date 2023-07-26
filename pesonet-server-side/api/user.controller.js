const {
  create,
  getUsers,
  getUserById,
  update,
  getEmail,
  search,
  initJobPost,
  getAllJobPost,
  save,
  cancel,
  getAllInteractions,
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    create(body, (err, results, fields) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Created successfully",
        data: results,
      });
    });
  },

  fetchUsers: (req, res) => {
    getUsers((error, results) => {
      if (error) {
        res.status(500).json({
          success: 0,
          message: "Error occured --getUsers",
        });
      }

      if (!results) {
        return res.status(500).json({
          success: 0,
          message: "No records found",
        });
      }

      res.status(200).json({
        success: 1,
        message: "Fetched successfully",
        data: results,
      });
    });
  },

  fetchUsersById: (req, res) => {
    const id = req.params.id;

    getUserById(id, (error, results) => {
      if (error) {
        res.status(500).json({
          success: 0,
          message: "Error occured --getUsersById",
        });
      }

      if (!results) {
        return res.status(500).json({
          success: 0,
          message: "No records found",
        });
      }

      res.status(200).json({
        success: 1,
        message: "Fetched successfully",
        data: results,
      });
    });
  },

  updateInfo: (req, res) => {
    const body = req.body;

    update(body, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Error occured",
        });
      }

      return res.status(200).json({
        succcess: 1,
        message: "Updated successfully",
        data: results,
      });
    });
  },

  signin: (req, res) => {
    const body = req.body;

    getEmail(body.identifier, (error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Error occured",
          data: error,
        });
      }

      if (!results) {
        return res.status(200).json({
          success: 0,
          message: "Invalid email or password",
          data: results,
        });
      }

      console.log(results);
      const result = compareSync(body.password, results.password);

      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, process.env.ACCESS_TOKEN, {
          expiresIn: "1h",
        });

        return res.status(200).json({
          success: 1,
          message: "Successfully logged in",
          token: jsontoken,
        });
      }

      return res.status(500).json({
        success: 0,
        message: "Invalid email or password --",
      });
    });
  },

  fetchAllJobPost: (req, res) => {
    getAllJobPost((error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Error occured",
          data: error,
        });
      }

      if (!results) {
        return res.status(200).json({
          success: 1,
          message: "No job post found",
          data: results,
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Fetched successfully",
        data: results,
      });
    });
  },

  fetchAllInteractions: (req, res) => {
    getAllInteractions((error, results) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Error occured",
          data: error,
        });
      }

      if (!results) {
        return res.status(200).json({
          success: 1,
          message: "No result found",
        });
      }

      return res.status(200).json({
        success: 1,
        message: "Fetched successfully",
        data: results,
      });
    });
  },

  createJobPost: (req, res) => {
    const body = req.body;

    initJobPost(body, (error, results) => {
      if (error) {
        return res
          .status("500")
          .json({ success: 0, message: "Error encountered", data: error });
      }

      return res
        .status(200)
        .json({ success: 1, message: "Added successfully", data: results });
    });
  },

  uploadPhoto: (req, res) => {
    const body = req.body;

    if (!body) {
      return res.status(200).json({
        success: 0,
        message: "unsuccessful",
      });
    }

    return res.status(200).json({
      success: 1,
      message: "successful",
    });
  },

  searchJobPost: (req, res) => {
    const body = req.body;

    search(body, (error, results) => {
      if (error) {
        return res
          .status("500")
          .json({ success: 0, message: "Error encountered", data: error });
      }

      return res
        .status(200)
        .json({ success: 1, message: "Search results", data: results });
    });
  },

  savedPost: (req, res) => {
    const body = req.body;

    save(body, (error, results) => {
      if (error) {
        return res
          .status(500)
          .json({ success: 0, message: "Error occured", data: error });
      }

      return res
        .status(200)
        .json({ success: 1, message: "Successful", data: results });
    });
  },

  cancelInteraction: (req, res) => {
    const body = req.body;

    cancel(body, (error, results) => {
      if (error) {
        return res
          .status(500)
          .json({ success: 0, message: "Error occured", data: error });
      }

      return res
        .status(200)
        .json({ success: 1, message: "Successful", data: results });
    });
  },
};
