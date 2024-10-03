import Router from "express";
import AuthController from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth.middleware";
import GroupChatController from "../controllers/GroupChat.controller";
import ChatGroupUserController from "../controllers/groupUser.controller";

const router = Router();

//auth routes
router.post("/auth/login", AuthController.login);

// Chat Group routes
router.post("/chat-group", authMiddleware, GroupChatController.store);
router.get("/chat-group", authMiddleware, GroupChatController.index);
router.get("/chat-group/:id", GroupChatController.show);
router.put("/chat-group/:id", authMiddleware, GroupChatController.update);
router.delete("/chat-group/:id", authMiddleware, GroupChatController.destroy);

//user routes
router.get("/chat-group-users", ChatGroupUserController.index);
router.post("/chat-group-users", ChatGroupUserController.store);

export default router;