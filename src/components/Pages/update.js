/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Warning from "../warning/Warning":
import './update.css';

const Update = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(name, country);

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update your account</h3>
        {/* <Warning /> */}
        <button className="delete" type="button">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-associated-control */}
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder="Choose a username"
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="formItem">
              <label>Country</label>
              <input
                className="formInput"
                type="text"
                placeholder="Choose your contry"
                onChange={(e) => setCountry(e.target.value)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update;