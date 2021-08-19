import Header from '../../../components/header'
import Select from '../../../components/select'
import Input from '../../../components/input'
import Educator from '../../../components/educator'

import './styles.css'

const EducatorsIndex = (): JSX.Element => {
  return (
    <div id="educators-index" className="container">
      <Header title="These are the available educators">
        <form id="educators-search">
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
            onChange={() => undefined}
          />

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
            onChange={() => undefined}
          />

          <Input
            name="time"
            label="Time"
            type="time"
            onChange={() => undefined}
          />
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
