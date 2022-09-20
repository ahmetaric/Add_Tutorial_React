import React, { useEffect, useState } from 'react'
import AddTutorial from '../components/AddTutorial'
import TutorialList from '../components/TutorialList'
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState();
  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  //!GET(read)
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  //!POST(create)
  const addTutorial = async(tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
    
  };

  const deleteTutorial = async(id)=>{
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error)
    }
    getTutorials(); 
  }

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} deleteTutorial = {deleteTutorial} />
    </>
  );
}

export default Home