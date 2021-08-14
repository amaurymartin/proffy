import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const Educator = (): JSX.Element => {
  return (
    <article className="educator">
      <header>
        <img
          src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt="First Educator"
        />
        <div>
          <strong>John Doe</strong>
          <span>Math</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        <br />
        Donec fermentum nibh ante, sed accumsan arcu cursus et. Donec ultrices,
        tellus eget ultrices interdum, tellus metus interdum sapien, eu
        fringilla magna lacus sit amet dolor.
      </p>

      <footer>
        <p>
          Per hour
          <strong>USD 4.20</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Contact
        </button>
      </footer>
    </article>
  )
}

export default Educator
