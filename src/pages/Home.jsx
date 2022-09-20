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
  const addTutorial = (tutorial) => {
    console.log("add");
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} />
    </>
  );
}

export default Home