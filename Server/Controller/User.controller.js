const Usermodel = require("../Modal/User.modal");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
let signup = async (request, response) => {
    let { Username, Email, Password } = request.body;
    if (!Username || !Email || !Password) {
        return response.status(400).json({
            message: "Please fill all the fields"
        })
    }
    if (request.body.role) {
        return response.status(400).json({
            message: "You cant access"
        })
    }

    try {
        let isExists = await Usermodel.findOne({ Email })
        if (isExists) {
            return response.status(400).json({
                message: "User already Exists"
            })
        }
        bcrypt.hash(Password, 10, async function (err, hash) {
            if (err) {
                return response.status(500).json({
                    message: "Error hashing password",
                    error: err.message
                })
            }
            if (hash) {
                let UserCrate = await Usermodel.create({ Username, Email, Password: hash });
                return response.status(201).json({
                    message: "User Create Succesfully",
                    user: UserCrate
                })
            }
        });
    } catch (error) {
        return response.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }


}
let signin = async (request, response) => {
    let { Email, Password } = request.body;
    if (!Email || !Password) {
        return response.status(400).json({
            message: "Please fill all the feilds"
        })
    }
    try {
        let isExists = await Usermodel.findOne({ Email });
        if (!isExists) {
            return response.status(400).json({
                message: "Please create an account first"
            })
        }
        console.log(Password);
        bcrypt.compare(Password, isExists.Password, async (err, result) => {
            if (err) {
                return response.status(400).json({
                    message: err.message
                })
            }
            console.log(isExists.Password);
            if (!result) {
                return response.status(400).json({
                    message: "Invalid Password"
                })
            }
            let { Password, ...rest } = isExists._doc;
            jwt.sign({ user: rest }, process.env.Jwt_privateKey, function (err, token) {
                if (err) {
                    return response.status(400).json({
                        message: err.message
                    })
                }
                return response.cookie("Verificationtoken", token).status(200).json({
                    message: "User Login Succesfully",
                    user: rest,
                    token
                })
            });


        });
    } catch (error) {
        return response.status(500).json({
            message: error.message
        });
    }
}

module.exports = { signup, signin };