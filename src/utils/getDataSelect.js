import XLSX from 'xlsx'
const getDataSelect = async (filename, sheet = 'Лист1') => {
    // return XLSX.utils.sheet_to_json(excelData.Sheets['Размеры шкафа'], { header: 1 }).flat()
    const excelData = XLSX.readFile(filename);
    return XLSX.utils.sheet_to_json(excelData.Sheets[sheet], { header: 1 }).flat()
}

export default getDataSelect