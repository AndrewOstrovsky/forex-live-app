import React from 'react'
import './Table.scss'

import classNames from 'classNames'

import { IDataItem } from '../../helpers/searchData/types'

interface ITableProps {
    data: IDataItem[]
}

const Table = ({ data }: ITableProps) => {
    const baseClass = 'c-table'
    const cellClassName = `${baseClass}-cell`

    return (
        <table className={baseClass}>
            <thead>
                <tr className={`${baseClass}-row-heading`}>
                    <th className={cellClassName}>Pair</th>
                    <th className={cellClassName}>Bid</th>
                    <th className={cellClassName}>Ask</th>
                    <th className={cellClassName}>Change %</th>
                </tr>
            </thead>
            <tbody>
            {data && data.map((item: IDataItem) => {
                return (
                    <tr key={item.ticker} className={`${baseClass}-row`}>
                        <td className={cellClassName}>{item.ticker}</td>
                        <td className={cellClassName}>{item.bid}</td>
                        <td className={cellClassName}>{item.ask}</td>
                        <td className={classNames(cellClassName,{
                            [`${cellClassName}--positive`]: item.changes > 0,
                            [`${cellClassName}--negative`]: item.changes < 0
                        })}>{item.changes && item.changes.toFixed(2)}%</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Table