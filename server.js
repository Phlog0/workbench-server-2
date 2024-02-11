import express from 'express'
import cors from 'cors'
import XLSX from 'xlsx'
import fs from 'fs';

// const express = require('express')
// const cors = require('cors')
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

// var XLSX = require("xlsx");

// var fs = require("fs");



// app.get("/savedata", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });


const getDataTable = async (filename, sheet = 'Лист1') => {

  const excelData = XLSX.readFile(filename);
  return XLSX.utils.sheet_to_json(excelData.Sheets[sheet], { header: 1 })
  // return Object.keys(excelData.Sheets).map(item => ({
  //   item, data: XLSX.utils.sheet_to_json(excelData.Sheets[item], { header: 1 }),
  // }))


}

const getDataSelect = async (filename, sheet = 'Лист1') => {
  // return XLSX.utils.sheet_to_json(excelData.Sheets['Размеры шкафа'], { header: 1 }).flat()
  const excelData = XLSX.readFile(filename);
  return XLSX.utils.sheet_to_json(excelData.Sheets[sheet], { header: 1 }).flat()
}


app.get('/opn', async (req, res) => {
  const answer = await getDataTable('./data/ОПН.xlsx');
  res.json(answer)
})


app.get('/RatedCurrentOfTheMainCircuits', async (req, res) => {

  const answer = await getDataSelect('./data/Номинальный ток главных цепей,А.xlsx');
  res.json(answer)
})

app.get('/MicroprocessorProtectionDeviceAndAutomation', async (req, res) => {

  const answer = await getDataTable('./data/Микропроциссорное устройство защиты и автоматики.xlsx');
  res.json(answer)
})

app.get('/ElectromagneticLocking', async (req, res) => {

  const answer = await getDataTable('./data/Электромагнитная блокировка.xlsx');
  res.json(answer)
})

app.get('/InstrumentCurrentTransformers/:id', async (req, res) => {
  console.log(req.params.id);
  const answer = await getDataTable('./data/Измерительные трансформаторы тока.xlsx');
  const regStr = new RegExp(new Array(Number(req.params.id)).fill('.+').join('\\/'))

  // console.log(regStr);
  // let regexp1 = /.+\/.+/gm  // 2 и более
  // let regexp2 = /.+\/.+\/.+/gm // 3 и более
  // let regexp3 = /.+\/.+\/.+\/.+/gm // 4 и более

  const filtered = answer.filter((item) => item[4].match(regStr))
  const filteredArray = [answer[0], ...filtered]
  res.json(filteredArray)
})

app.get('/VoltageTransformers', async (req, res) => {

  const answer = await getDataTable('./data/Измерительные трансформаторы напряжения.xlsx');
  res.json(answer)
})


app.get('/CurrentTransducersType1', async (req, res) => {

  const answer = await getDataTable('./data/Измерительные преобразователь тока тип 1.xlsx');
  res.json(answer)
})
app.get('/CurrentTransducersType2', async (req, res) => {

  const answer = await getDataTable('./data/Измерительные преобразователь тока тип 2.xlsx');
  res.json(answer)
})



app.get('/FrequencyConvertersType1', async (req, res) => {
  console.log('freq111');
  const answer = await getDataTable('./data/Измерительные преобразователи частоты тип 1.xlsx');
  res.json(answer)
})
app.get('/FrequencyConvertersType2', async (req, res) => {
  console.log('freq222');

  const answer = await getDataTable('./data/Измерительные преобразователи частоты тип 2.xlsx');
  res.json(answer)
})


app.get('/VoltageTransducersType1', async (req, res) => {

  const answer = await getDataTable('./data/Измерительные преобразователи напряжения тип 1.xlsx');
  res.json(answer)
})

app.get('/VoltageTransducersType2', async (req, res) => {

  const answer = await getDataTable('./data/Измерительные преобразователи напряжения тип 2.xlsx');
  res.json(answer)
})
app.get('/PowerTransducersType1', async (req, res) => {

  const answer = await getDataTable('./data/Измерительные преобразователи мощности тип 1.xlsx');
  res.json(answer)
})
app.get('/PowerTransducersType2', async (req, res) => {

  const answer = await getDataTable('./data/Измерительные преобразователи мощности тип 2.xlsx');
  res.json(answer)
})
app.get('/circuitBreakers', async (req, res) => {

  const answer = await getDataTable('./data/Предохранитель.xlsx');
  res.json(answer)
})
app.get('/electricityMeter', async (req, res) => {

  const answer = await getDataTable('./data/Счетчик электроэнергии.xlsx');
  res.json(answer)
})
app.get('/transformersForOwnNeeds', async (req, res) => {

  const answer = await getDataTable('./data/Трансформаторы собственных нужд.xlsx');
  res.json(answer)
})
app.get('/zeroSequenceCurrentTransformers', async (req, res) => {

  const answer = await getDataTable('./data/Трансформаторы тока нулевой последовательности.xlsx');
  res.json(answer)
})

app.get('/currentTransformatorOption', async (req, res) => {

  // const [answer, _] = await getData('./data/6(10) кВ/copy.xlsx');
  const answer = await getDataSelect('./data/6(10)kB/copy.xlsx', "Размеры шкафа");
  res.json(answer)
})
app.get('/typeOfCell', async (req, res) => {

  // const [answer, _] = await getData('./data/6(10) кВ/copy.xlsx');
  const answer = await getDataSelect('./data/тип_ячейки.xlsx');
  res.json(answer)
})
app.get('/typeOfSwitchingDevice', async (req, res) => {

  // const [answer, _] = await getData('./data/6(10) кВ/copy.xlsx');
  const answer = await getDataSelect('./data/тип_коммутационного_аппарата.xlsx');
  res.json(answer)
})
app.get('/switchingDeviceVV', async (req, res) => {

  // const [answer, _] = await getData('./data/6(10) кВ/copy.xlsx');
  const answer = await getDataTable('./data/Коммутационный аппарат ВВ.xlsx', 'Лист1');
  res.json(answer)
})
app.get('/switchingDeviceVN', async (req, res) => {

  // const [answer, _] = await getData('./data/6(10) кВ/copy.xlsx');
  const answer = await getDataTable('./data/Коммутационный аппарат ВН.xlsx', 'Лист1');
  res.json(answer)
})
app.get('/switchingDeviceR', async (req, res) => {

  // const [answer, _] = await getData('./data/6(10) кВ/copy.xlsx');
  const answer = await getDataTable('./data/Коммутационный аппарат Р.xlsx', 'Лист1');
  res.json(answer)
})
app.get('/myapp', async (req, res) => {

  // const [answer, _] = await getData('./data/6(10) кВ/copy.xlsx');
  // const answer = fs.readFile('./myTest.json');

    fs.readFile('./myTest.json', 'utf8', (err, data) => {
      if (err) {
        res.json(err)
      }
      res.json(data)
    });
 


})





const start = async () => {
  try {
    app.listen(PORT, async () => {
      console.log("working");
      // console.log(answer);
      // answer.forEach(el => console.log(el))
    });
  } catch (error) {
    console.log(error);
  }
};

start();


