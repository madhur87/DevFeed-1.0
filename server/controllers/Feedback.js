const db = require('../db');
exports.feedback = async (req, res) => {
    const feedback =req.body.feedback;
    try {
        db.query("INSERT INTO feedback (feedback)  VALUES (?) ", [feedback], (err, result) => {
            if (err) {
              console.log(err)
            }
            res.send({
                message:"you are added"
             });
        })
             
        
        
    } catch (error) {
        
    }
}