import React, { useState } from "react";
import "./styles.css";

const serviceoption = [
  { title: "Dissatisfied(0%)", value: 0 },
  { title: "It was Okay(5%)", value: 0.05 },
  { title: "It was Good(10%)", value: 0.1 },
  { title: "Absolutely Amazing!(20%)", value: 0.2 },
];

function InputSection({ bill, setBill }) {
  return (
    <div>
      <h1>How much was the bill?</h1>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function Servicetome({ me, setme }) {
  return (
    <div>
      <h1>How did you like the service?</h1>
      <select value={me} onChange={(e) => setme(e.target.value)}>
        {serviceoption.map((e, i) => (
          <option value={serviceoption[i].value}>
            {serviceoption[i].title}
          </option>
        ))}
      </select>
    </div>
  );
}

function Servicetofriend({ friend, setfriend }) {
  return (
    <div>
      <h1>How did your friend like the service?</h1>
      <select value={friend} onChange={(e) => setfriend(e.target.value)}>
        {serviceoption.map((e, i) => (
          <option value={serviceoption[i].value}>
            {serviceoption[i].title}
          </option>
        ))}
      </select>
    </div>
  );
}

function TotalBill({ totalcost, tip1, tip2, newbill }) {
  const tipone = (Number(totalcost) * (Number(tip1) + Number(tip2))) / 2;
  const totalBill = Number(totalcost) + Number(tipone);
  return (
    <div>
      <h1>
        {Number(totalcost) > 0 &&
          `you pay $${totalBill} ($${totalcost} + $${tipone} tip)`}
      </h1>
      {Number(totalcost) > 0 && <button onClick={newbill}>Reset</button>}
    </div>
  );
}

export default function App() {
  const [cost, setCost] = useState(null);
  const [serviceme, SetServiceme] = useState(0);
  const [servicefriend, SetServicefriend] = useState(0);

  function handleBill(charges) {
    setCost((cost) => charges);
  }

  function resetfunc() {
    setCost("");
    SetServiceme((serviceme) => 0);
    SetServicefriend((servicefriend) => 0);
  }

  return (
    <div>
      <InputSection bill={cost} setBill={handleBill} />
      <Servicetome me={serviceme} setme={SetServiceme} />
      <Servicetofriend friend={servicefriend} setfriend={SetServicefriend} />
      <TotalBill
        totalcost={cost}
        tip1={serviceme}
        tip2={servicefriend}
        newbill={resetfunc}
      />
    </div>
  );
}
