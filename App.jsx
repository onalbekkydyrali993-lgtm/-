import './App.css'
import Card from './Card.jsx'

function App() {
  return (
    <div className="resume-container">

      {/* Сол жақ профиль */}
      <div className="left-side">
        <Card />
      </div>

      {/* Оң жақ резюме */}
      <div className="right-side">

        <h1>РЕЗЮМЕ</h1>

        <section>
          <h2>Өзім туралы</h2>
          <p>
            Жауапкершілігі мол, шығармашылық қабілеті жоғары,
            жаңа нәрселерді үйренуге қызығушылығы бар адаммын.
          </p>
        </section>

        <section>
          <h2>Білім</h2>
          <p>Оқу орны: Жургенов атындагы казак онер акадамиясы</p>
          <p>Мамандығы: Актриса</p>
        </section>

        <section>
          <h2>Жұмыс тәжірибесі</h2>
          <p>Жұмыс орны: __________________</p>
          <p>Қызметі: __________________</p>
        </section>

        <section>
          <h2>Кәсіби дағдылар</h2>
          <ul>
            <li>Командамен жұмыс жасау</li>
            <li>Қарым-қатынас жасау</li>
            <li>Шығармашылық қабілет</li>
            <li>Жауапкершілік</li>
          </ul>
        </section>

        <section>
          <h2>Қызығушылықтар</h2>
          <p>Актерлік өнер, сахна, ән айту, театр.</p>
        </section>

      </div>
    </div>
  )
}

export default App