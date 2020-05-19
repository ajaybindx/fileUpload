const multer = require('multer');
const path = require('path');


// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits:{ fileSize:99999999999999999999999},    
   }).single('datafile');



const uploadImage = (req, res) => {
     upload(req, res, (err) => {
        if (err) {
            res.send({
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.send({
                    msg: 'Error: No File Selected!'
                });
            } else {
                    res.json({ msg: 'File Uploaded!' });
                }

            };
        
    })
};
module.exports = { uploadImage};
