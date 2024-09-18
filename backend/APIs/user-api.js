//create user-api app
const exp = require('express')
const userApp = exp.Router();
const bcryptjs = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler')
const verifyToken = require('../Middlewares/verifyToken');
require('dotenv').config()
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/images')
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.achievementId}-${req.body.imagename}`);
    }
})

const upload = multer({ storage})

//import jwt
const jwt = require('jsonwebtoken')


//let usercollection;
//let articlescollection;
let facultycollection;
let achievementscollection;

//get usercollection app
userApp.use((req, res, next) => {
    // usercollection = req.app.get('usercollection')
    // articlescollection = req.app.get('articlescollection')
    facultycollection = req.app.get('facultycollection')
    achievementscollection = req.app.get('achievementscollection')
    next()
})

//user registration route
userApp.post('/user', expressAsyncHandler(async (req, res) => {
    //get user resource from client
    const newUser = req.body;
    //res.send({message:'user created'})
    // console.log("new user register",newUser)
    //check for duplicate user based on username
    const dbuser = await facultycollection.findOne({ username: newUser.username })
    //if user exist
    if (dbuser != null) {
        res.send({ message: 'user already exist' })
    } else {
        //hash the password
        const hashedPassword = await bcryptjs.hash(newUser.password, 3)
        //update the user resource with hashed password
        newUser.password = hashedPassword
        //insert the new user
        const user = await facultycollection.insertOne(newUser)
        //send res
        res.send({ message: 'user created' })
    }
}))

//user login route
userApp.post('/login', expressAsyncHandler(async (req, res) => {
    //get user resource from client
    const userCred = req.body;
    //find the user based on username
    // console.log("login usercred",userCred)
    const dbuser = await facultycollection.findOne({ username: userCred.username })
    // console.log(dbuser)
    //if user not found
    if (dbuser === null) {
        res.send({ message: 'user not found' })
    } else {
        //check for password
        const status = await bcryptjs.compare(userCred.password, dbuser.password)
        // console.log(status)
        if (status === false) {
            res.send({ message: 'invalid password' })
        } else {
            //create jwt token and encode it
            const signedToken = jwt.sign({ username: dbuser.username }, process.env.SECRET_KEY, { expiresIn: '1d' })
            //send res
            res.send({ message: 'login success', token: signedToken, user: dbuser })
        }
    }
}))

//adding new achievement by faculty
userApp.post('/achievement', upload.single('image'), verifyToken, expressAsyncHandler(async (req, res) => {
    //get new article from client
    console.log("req body :", req.body)
    console.log("req file", req.file)
    req.body.imageURL = req.file.path;
    const newAchievement = req.body;
    
    // console.log("new achievement posted", newAchievement)
    //post to articles collection
    let r = await achievementscollection.insertOne(newAchievement)
    // console.log("result of new achievement", r)
    //send res
    res.send({ message: "new achievement created" })
}))


//view the faculty achievements
userApp.get('/achievements/:username', verifyToken, expressAsyncHandler(async (req, res) => {
    //get username from url
    const facultyName = req.params.username
    // console.log(facultyName)
    //get articles whose status is true
    const achievementsList = await achievementscollection.find({ username: facultyName }).toArray();
    res.send({ message: "List of articles", payload: achievementsList })
    // console.log("achievementsList is:",achievementsList)
}))

//get achievements of all users
userApp.get('/achievements', expressAsyncHandler(async (req, res) => {
    //get achievementscollection from express app
    const achievementscollection = req.app.get('achievementscollection')
    //get all achievements
    let achievementsList = await achievementscollection.find({ status: "true" }).toArray()
    //send res
    res.send({ message: "articles", payload: achievementsList })
}))

//deleting the achievement
userApp.put('/achievement/:achievementId', verifyToken, expressAsyncHandler(async (req, res) => {
    //get articleId from url
    const achievementIdFromUrl = (req.params.achievementId);
    //get article
    const achievementToDelete = req.body;
    //update states of article to false
    let a = await achievementscollection.updateOne({ achievementId: achievementIdFromUrl }, { $set: { ...achievementToDelete, status:"false" } })
    // console.log(a)
    res.send({ message: "Achievement deleted" })

}))

// Restoring the achievement
userApp.put('/restore-achievement/:achievementId', verifyToken, expressAsyncHandler(async (req, res) => {
    // get articleId from URL
    const achievementIdFromUrl = (req.params.achievementId);
    //get article
    const achievementToRestore = req.body;
    // update status of article to true
    let r = await achievementscollection.updateOne({ achievementId: achievementIdFromUrl }, { $set: { ...achievementToRestore, status: "true" } });
    // console.log(r)
    res.send({ message: "Achievement restored" });
}));

//updating the achievement
userApp.put('/achievement', verifyToken, expressAsyncHandler(async (req, res) => {
    //get updated article from client
    // console.log("req body :", req.body)
    // console.log("req file", req.file)
    // req.body.imageURL = req.file.path;
    const modifiedAchievement = req.body;
    console.log(modifiedAchievement)
    //update the article
    let result = await achievementscollection.updateOne({ achievementId: modifiedAchievement.achievementId }, { $set: { ...modifiedAchievement } })
    let latestAchievement = await achievementscollection.findOne({ achievementId: modifiedAchievement.achievementId })
     console.log(result)
    res.send({ message: "Achievement updated", achievement: latestAchievement })

}))



module.exports = userApp;