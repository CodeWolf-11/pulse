import { Request, Response } from "express";
import prisma from "../config/db.config";

class GroupChatController {

    static async store(req: Request, res: Response) {
        try {

            const body = req.body;
            const user = req.user;

            await prisma.chatGroup.create({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                    user_id: user?.id!
                }
            });


            return res.json({
                message: "Chat group created"
            });

        } catch (error) {
            return res.status(500).json({
                "message": "Something went wrong"
            });
        }
    }

    static async index(req: Request, res: Response) {
        try {

            const user = req.user;

            const data = await prisma.chatGroup.findMany({
                where: {
                    user_id: user?.id
                },
                orderBy: {
                    created_at: "desc"
                }
            });

            return res.status(200).json(
                {
                    "message": "Chat groups fetched successfully",
                    data: data
                }
            )

        } catch (error) {
            return res.status(500).json(
                {
                    "message": "Something went wrong"
                }
            );
        }
    }

    static async show(req: Request, res: Response) {
        try {

            const { id } = req.params;

            const data = await prisma.chatGroup.findUnique({
                where: {
                    id: id
                }
            });

            return res.status(200).json(
                {
                    data: data,
                    "message": "Chat group fetched successfully"
                }
            )

        } catch (error) {
            return res.status(500).json(
                {
                    "message": "Something went wrong"
                }
            );
        }
    }

    static async update(req: Request, res: Response) {
        try {

            const body = req.body;
            const user = req.user;
            const { id } = req.params;

            await prisma.chatGroup.update({
                where: {
                    id: id,
                    user_id: user?.id
                },
                data: {
                    ...body
                }
            });

            return res.status(200).json(
                {
                    message: "Group chat details updated successfully"
                }
            );


        } catch (error) {
            return res.status(500).json(
                {
                    "message": "Something went wrong"
                }
            );
        }
    }

    static async destroy(req: Request, res: Response) {
        try {

            const { id } = req.params;
            const user = req.user;

            await prisma.chatGroup.delete({
                where: {
                    id: id,
                    user_id: user?.id
                }
            });

            return res.status(200).json(
                {
                    "message": "Chat group deleted successfully",

                }
            );

        } catch (error) {
            return res.status(200).json(
                {
                    "message": "Something went wrong"
                }
            );
        }
    }

}

export default GroupChatController;