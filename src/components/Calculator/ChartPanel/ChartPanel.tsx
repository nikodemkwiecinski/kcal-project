import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataProps {
  date: string,
  weight: number
}

const ChartPanel: React.FC = () => {

  const [data, setData] = useState<Array<DataProps>>([])
  const [weight, setWeight] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [weightError, setWeightError] = useState<boolean>(false);
  const [dateError, setDateError] = useState<boolean>(false);
  const [dateLowerThanTodayError, setDateLowerThanTodayError ] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [emptyDate, setEmptyDate] = useState<boolean>(false);

  const dateInChartErrorMessage = dateError ? <p className='mt-4 text-center font-bold text-red-700'>Date already in chart</p> : null;
  const weightErrorMessage = weightError ? <p className='mt-4 text-center font-bold text-red-700'>Weight must have positive value</p> : null;
  const emptyDateMessage = emptyDate ? <p className='mt-4 text-center font-bold text-red-700'>Date input left empty</p> : null;
  const dateLowerThanTodayErrorMessage = dateLowerThanTodayError ? <p className='mt-4 text-center font-bold text-red-700'>Dates must be greater than or equal to today</p> : null;
  const dataSavedMessage = isCorrect ? <p className='mt-4 text-center font-bold'>Data saved</p> : null;

  const handleDataSaved = () => {
    setIsCorrect(false);
  }

  const handleDateError = () => {
    setDateError(false);
  }

  const handleEmptyDateError = () => {
    setEmptyDate(false);
  }

  const handleWeightError = () => {
    setWeightError(false);
  }

  const handleDateLowerThanTodayError = () => {
    setDateLowerThanTodayError(false);
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const chceckData: DataProps | undefined = data.find(elem => elem.date === date);
    const correctDate: boolean = parseInt(`${date[date.length - 2]}${[date.length-1]}`) < new Date().getDate() ? false : true;
    if(weight > 0 && chceckData === undefined && correctDate && date.length === 10){
      setData([...data, {
        date,
        weight
      }])
      setIsCorrect(true);
      setTimeout(handleDataSaved, 3000);
    }else if(weight < 1){
      setWeightError(true);
      setTimeout(handleWeightError, 3000);
    }else if(chceckData !== undefined){
      setDateError(true);
      setTimeout(handleDateError, 3000);
    }else if(!correctDate){
      setDateLowerThanTodayError(true);
      setTimeout(handleDateLowerThanTodayError, 3000);
    }else if(date.length !== 10){
      setEmptyDate(true);
      setTimeout(handleEmptyDateError, 3000);
    }
  }

  return (
    <section className='w-full h-full'>
      <div className='h-full w-full flex flex-col'>
        <div className='h-3/5 my-auto justify-around'>
          <h2 className='text-dark-blue w-4/5 mx-auto mb-2 text-center font-bold text-2xl'>Weight chart</h2>
          <ResponsiveContainer width='90%' height='90%' className='mr-auto'>
            <LineChart className='w-full h-full' data={data}>
              <CartesianGrid strokeDasharray='3 3'/>
              <XAxis dataKey='date'/>
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line type='monotone' dataKey='weight' stroke='#243950' activeDot={{r: 8}}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='h-1/3 flex my-auto justify-around'>
          <form onSubmit={handleSubmit} className='shadow text-dark-blue w-4/5 rounded border-2 p-4 border-extra-light-blue border-solid 2xl:overflow-auto lg:overflow-y-scroll'>
            <h2 className='text-dark-blue w-4/5 mx-auto text-center font-bold text-2xl my-2'>Add new data to chart</h2>
            <label htmlFor="" className='block text-center font-bold mt-2'>
              Weight:
              <input type="number" name="" id="" value={weight} onChange={event => setWeight(parseInt(event.target.value))}/>
            </label>
            <label htmlFor="" className='block text-center font-bold mt-2'>
              Date:
              <input type="date" name="" id="" value={date} onChange={event => setDate(event.target.value)} className='block'/>
            </label>
            <label htmlFor="" className='block text-center font-bold mt-2'>
              <input type="submit" value="Submit" className='block bg-dark-blue mx-auto 2xl:h-10 h-8 2xl:w-32 w-24 mt-8 text-white font-bold rounded shadow cursor-pointer'/>
            </label>
            {dataSavedMessage}
            {dateInChartErrorMessage}
            {weightErrorMessage}
            {dateLowerThanTodayErrorMessage}
            {emptyDateMessage}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ChartPanel;