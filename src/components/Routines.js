import React, { useEffect, useState } from "react";//zzz
import { useNavigate } from "react-router-dom";



const Routines = () => {
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const [routines, setRoutines] = useState([])
  const navigate = useNavigate()
  useEffect(() => {

    const myData = async () => {

      try {
        const response = await fetch(`/api/routines`)
        const result = await response.json();

        setRoutines(result)
      } catch (err) {
        console.error(err);
      }
    }
    myData()
  }, [])

  const allRoutines = routines.map((routine, i) => {
    return (
      <li key={i} className='routine'>
        <div>
          <h4>Creator Name: {routine.creatorName}</h4>
          <h4>Routine Name: {routine.name}</h4>
          <h4>Routine Goal: {routine.goal}</h4>
          <h3> Activities </h3>
          {routine.activities.map((activity, i) => {
            return (
              <div>
                <h4>Activity: {activity.name}</h4>
                <h5>Description: {activity.description}</h5>
                <h6>Duration: {activity.duration}</h6>
                <h6>Count: {activity.count}</h6>
                
              </div>
            )

          })
          }
        </div>
      </li>
    )
  })

  return (
    <>
      <ul>
        {allRoutines}
      </ul>
    </>
  )
}

export default Routines