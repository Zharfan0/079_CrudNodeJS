import express, {Router} from "express";
const router = express.Router();
const daerah = [
    {
        kota : "Yogyakarta",
        provinsi: "Daerah Istimewa Yogyakarta",
        pulau : "Jawa",
        tahun : 2004,
    },
    {
        kota : "Bantul",
        provinsi: "Daerah Istimewa Yogyakarta",
        pulau : "Jawa",
        tahun : 2004,
    },
];
router.get("/", (req, res) => {
    res.send(daerah);
});
export default router;