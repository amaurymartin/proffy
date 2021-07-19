import Header from '../../../components/header'
import Educator from '../../../components/Educator'

import './styles.css'

const EducatorsIndex = (): JSX.Element => {
  return (
    <div id="educators-index" className="container">
      <Header text="These are the available educators">
        <form id="educators-search">
          <div className="educators-search">
            <label htmlFor="subject">
              Subject
              <select id="subject">
                <option value="0">Select your subject</option>
              </select>
            </label>
          </div>

          <div className="educators-search">
            <label htmlFor="day">
              Week day
              <select id="day">
                <option value="0">Select the best day for you</option>
              </select>
            </label>
          </div>

          <div className="educators-search">
            <label htmlFor="time">
              Time
              <select id="time">
                <option value="0">Select the best time for you</option>
              </select>
            </label>
          </div>
        </form>
      </Header>

      <main>
        <Educator />
        <Educator />
        <Educator />
        <Educator />
        <Educator />
      </main>
    </div>
  )
}

export default EducatorsIndex
