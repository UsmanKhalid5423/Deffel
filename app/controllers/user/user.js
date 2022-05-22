/*******************************************************/
// Importing Files.
/*******************************************************/
const response = require("../../utility/functions/response");
const { Duffel } = require('@duffel/api')
const models = require('../../../database/sequelize/sequelize')
const database = require("../../utility/calls/databaseRequest");
const jwtToken = require("../../utility/functions/jwtToken");

require('dotenv').config()
/*******************************************************/
// Importing Npm Modules.
/*******************************************************/
//const bcrypt = require('bcrypt')
const moment = require('moment')

/*******************************************************/
//Main Controllers.
/*******************************************************/
const duffel = new Duffel({
    token : process.env.token
})


/**
 * Controller: It is used add a  user.
 */
const signUp = async (req, res, next) => {
    try{
        
        const result = await manageUser(req, new models.user({}));
        if (result) {
            req.body.password = "******";
                
            return response.send(
                req,
                res,
                next,
                "info",
                201,
                "USER_ADDED",
                result
            );
        }

        }
        catch(error)
        {
            console.log('=== >> ERROR == >>> ',error)
            return response.send(
                req,
                res,
                next,
                "ERROR",
                500,
                "SERVER_ERROR",
                err
            );
        }

};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await database.findBy(models.user, {
            email: email
        });
        if (user) {
            let comparingPasswords = false
            if(password==user.password)
            {
                comparingPasswords = true
            }
            // const comparingPasswords = await bcrypt.comparsion(
            //     password,
            //     user.password
            // );
            if (comparingPasswords) {
                if (!user.status) {
                    return response.send(
                        req,
                        res,
                        next,
                        "warning",
                        202,
                        "CAN_NOT_BE_LOGGED_IN",
                        null
                    );
                }
                const authToken = await jwtToken.generatingToken(
                    {
                        id: user.id,
                        email: user.email
                    },
                    true,
                    0
                );
                user.accessToken = authToken;
                user.updatedTime = moment().unix();
                await database.save(user);
                req.body.password = "******";
                return response.send(
                    req,
                    res,
                    next,
                    "info",
                    200,
                    "LOGGED_IN",
                    user
                );
            } else {
                return response.send(
                    req,
                    res,
                    next,
                    "warning",
                    401,
                    "AUTHORIZATION_FAILED",
                    null
                );
            }
        }
        console.log('== >> IN ELSE 2 ==== >> ')
        return response.send(
            req,
            res,
            next,
            "warning",
            401,
            "AUTHORIZATION_FAILED",
            null
        );
    } catch (error) {
        console.log('== >> IN ELSE 3 ==== >> ',error)
                        

    }
};





/*******************************************************/
// Exporting Controllers.
/*******************************************************/
module.exports = {
    signUp,
    login
}

/*******************************************************/
// Internal Functions.
/*******************************************************/

/**
 * Function: It is manage user.
 */
 const manageUser = async (req, user) => {
    const { name, email, password } = req.body;
    let encryptedPassword;
    user.name = name;
    user.email = email;
    if (user.createdTime) {
        if (password) {
            encryptedPassword = password//await bcrypt.encryption(password);
            user.password = encryptedPassword
        }
        user.updatedTime = moment().unix();
    } else {
        encryptedPassword = password//await bcrypt.encryption(password);
        user.password = encryptedPassword
        user.createdTime = moment().unix();
        user.updatedTime = moment().unix();
    }
    return await database.save(user);
}


