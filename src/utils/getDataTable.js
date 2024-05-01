import XLSX from 'xlsx'
const getDataTable = async (filename, sheet = 'Лист1') => {

    const excelData = XLSX.readFile(filename);
    return XLSX.utils.sheet_to_json(excelData.Sheets[sheet], { header: 1 })
    // return Object.keys(excelData.Sheets).map(item => ({
    //   item, data: XLSX.utils.sheet_to_json(excelData.Sheets[item], { header: 1 }),
    // }))


}

export default getDataTable
