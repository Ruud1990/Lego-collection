import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Sets = () => {
    const [sets, setSets] = useState([]);

    useEffect (() => {
        const fetchSets = async () => {
            try {
                const res = await axios.get('http://localhost:8800/sets');
                setSets(res.data);
                console.log(res.data);
            } catch(error) {
                console.log(error)
            }
        }
        fetchSets()
    }, [])

    const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/sets/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
        <h1>My Lego collection</h1>
    <div className="sets">
       {sets.map((set) => (
          <div key={set.id} className="set">
            <img src={set.cover} alt="" />
            <h3>{set.name}</h3>
            <p>{set.category}</p>
            <span>${set.price}</span>
            <button className='delete' onClick={() => handleDelete(set.id)}>Delete</button>
            <button className='update'><Link to={`/update/${set.id}`}>Update</Link></button>
          </div>
        ))}
    </div>    
    <button>
        <Link to='/add'>Add new set</Link>
    </button>
    </div>
  )
}

export default Sets