const express = require("express");
const router = express.Router();
const thoughtController = require("../../controllers/thoughtController");

// GET all thoughts
router.route("/").get(thoughtController.getAllThoughts);

// GET a specific thought by ID
router.route("/:thoughtId").get(thoughtController.getThoughtById);

// POST a new thought
router.route("/").post(thoughtController.createThought);

// PUT (update) a thought by ID
router.route("/:thoughtId").put(thoughtController.updateThought);

// DELETE a thought by ID
router.route("/:thoughtId").delete(thoughtController.deleteThought);

// POST a reaction to a thought
router.route("/:thoughtId/reactions").post(thoughtController.createReaction);

// DELETE a reaction to a thought
router.route("/:thoughtId/reactions/:reactionId").delete(thoughtController.deleteReaction);

module.exports = router;