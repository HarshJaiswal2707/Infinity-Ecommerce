import { response } from "express";
import user from "../model/userSchema.js";

export const userSignup = async (req, res) => {
    try {
        const exist = await user.findOne({
            userName: req.body.userName
        });
        if (exist) {
            return res.status(401).json({
                message: 'Username Already exist'
            });
        }
        const User = req.body;
        const newUser = new user(User);
        await newUser.save();
        return res.status(200).json({
            message: "Signup successful"
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const userlogin = async (req, res) => {
    try {
        console.log(req.body);

        const userName = req.body.userName;
        const password = req.body.password;

        let foundUser = await user.findOne({
            email: req.body.userName,
            password: req.body.password
        });

        console.log(foundUser);

        if (foundUser) {
            return res.status(200).json({
                data: foundUser
            });
        } else {
            return res.status(401).json({
                message: "Invalid Login"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
}

