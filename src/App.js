import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  const [colorName, setColorName] = useState('');

  return (
    <div className="container">
      <h2 className="text-center pt-5">Color Test</h2>
      <div className="row g-3 d-flex justify-content-center">
        <div className="col-sm-8 color__area">
          <div className="form-group pt-3">
            <textarea style={{ backgroundColor: `${colorName}` }} className="form-control" placeholder="Here, you will see your color area..." id="colorTextarea" rows="6"></textarea>
            <label htmlFor="colorTextarea" className="col-form-label fs-5 pt-3">Showing the Color Text-area : <i className="ms-2 fs-3 fas fa-arrow-turn-up"></i></label>
          </div>
          <div className="form-group pt-3">
            <label htmlFor="ColorCodeInput" className="col-form-label fs-5">Write Color Code Or Name : <i className="ms-2 fs-5 fas fa-arrow-turn-down"></i></label>
            <input type="email" className="form-control" id="ColorCodeInput" placeholder="Write here color code or, name ..." onChange={(e) => setColorName(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
