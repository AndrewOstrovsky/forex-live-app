import axios from 'axios'
import { IDataItem } from './types';
import searchData from '.'

jest.mock('axios')

const axiosMock = axios as jest.Mocked<typeof axios>;

interface IApiResponse {
    forexList?: IDataItem[]
}

test('fetches successfully data from an API', async () => {
    const forexList = [
        {
            "ticker" : "EUR/USD",
            "bid" : "1.21218",
            "ask" : "1.21218",
            "changes" : -0.20006421814409003,
        }, {
            "ticker" : "USD/JPY",
            "bid" : "104.188",
            "ask" : "104.188",
            "changes" : 0.33609722743863457,
      }
    ]
    const mockData: IApiResponse = {
        forexList
    }

    const onSuccess = jest.fn()
    const onError = jest.fn()

    axiosMock.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }))
    await searchData('', onSuccess, onError)
    expect(onSuccess).toHaveBeenCalledWith(forexList);
    expect(onError).not.toHaveBeenCalled();
});

test('fetches successfully data from an API for specific ticker', async () => {
    const mockData: IApiResponse | IDataItem = {
        "ticker" : "EUR/USD",
        "bid" : "1.21218",
        "ask" : "1.21218",
        "changes" : -0.20006421814409003,
    }

    const onSuccess = jest.fn()
    const onError = jest.fn()

    axiosMock.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }))
    await searchData('', onSuccess, onError)
    expect(onSuccess).toHaveBeenCalledWith([mockData]);
    expect(onError).not.toHaveBeenCalled();
});

test('fetches empty data from an API', async () => {
    const mockData: IApiResponse = {}

    const onSuccess = jest.fn()
    const onError = jest.fn()

    axiosMock.get.mockImplementationOnce(() => Promise.resolve({ data: mockData }))
    await searchData('', onSuccess, onError)
    expect(onSuccess).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalledWith('No data');
});

test('receives an error from an API', async () => {
    const errorMessasge = 'Error!'
    const onSuccess = jest.fn()
    const onError = jest.fn()

    axiosMock.get.mockImplementationOnce(() => Promise.resolve({ data: { ['Error Message']: errorMessasge } }))
    await searchData('', onSuccess, onError)
    expect(onSuccess).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalledWith(errorMessasge);
});

test('request failed ', async () => {
    const errorMessasge = 'Sorry something went wrong.'
    const onSuccess = jest.fn()
    const onError = jest.fn()

    axiosMock.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessasge)))
    await searchData('', onSuccess, onError)
    expect(onSuccess).not.toHaveBeenCalled();
    expect(onError).toHaveBeenCalledWith(errorMessasge);
});