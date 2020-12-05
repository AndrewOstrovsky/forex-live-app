import React, { ChangeEvent, FormEvent, useState } from 'react';

import searchData from '../../helpers/searchData'
import Table from '../Table'
import FormInput from '../FormInput'
import Button from '../Button'
import LoadingSpinner from '../LoadingSpinner'

import './LiveWall.scss'
import { IDataItem } from '../../helpers/searchData/types';
import { REQUEST_INTERVAL } from '../../constants'

type TTimer = undefined | number

let timer: TTimer

const LiveWall = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const onError = (message: string) => {
    setData([])
    setError(message)
    setIsLoading(false)
    if (timer) {
      clearInterval(timer)
    }
  }

  const onSucess = (data: IDataItem[]) => {
    setData(data)
    setIsLoading(false)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    searchData(query, onSucess, onError)

    if (timer) {
      clearInterval(timer)
    }
    timer = window.setInterval(() => searchData(query, onSucess, onError), REQUEST_INTERVAL)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)

  return(
        <React.Fragment>
            <form className="c-form" onSubmit={onSubmit}>
                <FormInput onChange={onChange} />
                <Button>Search</Button>
                { isLoading && <LoadingSpinner />}
                { error && <span className="c-form-error">{error}</span> }
            </form>
            <Table data={data}/>
        </React.Fragment>
  );
}

export default LiveWall