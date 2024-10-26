import express, {Router} from "express";
const router = express.Router();
const motor = [
    {
        merk : "Verza",
        model : "Honda",
        warna : "Hitam",
        tahun : 2022,
    },
    {
        merk : "Harley Davidson",
        model : "Sport",
        warna : "Abu",
        tahun : 2023,
    },
];
router.get("/", (req, res) => {
    res.send(motor);
});
export default router;