import { ChangeEvent, FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../../components/header'
import Input from '../../../components/input'
import Select from '../../../components/select'

import api from '../../../services/api'

import warningIcon from '../../../assets/images/icons/warning.svg'

import './styles.css'

type Schedule = {
  weekDay: number
  startsAt: string
  endsAt: string
}

const EducatorsNew = (): JSX.Element => {
  const history = useHistory()

  const [schedule, setSchedule] = useState<Schedule[]>([
    { weekDay: 0, startsAt: '', endsAt: '' },
  ])

  const [formData, setFormData] = useState({
    name: '',
    avatar: '',
    whatsapp: '',
    bio: '',
    subject: '',
    price: 0.0,
  })

  function addSchedule() {
    setSchedule([
      ...schedule,
      {
        weekDay: 0,
        startsAt: '',
        endsAt: '',
      },
    ])
  }

  function fillForm(event: ChangeEvent<HTMLElement>) {
    if (event.target.nodeName === 'INPUT') {
      const inputEvent = event as ChangeEvent<HTMLInputElement>
      const { name, value } = inputEvent.target
      setFormData({ ...formData, [name]: value })
    } else if (event.target.nodeName === 'TEXTAREA') {
      const selectEvent = event as ChangeEvent<HTMLTextAreaElement>
      const { name, value } = selectEvent.target
      setFormData({ ...formData, [name]: value })
    } else if (event.target.nodeName === 'SELECT') {
      const selectEvent = event as ChangeEvent<HTMLSelectElement>
      const { name, value } = selectEvent.target
      setFormData({ ...formData, [name]: value })
    }
  }

  function fillScheduleData(event: ChangeEvent<HTMLElement>, position: number) {
    const selectEvent = event as ChangeEvent<HTMLSelectElement>
    const { name, value } = selectEvent.target
    const newSchedule = schedule.map((item, index) => {
      if (index === position) return { ...item, [name]: value }

      return item
    })

    setSchedule(newSchedule)
  }

  async function createEducator(event: FormEvent) {
    event.preventDefault()
    const { name, avatar, whatsapp, bio, subject, price } = formData

    const payload = {
      educator: {
        name,
        avatar,
        whatsapp,
        bio,
        class: {
          subject,
          price,
        },
        schedule,
      },
    }

    await api
      .post('educators', payload)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Educator created')
        history.push('/')
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on creating educator. Check your data and try again')
      })
  }

  return (
    <div id="educators-new" className="container">
      <Header
        title="It's amazing that you want to teach classes"
        subtitle="Fill the form to start teaching"
      />

      <main>
        <form onSubmit={createEducator}>
          <fieldset>
            <legend>Personal data</legend>

            <Input
              name="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={fillForm}
            />
            <Input
              name="avatar"
              label="Avatar"
              type="text"
              value={formData.avatar}
              onChange={fillForm}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              type="text"
              value={formData.whatsapp}
              onChange={fillForm}
            />

            <div className="text-area-block">
              <label htmlFor="bio">
                Bio
                <textarea name="bio" value={formData.bio} onChange={fillForm} />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Classes</legend>

            <Select
              name="subject"
              label="Subject"
              placeholder="Select your subject"
              value={formData.subject}
              onChange={fillForm}
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
                <input
                  name="price"
                  type="number"
                  step=".01"
                  value={formData.price}
                  onChange={fillForm}
                />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              Schedule
              <button type="button" onClick={addSchedule}>
                + Add schedule
              </button>
            </legend>

            {schedule.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className="schedule">
                <Select
                  name="weekDay"
                  label="Week Day"
                  placeholder="Select the best day for you"
                  value={item.weekDay}
                  options={[
                    { value: '0', label: 'Sunday' },
                    { value: '1', label: 'Monday' },
                    { value: '2', label: 'Tuesday' },
                    { value: '3', label: 'Wednesday' },
                    { value: '4', label: 'Thursday' },
                    { value: '5', label: 'Friday' },
                    { value: '6', label: 'Saturday' },
                  ]}
                  onChange={(event) => fillScheduleData(event, index)}
                />

                <Input
                  name="startsAt"
                  label="Start"
                  type="time"
                  value={item.startsAt}
                  onChange={(event) => fillScheduleData(event, index)}
                />
                <Input
                  name="endsAt"
                  label="End"
                  type="time"
                  value={item.endsAt}
                  onChange={(event) => fillScheduleData(event, index)}
                />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Warning" />
              Warning! <br />
              Fill all fields
            </p>

            <button type="submit">Submit</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default EducatorsNew
