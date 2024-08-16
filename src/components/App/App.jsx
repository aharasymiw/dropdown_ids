import { useEffect, useState } from 'react'

import axios from 'axios';

function App() {
  const [options, setOptions] = useState([]);
  const [entries, setEntries] = useState([]);

  const [newEntry, setNewEntry] = useState('');
  const [newOption, setNewOption] = useState(0);


  useEffect(() => {
    fetchOptions();
    fetchEntries();
  }, []);

  const fetchOptions = () => {
    axios.get('/api/data/options')
      .then((result) => {
        console.log('GET /api/data/options successful:', result.data);
        setOptions(result.data);
      })
      .catch((err) => {
        console.log('GET /api/data/options failed:', err);
      })
  };

  const fetchEntries = () => {
    axios.get('/api/data/entries')
      .then((result) => {
        console.log('GET /api/data/entries successful:', result.data);
        setEntries(result.data);
      })
      .catch((err) => {
        console.log('GET /api/data/entries failed:', err);
      })
  };

  const submitEntry = (evt) => {
    evt.preventDefault();

    if (newOption === 0) {
      alert('You must choose an option before submitting');
      return;
    }

    axios.post('/api/data/entries', { newEntry, newOption })
      .then((result) => {
        fetchEntries();
        console.log('POST /api/data/entries successful:', result);
        setNewEntry("");
        setNewOption(0);
      })
      .catch((err) => {
        console.log('POST /api/data/entries failed:', err);
      })
  }

  return (
    <>

      <form onSubmit={submitEntry}>
        <label htmlFor="newEntry">Entry</label>
        <input id="newEntry" value={newEntry} onChange={(evt) => setNewEntry(evt.target.value)} required></input>

        <label htmlFor="newOption">Option</label>
        <select id="newOption" value={newOption} onChange={(evt) => setNewOption(evt.target.value)}>
          <option value={0} disabled>Select your option</option>
          {
            options.map((option) => {
              return (
                <option key={option.id} value={option.id}>{option.optionText}</option>
              );
            })
          }
        </select>

        <button type="submit">Sumbit</button>

      </form>

      <ul>
        {
          entries.map((entry) => {
            return (
              <li key={entry.id}>
                <p>Entry: {entry.entryText}</p>
                <p>Option: {entry.optionText}</p>
              </li>
            );
          })
        }
      </ul>

    </>
  )
}

export default App
