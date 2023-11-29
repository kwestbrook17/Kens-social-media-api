const express = require("express");
const router = express.Router();
const thoughtController = require("../../controllers/thoughtController");

router.get("/thoughts", thoughtController.getAllThoughts);
router.get("/thoughts/:id", thoughtController.getThoughtById);
router.post("/users/:userId/thoughts", thoughtController.createThought);
router.post("/thoughts/:thoughtId/reactions", thoughtController.addReaction);
router.put("/thoughts/:id", thoughtController.updateThought);
router.delete("/thoughts/:id", thoughtController.deleteThought);
router.delete(
  "/thoughts/:thoughtId/reactions/:reactionId",
  thoughtController.removeReaction
);

module.exports = router;