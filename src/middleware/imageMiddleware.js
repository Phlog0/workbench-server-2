import multer from "multer";

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'images/');

    },
    filename(req, file, cd) {
        cb(null, `${new Date()}-${file.originalname}`)
    }

})


const extensions = ['image/jpg', 'image/png']


const fileFilter = (req, file, cb) => {
    if (extensions.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}


export default multer({ storage, fileFilter })