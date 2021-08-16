import Header from '../../../components/header'
import Input from '../../../components/input'
import Select from '../../../components/select'

import warningIcon from '../../../assets/images/icons/warning.svg'

import './styles.css'

const EducatorsNew = (): JSX.Element => {
  return (
    <div id="educators-new" className="container">
      <Header
        title="It's amazing that you want to teach classes"
        subtitle="Fill the form to start teaching"
      />

      <main>
        <fieldset>
          <legend>Personal data</legend>

          <Input name="name" label="Full Name" type="text" />
          <Input name="avatar" label="Avatar" type="text" />
          <Input name="whatsapp" label="Whatsapp" type="text" />

          <div className="text-area-block">
            <label htmlFor="bio">
              Bio
              <textarea id="bio" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Classes</legend>

          <Select
            name="subject"
            label="Subject"
            placeholder="Select your subject"
            options={[
              { value: 'ENGLISH', label: 'English' },
              { value: 'LITERATURE', label: 'Literature' },
              { value: 'SPEECH', label: 'Speech' },
              { value: 'WRITING', label: 'Writing' },
              { value: 'FOREIGN', label: 'Foreign Language' },
              { value: 'GEOGRAPHY', label: 'Geography' },
              { value: 'HISTORY', label: 'History' },
              { value: 'ECONOMICS', label: 'Economics' },
              { value: 'MATH', label: 'Math' },
              { value: 'ALGEBRA', label: 'Algebra' },
              { value: 'GEOMETRY', label: 'Geometry' },
              { value: 'STATISTICS', label: 'Statistics' },
              { value: 'TRIGONOMETRY', label: 'Trigonometry' },
              { value: 'SCIENCE', label: 'Science' },
              { value: 'BIOLOGY', label: 'Biology' },
              { value: 'CHEMISTRY', label: 'Chemistry' },
              { value: 'PHYSICS', label: 'Physics' },
            ]}
          />

          <div className="input-block">
            <label htmlFor="price">
              Price per hour
              <input type="number" id="price" step=".01" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            Schedule
            <button type="button">+ Add schedule</button>
          </legend>

          <div className="schedule">
            <Select
              name="day"
              label="Week Day"
              placeholder="Select the best day for you"
              options={[
                { value: '0', label: 'Sunday' },
                { value: '1', label: 'Monday' },
                { value: '2', label: 'Tuesday' },
                { value: '3', label: 'Wednesday' },
                { value: '4', label: 'Thursday' },
                { value: '5', label: 'Friday' },
                { value: '6', label: 'Saturday' },
              ]}
            />

            <Input name="start-time" label="Start" type="time" />
            <Input name="end-time" label="End" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Warning" />
            Warning! <br />
            Fill all fields
          </p>

          <button type="submit">Submit</button>
        </footer>
      </main>
    </div>
  )
}

export default EducatorsNew
