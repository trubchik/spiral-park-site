export default function Home() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto space-y-12 text-gray-900">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Spiral Park, Madeira</h1>
        <p className="text-lg">
          Spiral — это живое пространство трансформации и коллективного творчества,
          рождённое среди природы Мадейры. Мы создаём карту смыслов, событий и объектов,
          каждый из которых — это история, подарок и приглашение к сотворчеству.
        </p>
      </section>

      {/* О проекте */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">О проекте</h2>
        <p>
          Spiral — это не просто место, а культура. Физические пространства (сауна, студии, природа) служат инструментами
          для самоисследования, творчества и единения. Центральная метафора — спираль — символизирует рост и выход на
          уровень Творца.
        </p>
      </section>

      {/* Структура пространства */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Зоны Spiral</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Церемониальные зоны</strong> — сауна, релакс-зоны, душевые, террасы</li>
          <li><strong>Креативно-образовательные</strong> — студии, амфитеатр, лекторий</li>
          <li><strong>Экологические</strong> — огород, сад, пасека</li>
          <li><strong>Жилые</strong> — глэмпинг, нео-юрты, эко-дома</li>
          <li><strong>Инфраструктура</strong> — дорожки, парковка, технические постройки</li>
        </ul>
      </section>

      {/* Spiral Stories */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Spiral Stories</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Temple</strong> — центр силы и событий Spiral</li>
          <li><strong>Беседка на дереве</strong> — уединение и связь с природой</li>
          <li><strong>Домики для проживания</strong> — временный дом в мире Spiral</li>
          <li><strong>Телескоп</strong> — окно в космос и в себя</li>
          <li><strong>Качель для бани</strong> — точка покоя и медитации</li>
          <li><strong>Терраса для йоги</strong> — движение и дыхание на фоне гор</li>
          <li><strong>Лаунж зона для бани</strong> — пространство интеграции и отдыха</li>
        </ul>
      </section>

      {/* Афиша событий */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Афиша событий</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>06.04 — Gong Bath</strong>: звуковая церемония с гонгами</li>
          <li><strong>13.04 — Ecstatic Dance</strong>: вечер движения под открытым небом</li>
          <li><strong>20.04 — Breathwork Journey</strong>: практика дыхания и раскрытия</li>
          <li><strong>27.04 — Sauna Ritual</strong>: церемония очищения и соединения</li>
        </ul>
      </section>

      {/* Контакты */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Контакты</h2>
        <p>Email: <a className="text-blue-500" href="mailto:rtrubchik@gmail.com">rtrubchik@gmail.com</a></p>
        <p>Telegram: <a className="text-blue-500" href="https://t.me/trubchik">@trubchik</a></p>
        <p>Instagram: <a className="text-blue-500" href="http://instagram.com/spiral_madeira" target="_blank">@spiral_madeira</a></p>
      </section>
    </main>
  );
}
