const controller ={
    index : (req,res)=>{
        res.render('index',{
            title: "Frontend Mentor | Intro component with sign up form"
        })
    },
    success: (req,res) =>{
        res.render('success',{
            title: "Success"
        })
    }
}

module.exports = controller;
