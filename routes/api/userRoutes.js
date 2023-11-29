const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

// GET all users
router.route("/").get(userController.getAllUsers);

// GET a specific user by ID
router.route("/:userId").get(userController.getUserById);

// POST a new user
router.route("/").post(userController.createUser);

// PUT (update) a user by ID
router.route("/:userId").put(userController.updateUser);

// DELETE a user by ID
router.route("/:userId").delete(userController.deleteUser);

// POST a new thought for a user
router.route("/:userId/thoughts").post(userController.createThought);

// DELETE a thought for a user
router.route("/:userId/thoughts/:thoughtId").delete(userController.deleteThought);

// POST a reaction to a thought
router.route("/:userId/thoughts/:thoughtId/reactions").post(userController.createReaction);

// DELETE a reaction to a thought
router.route("/:userId/thoughts/:thoughtId/reactions/:reactionId").delete(userController.deleteReaction);

// POST add a friend to a user's friend list
router.route("/:userId/friends").post(userController.addFriend);

// DELETE remove a friend from a user's friend list
router.route("/:userId/friends/:friendId").delete(userController.removeFriend);

module.exports = router;