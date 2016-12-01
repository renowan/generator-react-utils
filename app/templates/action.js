import axios from 'axios'
import * as constants from 'common/utils/constants'

// fetchの設定
var axiosInstance = axios.create({
  timeout: constants.DEFAULT_AJAX_TIMEOUT_MS,
  headers: {'Content-Type': 'application/json;charset=utf-8'}
});

axiosInstance.defaults.timeout = constants.DEFAULT_AJAX_TIMEOUT_MS

export const <%= upperName %>_ACTION_TYPE = '<%= upperName %>_ACTION_TYPE'
export function action(data) {
    return {type: <%= upperName %>_ACTION_TYPE, data}
}
