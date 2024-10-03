import { Request, Response } from "express";
import prisma from "../config/db.config";

interface MessageCreatePayload {
    id: string,
    created_at: string,
    message: string,
    name: string,
    group_id: string
}


export class MessageControllers {

    static async index(req: Request, res: Response) {
        try {

            const { group_id } = req.params;

            const messages = await prisma.message.findMany({
                where: {
                    group_id: group_id
                }
            });

            return res.status(200).json(
                {
                    "message": " Messages fetched successfully",
                    messages: messages
                }
            )

        } catch (error) {
            return res.status(500).json(
                {
                    "message": "Something went wrong"
                }
            )
        }
    }

    static async store(req: Request, res: Response) {
        try {

            const { group_id } = req.params;
            const body: MessageCreatePayload = req.body;

            //code remaining

            const message = await prisma.message.create({
                data: {
                    ...body
                }
            });

            return res.status(200).json(
                {
                    "message": "Message created successfully",
                    Message: message
                }
            )

        } catch (error) {
            return res.status(500).json(
                {
                    "message": "Something went wrong"
                }
            )
        }
    }
}