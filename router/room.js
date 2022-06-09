const express = require("express");
const router = express.Router();

const Rooms = require('../model/rooms');

router.get("/getRooms",async(req,res)=> {
        const getrooms = await Rooms.find();
        res.send(getrooms);
});

<<<<<<< HEAD
router.post("/getroombyid",async(req,res)=> {

        const roomid = req.body.roomid;
        const room = await Rooms.findOne({_id:roomid});
        res.send(room);
});

=======
>>>>>>> 2468531c5c9518bf4e8957c0b2033dc0c05648ca
module.exports = router;