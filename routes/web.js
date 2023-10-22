import express from "express"
import Grid from "gridfs-stream";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import mongoose from "mongoose";
import crypto from "crypto"
import { SiteController } from "../controllers/siteController.js";
import { UserController } from "../controllers/userController.js";
import path from "path";

// initialize router
const router = express.Router();

// Mongo uri
const mongoURI = "mongodb+srv://siddharthsingh88505:1234@cluster0.1vdh0uk.mongodb.net/?retryWrites=true&w=majority";

// Create mongoconnection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
let gfs,gridfsBucket;

conn.once('open', () => {
    // Init stream
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'clothphotos'
    });
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('clothphotos');
})

// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'clothphotos'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });

// routes
router.get("/admin", SiteController.homePage);
// upload form page
router.get("/upload-page", SiteController.uploadPage);
// uploading cloth on db
router.post("/upload-cloth", upload.fields([{ name: "image" }]), SiteController.uploadCloth);
// get all cloth
router.get("/all-cloth", SiteController.getAll);
router.get("/basics-cloth", SiteController.getBasics);
router.get("/florat-cloth", SiteController.getFlorat);
router.get("/graphics-cloth", SiteController.getGraphics);
router.get("/limited-cloth", SiteController.getLimited);
// delete cloth
router.get("/delete-cloth/:id", SiteController.deleteCloth);
// frontend api's
router.get("/get-all-list", SiteController.getAllList);
router.get("/basic-list", SiteController.getBasicsList);
router.get("/florat-list", SiteController.getFloratList);
router.get("/graphic-list", SiteController.getGraphicsList);
router.get("/limited-list", SiteController.getLimitedList);
router.get("/image/:id", SiteController.getImage);
// register user
router.post("/register", UserController.registerUser);
// login user
router.post("/login", UserController.loginUser);
// place order
router.post("/place-order", SiteController.placeOrder);
router.post("/payment-response", SiteController.paymentResponse);
// for any un matched url
router.get("*", (req, res) => {
    res.send("redirect");
})


export { router, gfs, gridfsBucket };