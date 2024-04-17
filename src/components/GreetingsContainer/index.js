import {useState} from 'react'
import Greeting from '../Greeting'
import './index.css'

const GreetingsContainer = props => {
  const {languageGreetingsList} = props

  //   const [activeTab, setActiveTab] = useState(languageGreetingsList[0].id)
  const [greetingDetails, setGreetingDetails] = useState(
    languageGreetingsList[0],
  )

  const updateGreeting = lang => setGreetingDetails(lang)

  return (
    <div className="bg-container">
      <div className="inner-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="list-container">
          {languageGreetingsList.map(eachLang => {
            const buttonStyle =
              greetingDetails.id === eachLang.id
                ? 'button active'
                : 'button not-active'

            return (
              <li className="list-item" key={eachLang.id}>
                <button
                  onClick={() => updateGreeting(eachLang)}
                  className={buttonStyle}
                  type="button"
                >
                  {eachLang.buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        <Greeting details={greetingDetails} />
      </div>
    </div>
  )
}

export default GreetingsContainer
