import express from 'express'

import DictionariesController from './controllers/GetDictionariesController/DictionariesController.js';
import DatabaseController from './controllers/DatabaseController/DatabaseController.js';
import fs from 'fs'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import stream from 'node:stream'
import multer from 'multer'
import AuthController from './controllers/AuthController/AuthController.js';
import { check } from "express-validator";
import authMiddleware from './middleware/authMiddleware.js';





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/images`)
    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage })



const storageAvatars = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/avatars`)
    },
    filename: function (req, file, cb) {

        cb(null, Date.now() + file.originalname)
    }
})
const uploadAvatars = multer({ storage: storageAvatars })


const router = express.Router();

router.get('/opn', DictionariesController.getOPN)
router.get('/ratedCurrentOfTheMainCircuits', DictionariesController.getRatedCurrentOfTheMainCircuits)
router.get('/microprocessorProtectionDeviceAndAutomation', DictionariesController.getMicroprocessorProtectionDeviceAndAutomation)
router.get('/electromagneticLocking', DictionariesController.getElectromagneticLocking)
router.get('/instrumentCurrentTransformers/:id', DictionariesController.getInstrumentCurrentTransformers)
router.get('/voltageTransformers', DictionariesController.getVoltageTransformers)
router.get('/circuitBreakers', DictionariesController.getCircuitBreakers)
router.get('/electricityMeter', DictionariesController.getElectricityMeter)
router.get('/transformersForOwnNeeds', DictionariesController.getTransformersForOwnNeeds)
router.get('/zeroSequenceCurrentTransformers', DictionariesController.getZeroSequenceCurrentTransformers)
router.get('/currentTransformatorOption', DictionariesController.getCurrentTransformatorOption)
router.get('/typeOfCell', DictionariesController.getTypeOfCell)
router.get('/typeOfSwitchingDevice', DictionariesController.getTypeOfSwitchingDevice)
router.get('/switchingDeviceVV', DictionariesController.getSwitchingDeviceVV)
router.get('/switchingDeviceVN', DictionariesController.getSwitchingDeviceVN)
router.get('/switchingDeviceR', DictionariesController.getSwitchingDeviceR)





const cpUpload = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'stencilId', maxCount: 1 }])
router.post('/addStencil/:projectId', cpUpload, DatabaseController.addStencil)
router.patch('/resizeStencil/:stencilId', DatabaseController.resizeStencil)
router.patch('/updateStencil/:stencilId', DatabaseController.updateStencil)
router.delete('/deleteStencil/:stencilId', DatabaseController.deleteStencil)




router.post('/addShkaf/:projectId', DatabaseController.addShkaf)
router.delete('/deleteShkaf/:shkafId', DatabaseController.deleteShkaf)
router.patch('/updateCoords/:id', DatabaseController.updateCoords)
router.patch('/updateGroup/:projectId', DatabaseController.updateGroup)
router.patch('/updateGroupAfterDelete/:projectId', DatabaseController.updateGroupAfterDelete)
router.patch('/updatePropsByRow/:shkafId', DatabaseController.updatePropsByRow)
router.patch('/updateCurrentProp/:id', DatabaseController.updateCurrentProp)
router.patch('/updateCurrentSelect/:id', DatabaseController.updateCurrentSelect)
router.patch('/setInitialProps/:id', DatabaseController.setInitialProps)



//====================================== REACT-FLOW PROPS (COORDS, GROUP, PARENTS) ======================================

router.patch('/updateTireWidthAddFastener', DatabaseController.updateTireWidthAddFastener)
router.patch('/updateTireWidthRemoveFastener', DatabaseController.updateTireWidthRemoveFastener)
router.patch('/addFastenerRelationship', DatabaseController.addFastenerRelationship)
router.patch('/removeFastenerRelationship', DatabaseController.removeFastenerRelationship)
router.post('/addEdgeApi', DatabaseController.addEdge)
router.delete('/removeEdgeApi', DatabaseController.deleteEdge)


// САМОПРОВЕРКИ________ВКР
router.patch('/updateSamoproverka', DatabaseController.updateSamoproverka)
//====================================== PROJECT ======================================


router.get('/findOrCreateAndGetProject', DatabaseController.findOrCreateAndGetProject)
router.get('/getAllProjectsList', DatabaseController.getAllProjectsList)
router.post('/createNewProject/:id', DatabaseController.createProject)
router.patch('/importProject/:projectId', DatabaseController.importProject)
router.get('/getCurrentProject/:id', DatabaseController.getCurrentProject)
router.delete('/deleteProject/:id', DatabaseController.deleteProject)
router.patch('/updateProject/:id', DatabaseController.updateProject)


//====================================== AUTH ======================================

router.post('/auth/login', AuthController.login)
router.post('/auth/registration', [
    check("data.username", "Имя пользователя не должно быть пустым").notEmpty(),
    check("data.password", "Пароль должен быть бальше 6 символов").isLength({ min: 6 })
],
    AuthController.registration)

router.get('/auth/users', DatabaseController.getAllProjectsList)
const cpUploadA = uploadAvatars.single('file')

router.patch('/auth/updateProfile/:id', cpUploadA, AuthController.updateProfile)








export default router




// app.get('/CurrentTransducersType1', async (req, res) => {

//   const answer = await getDataTable('./data/Измерительные преобразователь тока тип 1.xlsx');
//   res.json(answer)
// })
// app.get('/CurrentTransducersType2', async (req, res) => {

//   const answer = await getDataTable('./data/Измерительные преобразователь тока тип 2.xlsx');
//   res.json(answer)
// })



// app.get('/FrequencyConvertersType1', async (req, res) => {
//   console.log('freq111');
//   const answer = await getDataTable('./data/Измерительные преобразователи частоты тип 1.xlsx');
//   res.json(answer)
// })
// app.get('/FrequencyConvertersType2', async (req, res) => {
//   console.log('freq222');

//   const answer = await getDataTable('./data/Измерительные преобразователи частоты тип 2.xlsx');
//   res.json(answer)
// })


// app.get('/VoltageTransducersType1', async (req, res) => {

//   const answer = await getDataTable('./data/Измерительные преобразователи напряжения тип 1.xlsx');
//   res.json(answer)
// })

// app.get('/VoltageTransducersType2', async (req, res) => {

//   const answer = await getDataTable('./data/Измерительные преобразователи напряжения тип 2.xlsx');
//   res.json(answer)
// })
// app.get('/PowerTransducersType1', async (req, res) => {

//   const answer = await getDataTable('./data/Измерительные преобразователи мощности тип 1.xlsx');
//   res.json(answer)
// })
// app.get('/PowerTransducersType2', async (req, res) => {

//   const answer = await getDataTable('./data/Измерительные преобразователи мощности тип 2.xlsx');
//   res.json(answer)
// })
