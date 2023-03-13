import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Update = () => {
    const [set, setSet] = useState({
        name:"",
        category:"",
        price:null,
        cover:"",
    })

    const navigate = useNavigate();
    const location = useLocation();

   const setId = location.pathname.split('/')[2];

    const handleChange = (e) => {
        setSet((prev) => ({...prev, [e.target.name]: e.target.value}) )
    }
    console.log(set);

    const handleClick = async (e) => {
        e.preventDefault();
        navigate('/');
        try{
            await axios.put('http://localhost:8800/sets/' + setId, set)
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className='form'>
        <h1>Edit set</h1>
        <input type='text' placeholder='name' name='name' onChange={handleChange}/>
        <input type='text' placeholder='category' name='category' onChange={handleChange}/>
        <input type='number' placeholder='price' name='price' onChange={handleChange}/>
        <button className='formBtn' onClick={handleClick}>Edit</button>
    </div>
  )
}

export default Update