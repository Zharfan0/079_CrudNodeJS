import express, {Router} from "express";
const router = express.Router();
const univ = [
    {
        nama : "Universitas Muhammadiyah Yogyakarta",
        Lokasi: "Bantul",
        Fakultas : "Teknik",
        tahun : 2022,
    },
    {
        nama : "Universitas Gajah Mada",
        Lokasi: "Sleman",
        Fakultas: "Hukum",
        tahun : 2022,
    },
];
router.get("/", (req, res) => {
    res.send(univ);
});
export default router;