const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://nivedd2003:Nividitha007@complaintregistery.fzolt.mongodb.net/?retryWrites=true&w=majority&appName=ComplaintRegistery")
.then(()=>{
   console.log("connected to mongodb")
})