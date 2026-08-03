const express = require("express")
const router = express.Router()
const quizController = require("../controllers/quiz.controller")
router.post("/quiz/new", quizController.addQuiz)
router.get("/quiz/list", quizController.getQuizzes)
router.get("/quiz/:id", quizController.getQuizById)
module.exports = router