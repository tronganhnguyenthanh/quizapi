const mongoose = require("mongoose")
const quizSchema = new mongoose.Schema({
  question_name:{
   type:String  
  },
  option_answer:{
   type:[String]
  },
  correct_answer:{
   type:String
  }  
},{
 collection:"questions"
})
module.exports = mongoose.model("quizSchema", quizSchema)
