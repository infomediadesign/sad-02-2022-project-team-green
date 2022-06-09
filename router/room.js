const express = require("express");
const router = express.Router();

const Rooms = require('../model/rooms');

router.get("/getRooms",async(req,res)=> {
        const getrooms = await Rooms.find();
        res.send(getrooms);
});

router.post("/getroombyid",async(req,res)=> {

        const roomid = req.body.roomid;
        const room = await Rooms.findOne({_id:roomid});
        res.send(room);
});
module.exports = router;