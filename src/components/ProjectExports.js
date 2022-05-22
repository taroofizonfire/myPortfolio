import React from 'react'
import sips from '../images/sips2.jpg'
import leverageImg from '../images/leverageWo.jpg'
import jesterImg from '../images/jesterImg.jpg'
import expenseImg from '../images/ExpenseTracker.jpg'
import fitnessImg from '../images/fitnessTracker.jpg'

function LittleSips() {   
  return (
    <div className="text-center font-OpenSans">
          <h4 className='font-bold'>Little Sips Coffee</h4>
          <h5 className='text-sm'>Firebase User Auth / React </h5>
          <a href="https://userauth-development-9ea7a.web.app/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 w-[250px] h-[100px] mx-auto border-2 border-blue-400" src={sips} alt="Little Sips Coffee"></img>
          </a>
          <button href="https://github.com/originator1/firebase-react-userAuth/tree/main/firebase-userauth-routing" target="_blank" className=" hover:border-2 text-blue-600 bg-blue-200 pl-2 pr-2 mt-2 rounded-lg">Github Repo</button>
    </div>
  )
}

function Leverage() {

    return (
        <div className="text-center font-OpenSans">
          <h4 className='font-bold'>Leverage</h4>
          <h5 className='text-sm'>MySQL / Handlebars / Bcrypt</h5>
          <a href="https://leveragewo.herokuapp.com/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 w-[250px] h-[100px] mx-auto border-2 border-blue-400" src={leverageImg} alt="Workour Application"></img>
          </a>
          <button href="https://github.com/originator1/Leverage" target="_blank" className="hover:border-2 text-blue-600 bg-blue-200 pl-2 pr-2 mt-2 rounded-lg">Github Repo</button>
        </div>
    )
}

function Jester() {

    return (
        <div className="text-center font-OpenSans">
          <h4 className='font-bold'>Jester</h4>
          <h5 className='text-sm'>MongoDB / GraphQL / JWT</h5>
          <a href="https://jesterapp.herokuapp.com" target="_blank">
            <img className="hover:border-4 projectImg mt-1 w-[250px] h-[100px] mx-auto border-2 border-blue-400" src={jesterImg} alt="Workour Application"></img>
          </a>
          <button href="https://github.com/originator1/jester" target="_blank" className="hover:border-2 text-blue-600 bg-blue-200 pl-2 pr-2 mt-2 rounded-lg">Github Repo</button>
        </div>
    )
}

function ExpenseTracker() {

    return (
        <div className="text-center font-OpenSans">
          <h4 className='font-bold'>Expense Tracker</h4>
          <h5 className='text-sm'>IndexedDB / Service Workers</h5>
          <a href="https://afternoon-peak-77835.herokuapp.com/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 w-[250px] h-[100px] mx-auto border-2 border-blue-400" src={expenseImg} alt="Workour Application"></img>
          </a>
          <button href="https://github.com/originator1/ExpenseTracker" target="_blank" className="hover:border-2 text-blue-600 bg-blue-200 pl-2 pr-2 mt-2 rounded-lg">Github Repo</button>
        </div>
    )
}

function WorkoutTracker() {

    return (
        <div className="text-center font-OpenSans">
          <h4 className='font-bold'>Workout Tracker</h4>
          <h5 className='text-sm'>MongoDB / Mongoose / Express</h5>
          <a href="https://afternoon-peak-77835.herokuapp.com/" target="_blank">
            <img className="hover:border-4 projectImg mt-1 w-[250px] h-[100px] mx-auto border-2 border-blue-400" src={fitnessImg} alt="Workour Application"></img>
          </a>
          <button href="https://github.com/originator1/TrackMyWorkout" target="_blank" className="hover:border-2 text-blue-600 bg-blue-200 pl-2 pr-2 mt-2 rounded-lg">Github Repo</button>
        </div>
    )
}

export {LittleSips, Leverage, Jester, ExpenseTracker, WorkoutTracker}
