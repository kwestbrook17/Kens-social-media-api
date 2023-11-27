const { Thought, User } = require('../models');  // Import your models

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  getThoughtById: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.id);
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  createThought: async (req, res) => {
    try {
      const { userId } = req.params;
      const { thoughtText } = req.body;

      // Create a new thought
      const newThought = await Thought.create({ thoughtText, username: 'exampleUsername' });

      // Associate the thought with the user
      const user = await User.findByIdAndUpdate(userId, { $push: { thoughts: newThought._id } }, { new: true });

      res.json(newThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  updateThought: async (req, res) => {
    try {
      const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  deleteThought: async (req, res) => {
    try {
      const deletedThought = await Thought.findByIdAndDelete(req.params.id);

      // Remove the thought reference from the user
      await User.updateMany({ thoughts: req.params.id }, { $pull: { thoughts: req.params.id } });

      res.json(deletedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  addReaction: async (req, res) => {
    try {
      const { thoughtId } = req.params;
      const { reactionBody, username } = req.body;

      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $push: { reactions: { reactionBody, username } } },
        { new: true }
      );

      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  removeReaction: async (req, res) => {
    try {
      const { thoughtId, reactionId } = req.params;

      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        { $pull: { reactions: { _id: reactionId } } },
        { new: true }
      );

      res.json(updatedThought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = thoughtController;
