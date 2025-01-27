import express from "express"; // express is a web framework for Node.js that makes it easy to build web applications it is used to create a server
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getMessages, sendMessages} from "../controllers/message.controller.js";

const router = express.Router();


router.get("/users", protectRoute, getUsersForSidebar);

router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessages);

export default router;