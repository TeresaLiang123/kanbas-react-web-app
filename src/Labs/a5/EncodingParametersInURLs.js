import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcomeMessage, setWelcomeMessage] = useState("Message before server"); 
  const [result, setResult] = useState(0);
  const API = "https://kanbas-node-server-app-kpi2.onrender.com";
  // const API =`${API_BASE}`;
  const fetchSum = async (a, b) => {
    const response = await
      axios.get(`${API}/a5/add/${a}/${b}`);
    setResult(response.data);
  };

  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(
      `${API}/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  const fetchWelcomeMessage = async () => {
  try {
    const response = await axios.get(`${API}/welcome`)
    setWelcomeMessage(response)
  } catch (error) {
    console.log(error)
  }
  };
  

  useEffect(() => {
    fetchWelcomeMessage()
    // fetchSubtraction()
    // fetchSum()
  }, [])

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      {welcomeMessage && <h5>{welcomeMessage}</h5>}
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control" type="number" value={a}/>
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control" type="number" value={b}/>
      <input value={result}
        className="form-control mb-2" type="number" readOnly
      />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2  w-100" >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger me-2 w-100" >
        Fetch Substraction of {a} - {b}
      </button>

    <h3>Query Parameters</h3>
      <a
        href={`${API}/a5/calculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`${API}/a5/calculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>
      <h3>Path Parameters</h3>
      <a
        href={`${API}/a5/add/${a}/${b}`}
        className="btn btn-primary">
        Add {a} + {b}
      </a>
      <a
        href={`${API}/a5/subtract/${a}/${b}`}
        className="btn btn-danger">
        Substract {a} - {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;