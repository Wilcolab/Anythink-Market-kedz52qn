/**
 * Express router to mount comment related functions on.
 * @type {object}
 * @const
 * @namespace commentsRouter
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");


/**
 * Route serving list of all comments.
 * @name GET /api/comments
 * @function
 * @async
 * @returns {object[]} 200 - Array of comments
 * @returns {Error} 500 - Server error
 */
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});


/**
 * Route serving deletion of a specific comment.
 * @name DELETE /api/comments/:id
 * @function
 * @async
 * @param {string} id - Comment ID
 * @returns {object} 200 - Success message
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Server error
 */
router.delete("/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

const { Types: { ObjectId } } = mongoose;

/**
 * Route serving a specific comment.
 * @name GET /api/comments/:id
 * @function
 * @async
 * @param {string} id - Comment ID
 * @returns {object} 200 - Comment object
 * @returns {Error} 400 - Invalid ID
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Server error
 */

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid comment ID provided" });
    }

    try {
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comment", details: error.message });
    }
});

/**
 * Route serving comment creation.
 * @name POST /api/comments
 * @function
 * @async
 * @param {object} req.body - Comment payload
 * @returns {object} 201 - Created comment
 * @returns {Error} 400 - Validation error
 * @returns {Error} 500 - Server error
 */

router.post("/", async (req, res) => {
    const payload = req.body;
    if (!payload || Object.keys(payload).length === 0) {
        return res.status(400).json({ error: "Request body required to create a comment" });
    }

    try {
        const createdComment = await Comment.create(payload);
        res.status(201).json(createdComment);
    } catch (error) {
        if (error.name === "ValidationError") {
            const details = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ error: "Comment validation failed", details });
        }
        res.status(500).json({ error: "Failed to create comment", details: error.message });
    }
});

/**
 * Route serving comment update.
 * @name PUT /api/comments/:id
 * @function
 * @async
 * @param {string} id - Comment ID
 * @param {object} req.body - Update payload
 * @returns {object} 200 - Updated comment
 * @returns {Error} 400 - Invalid ID or empty payload
 * @returns {Error} 404 - Comment not found
 * @returns {Error} 500 - Server error
 */
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid comment ID provided" });
    }
    if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({ error: "Request body required to update a comment" });
    }

    try {
        const updatedComment = await Comment.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true,
            context: "query"
        });
        if (!updatedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json(updatedComment);
    } catch (error) {
        if (error.name === "ValidationError") {
            const details = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ error: "Comment validation failed", details });
        }
        res.status(500).json({ error: "Failed to update comment", details: error.message });
    }
});

module.exports = router;
