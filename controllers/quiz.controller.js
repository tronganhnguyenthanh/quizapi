const quizModel = require("../models/quiz.model")
const addQuiz = async (req, res) => {
  try{
   const add_quiz = new quizModel({
    question_name:req.body.question_name,
    option_answer:req.body.option_answer,
    correct_answer:req.body.correct_answer   
   })
   await add_quiz.save()
   res.status(200).json({message:"Quiz created"})
 }catch(error){
   res.status(400).json({message:error.message})
 }   
}
const getQuizzes = async (req, res) => {
  try{
    const quiz_lists = await quizModel.find()
    res.status(200).json(quiz_lists)
  }catch(error){
    res.status(400).json({message:error.message}) 
  } 
}
const getQuizById = async (req, res) => {
  try{
    const {_id} = req.params.id 
    const quiz_detail = await quizModel.findOne({id:_id})
    res.status(200).json(quiz_detail)
  }catch(error){
    res.status(400).json({message:error.message})
  }  
}
module.exports = {
 addQuiz,
 getQuizzes,
 getQuizById
}