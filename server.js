import express from "express"
import { addedUser,getUserDetail,updateLocation,getUserList, deletedUser } from "./controllers/userController.js";





const app = express();
const PORT =5500;

app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());

app.use("/addUser",addedUser);
app.use("/updateLocation/:username", updateLocation);
app.use("/getUserDetail/:username", getUserDetail);
app.use("/getUserList", getUserList);
app.use("/deletedUser/:username",deletedUser);







app.listen(PORT, () =>{
    console.log("Server is running on port " + PORT);
});