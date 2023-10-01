"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const http_status_codes_1 = require("http-status-codes");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    console.log(req);
    return res.status(http_status_codes_1.StatusCodes.OK).send({
        success: true,
        message: "Getting the data",
    });
});
router.post("/post", (req, res) => {
    console.log(req.query.test);
    return res.json({
        message: "Posting the data",
    });
});
