
import { Request, Response } from "express";
import prisma from "../config/db.config";
import jwt from "jsonwebtoken";

interface LoginPayloadType {
    name: string,
    email: string,
    provider: string,
    oauth_id: string,
    image?: string;
}

class AuthController {

    static async login(req: Request, res: Response) {
        try {

            const body: LoginPayloadType = req.body;

            let userInDb = await prisma.user.findUnique({
                where: {
                    email: body.email
                }
            });

            if (!userInDb) {
                //create new user
                userInDb = await prisma.user.create({
                    data: body
                });


            }

            let JWTPayload = {
                name: body.name,
                email: body.email,
                id: userInDb.id
            }

            const token = jwt.sign(JWTPayload, process.env.JWT_SECRET!, {
                expiresIn: "365d"
            });

            return res.json({
                "message": "Logged in successfully",
                user: {
                    ...userInDb,
                    token: `Bearer ${token}`
                }
            });

        } catch (error) {

            return res.status(500).json({
                "message": "Something went wrong, please try again!"
            });
        }
    }
}


export default AuthController