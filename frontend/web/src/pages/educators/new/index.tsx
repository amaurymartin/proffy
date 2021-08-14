import Header from '../../../components/header'

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

          <div className="input-block">
            <label htmlFor="name">
              Full Name
              <input type="text" id="name" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="avatar">
              Avatar
              <input type="text" id="avatar" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="name">
              Whatsapp
              <input type="text" id="whatsapp" />
            </label>
          </div>

          <div className="text-area-block">
            <label htmlFor="bio">
              Bio
              <textarea id="bio" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Classes</legend>

          <div className="input-block">
            <label htmlFor="subject">
              Subject
              <input type="text" id="subject" />
            </label>
          </div>

          <div className="input-block">
            <label htmlFor="price">
              Price per hour
              <input type="number" id="price" step=".01" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Schedule</legend>
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
