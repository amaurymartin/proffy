import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import Header from '../../../components/header'
import Select from '../../../components/select'
import Input from '../../../components/input'
import Educator from '../../../components/educator'

import api from '../../../services/api'

import './styles.css'

type ClassIndexResponse = {
  classes: Class[]
}

type Class = {
  key: string
  subject: string
  description: string
  price: number
  status: number
  educator: {
    key: string
    avatar: string
    name: string
    bio: string
    email: string
    whatsapp: string
  }
}

const EducatorsIndex = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [classes, setClasses] = useState<Class[]>([])
  const [searchParams, setSearchParams] = useState({
    subject: '',
    weekDay: '',
    time: '',
  })

  useEffect(() => {
    api
      .get<ClassIndexResponse>('classes')
      .then((response) => {
        setClasses(response.data.classes)
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on searching classes. Try again')
      })
  }, [])

  function addQueryParam(event: ChangeEvent<HTMLElement>) {
    if (event.target.nodeName === 'SELECT') {
      const selectEvent = event as ChangeEvent<HTMLSelectElement>
      const { name, value } = selectEvent.target
      setSearchParams(Object.assign(searchParams, { [name]: value }))
    } else if (event.target.nodeName === 'INPUT') {
      const inputEvent = event as ChangeEvent<HTMLInputElement>
      const { name, value } = inputEvent.target
      setSearchParams(Object.assign(searchParams, { [name]: value }))
    }
  }

  function mountQueryParams() {
    let queryParams = {}

    if (searchParams.subject !== '')
      queryParams = { subject: searchParams.subject }
    if (searchParams.weekDay !== '') {
      queryParams = Object.assign(queryParams, {
        weekDay: searchParams.weekDay,
      })
    }
    if (searchParams.time !== '')
      queryParams = Object.assign(queryParams, { time: searchParams.time })

    if (queryParams === {}) return {}

    return { params: queryParams }
  }

  async function searchClasses(event: FormEvent) {
    event.preventDefault()

    await api
      .get<ClassIndexResponse>('classes', mountQueryParams())
      .then((response) => {
        setClasses(response.data.classes)
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Error on searching classes. Try again')
      })
  }

  return (
    <div id="educators-index" className="container">
      <Header title="These are the available educators">
        <form id="educators-search" onSubmit={searchClasses}>
          <Select
            name="subject"
            label="Subject"
            placeholder="Select your subject"
            options={[
              { value: '', label: 'Any' },
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
            onChange={(event) => addQueryParam(event)}
          />

          <Select
            name="weekDay"
            label="Week Day"
            placeholder="Select the best day"
            options={[
              { value: '', label: 'Any' },
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
            onChange={(event) => addQueryParam(event)}
          />

          <Input
            name="time"
            label="Time"
            type="time"
            onChange={(event) => addQueryParam(event)}
          />

          <button type="submit" onClick={searchClasses}>
            Search
          </button>
        </form>
      </Header>

      <main>
        {classes.map((klass) => (
          <Educator
            key={klass.educator.key}
            educator={klass.educator}
            klassKey={klass.key}
            klassSubject={klass.subject}
            klassPrice={klass.price}
          />
        ))}
      </main>
    </div>
  )
}

export default EducatorsIndex
