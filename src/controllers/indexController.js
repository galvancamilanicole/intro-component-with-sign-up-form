const controller ={
    index : (req,res)=>{
        res.render('index')
    },
    success: (req,res) =>{
        res.render('success')
    }
}

module.exports = controller;
