import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [set, setSet] = useState({
        name:"",
        category:"",
        price:null,
        cover:"",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setSet((prev) => ({...prev, [e.target.name]: e.target.value}) )
    }
    console.log(set);

    const handleClick = async (e) => {
        e.preventDefault();
        navigate('/');
        try{
            await axios.post('http://localhost:8800/sets', set)
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className='form'>
        <h1>Add new set</h1>
        <input type='text' placeholder='name' name='name' onChange={handleChange}/>
        <input type='text' placeholder='category' name='category' onChange={handleChange}/>
        <input type='number' placeholder='price' name='price' onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add