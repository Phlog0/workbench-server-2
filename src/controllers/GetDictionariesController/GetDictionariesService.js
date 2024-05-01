import getDataSelect from "../../utils/getDataSelect.js";
import getDataTable from "../../utils/getDataTable.js";

class GetDictionariesService {
    async getExcelDataTable(filename, sheet) {
        try {
            const answer = getDataTable(filename, sheet);
            return answer
        } catch (error) {
            return error
        }

    }
    async getExcelDataSelect(filename, sheet) {
        try {
            const answer = getDataSelect(filename, sheet);
            return answer
        } catch (error) {
            return error
        }

    }
}


export default new GetDictionariesService()