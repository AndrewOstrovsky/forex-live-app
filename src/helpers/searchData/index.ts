import axios from 'axios'
import { TSuccessCallback, TErrorCallback } from './types'
import { API_KEY } from '../../constants'

const searchData = async (query: string, onSuccess: TSuccessCallback, onError: TErrorCallback) => {
    const queryString = query ? `/${query}` : '';

    try {
        const { data } = await axios.get(
            `https://financialmodelingprep.com/api/v3/forex${queryString}?apikey=${API_KEY}`
        )

        if (!data || (Object.keys(data).length === 0 && data.constructor === Object)) {
            return onError('No data')
        }
        if (data['Error Message']) {
            return onError(data['Error Message'])
        }
        data.forexList ? onSuccess(data.forexList) : onSuccess([data])
    } catch(error) {
        onError(error.message)
    }
}

export default searchData