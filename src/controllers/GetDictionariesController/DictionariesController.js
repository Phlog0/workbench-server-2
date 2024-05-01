import getDataTable from "../../utils/getDataTable.js";
import GetDictionariesService from "./GetDictionariesService.js";
import fs from 'fs';
import { db } from "../../db.js";
import { Op } from "sequelize"
class DictionariesController {
    async getOPN(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/ОПН.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getMicroprocessorProtectionDeviceAndAutomation(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Микропроциссорное устройство защиты и автоматики.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getRatedCurrentOfTheMainCircuits(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataSelect('./data/Номинальный ток главных цепей,А.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };


    async getElectromagneticLocking(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Электромагнитная блокировка.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getInstrumentCurrentTransformers(req, res) {
        try {
            const answer = await getDataTable('./data/Измерительные трансформаторы тока.xlsx');
            const regStr = new RegExp(new Array(Number(req.params.id)).fill('.+').join('\\/'))
            const filtered = answer.filter((item) => item[4].match(regStr))
            const data = [answer[0], ...filtered]
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };

    async getVoltageTransformers(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Измерительные трансформаторы напряжения.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getCircuitBreakers(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Предохранитель.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getElectricityMeter(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Счетчик электроэнергии.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getTransformersForOwnNeeds(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Трансформаторы собственных нужд.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getZeroSequenceCurrentTransformers(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Трансформаторы тока нулевой последовательности.xlsx')
            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getCurrentTransformatorOption(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataSelect('./data/6(10)kB/трансформаторы_тока.xlsx', 'Размеры шкафа');

            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getTypeOfCell(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataSelect('./data/тип_ячейки.xlsx');

            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getTypeOfSwitchingDevice(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataSelect('./data/тип_коммутационного_аппарата.xlsx');

            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getSwitchingDeviceVV(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Коммутационный аппарат ВВ.xlsx', 'Лист1');

            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getSwitchingDeviceVN(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Коммутационный аппарат ВН.xlsx', 'Лист1');

            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };
    async getSwitchingDeviceR(_, res) {
        try {
            const data = await GetDictionariesService.getExcelDataTable('./data/Коммутационный аппарат Р.xlsx');

            res.json(data)
        } catch (error) {
            res.json(error)
        }

    };


    async getCurrentProject(_, res) {
        try {
            fs.readFile('./data/myTest.json', 'utf8', (err, data) => {
                if (err) {
                    res.json(err)
                }
                res.json(data)
            });

        } catch (error) {
            res.json(error)
        }

    };


}


export default new DictionariesController()