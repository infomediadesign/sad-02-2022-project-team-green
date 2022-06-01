const express = require("express");
const router = express.Router();

const Rooms = require('../model/rooms');

router.get("/getRooms",async(req,res)=> {
        const getrooms = await Rooms.find();
        res.send(getrooms);
});

module.exports = router;