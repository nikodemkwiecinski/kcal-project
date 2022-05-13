import React, { useContext } from 'react';

const Meal: React.FC = () => {
  return (
    <section className=' overflow-y-scroll'>
      <div>
        <div>
          <p>Breakfast</p>
          <p>{550} kcal</p>
        </div>
        <div>
          <p>Total</p>
          <div className='flex'>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
          </div>
        </div>
        <div>
          <p>Snack 1</p>
          <p>{550} kcal</p>
        </div>
        <div>
          <p>Total</p>
          <div className='flex'>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
          </div>
        </div>
        <div>
          <p>Lunch</p>
          <p>{550} kcal</p>
        </div>
        <div>
          <p>Total</p>
          <div className='flex'>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
          </div>
        </div>
        <div>
          <p>Snack 2</p>
          <p>{550} kcal</p>
        </div>
        <div>
          <p>Total</p>
          <div className='flex'>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
          </div>
        </div>
        <div>
          <p>Dinner</p>
          <p>{550} kcal</p>
        </div>
        <div>
          <p>Total</p>
          <div className='flex'>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
            <span className='block'>
              {50}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Meal;