export interface IDataItem {
    ticker: string
    bid: string
    ask: string
    changes: number
}

export type TSuccessCallback = (data: IDataItem[]) => void

export type TErrorCallback = (error: string) => void
