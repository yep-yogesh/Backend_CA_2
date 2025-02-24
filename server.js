const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const userdata = [
    {email: "alice@example.com", password: "alice123"},
    {email: "bob@example.com", password: "bob123"},
    {email: "charlie@example.com", password: "charlie123"}
]

app.get("/",(req,res)=>{
    res.send("this is the backend")
})

// app.post("/add-users",(req,res)=>{
//     if
// })

app.put("/update",(req,res)=>{
    const {email,newpassword} = req.body
    const ind = userdata.find(user =>user.email==email)
    const passs=newpassword
    if(ind){
        ind.password=newpassword
        console.log(ind)
        return res.json
        (
            {message: "updated with new password",
            newpassword}
        )
    }
    else{
        res.status(404).send("email not found")
    }
})

app.delete("/delete",(req,res)=>{
    const {email} = req.body
    const index = userdata.findIndex(user=>user.email===email)
    if(index!=-1){
        userdata.splice(index,1)
        return res.send("User deleted Sucessfully")      
    }
    else{
        res.status(404).send("email not found")
    }
})

app.listen(3000,()=>{
    console.log("server is running in http://localhost:3000")
})