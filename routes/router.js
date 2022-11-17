const express = require("express");
const router = new express.Router();
const products = require("../models/productsSchema");

// const bcrypt = require("bcryptjs");
// const authenicate = require("../middleware/authenticate");

// // router.get("/",(req,res)=>{
// //     res.send("this is testing routes");
// // });



// // register the data
// router.post("/register", async (req, res) => {
//     // console.log(req.body);
//     const { fname, email, mobile, password, cpassword } = req.body;

//     if (!fname || !email || !mobile || !password || !cpassword) {
//         res.status(422).json({ error: "filll the all details" });
//         console.log("bhai nathi present badhi details");
//     };

//     try {

//         const preuser = await User.findOne({ email: email });

//         if (preuser) {
//             res.status(422).json({ error: "This email is already exist" });
//         } else if (password !== cpassword) {
//             res.status(422).json({ error: "password are not matching" });;
//         } else {

//             const finaluser = new User({
//                 fname, email, mobile, password, cpassword
//             });

//             // yaha pe hasing krenge

//             const storedata = await finaluser.save();
//             // console.log(storedata + "user successfully added");
//             res.status(201).json(storedata);
//         }

//     } catch (error) {
//         console.log("error " + error.message);
//         res.status(422).send(error);
//     }

// });



// // login data
// router.post("/login", async (req, res) => {
//     // console.log(req.body);
//     const { email, password } = req.body;

//     if (!email || !password) {
//         res.status(400).json({ error: "fill the details" });
//     }

//     try {

//         const userlogin = await User.findOne({ email: email });
//         console.log(userlogin);
//         if (userlogin) {
//             const isMatch = await bcrypt.compare(password, userlogin.password);
//             console.log(isMatch);



//             if (!isMatch) {
//                 res.status(400).json({ error: "invalid crediential pass" });
//             } else {
                
//                 const token = await userlogin.generatAuthtoken();
//                 console.log(token);

//                 res.cookie("eccomerce", token, {
//                     expires: new Date(Date.now() + 2589000),
//                     httpOnly: true
//                 });
//                 res.status(201).json(userlogin);
//             }

//         } else {
//             res.status(400).json({ error: "user not exist" });
//         }

//     } catch (error) {
//         res.status(400).json({ error: "invalid crediential pass" });
//         console.log("error " + error.message);
//     }
// });

// get the products data

router.get("/getproducts", async (req, res) => {
    try {
        const producstdata = await products.find();
        console.log(producstdata + "data found");
        res.status(201).json(producstdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});


// getindividual

router.get("/getproductsone/:id", async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id);

        const individual = await products.findOne({ id: id });
        console.log(individual + "data found");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
    }
});






module.exports = router;