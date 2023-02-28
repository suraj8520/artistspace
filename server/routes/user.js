import express from "express";
 
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This works - user routes');
});

export default router;