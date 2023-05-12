import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incsNumber, decrNumber } from "./action/Index";
import Updown from './Reducers/Updown';


const Appa = () => {
 let values =  useSelector((data)=> data. Updown);
 let change = useDispatch();


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 text-center'>
            <h1>reac-redux project tool</h1>
            <h4>primary work done near</h4>
            <div className='mt-4'>
                <a className='btn btn primary' onClick={()=> change(decrNumber())}>-</a>
                <input type='text' value={values}/>
                <a className='btn btn primary' onClick={()=> change( incsNumber())}>+</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Appa;
