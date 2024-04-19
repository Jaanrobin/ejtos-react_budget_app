import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch,currency  } = useContext(AppContext);

    const setCurrency = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }

    return (
        <div>
            <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                  <select value={currency}className="form-select" style={{backgroundColor:'lime'}} id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                    <option value="$" name="Dollar" > $ Dollar</option>
                    <option value="£" name="Pound">£ Pound</option>
                    <option value="€" name="Euro">€ Euro</option>
                    <option value="₹" name="Ruppee">₹ Ruppee</option>
                  </select>
                </div>
            </div>

        </div>
    );
};

export default Currency;