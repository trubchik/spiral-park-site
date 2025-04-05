import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 gap-16">

      {/* Hero Section */}
      <section className="text-center max-w-5xl">
        <h1 className="text-5xl font-extrabold mb-6">Spiral Park, Madeira</h1>
        <p className="text-xl leading-relaxed">
          Spiral — это живое пространство трансформации и коллективного творчества,
          рожденное среди природы Мадейры. Мы создаём карту смыслов, событий и объектов,
          каждый из которых — это история, подарок и приглашение к сотворчеству.
        </p>
      </section>

      {/* About Spiral */}
      <section className="max-w-4xl space-y-4">
        <h2 className="text-3xl font-semibold">О Spiral</h2>
        <p>
          Spiral — это культура, место силы и платформа для исследований, глубинного взаимодействия с собой, с другими и с природой.
        </p>
        <p>
          В центре Spiral лежит символ спирали — как путь развития, расширения сознания, возвращения к себе и выхода за пределы.
        </p>
        <p>
          Мы создаём здесь карту: состояний, смыслов, объектов, историй. Это пространство, где человек может вспомнить себя творцом.
        </p>
      </section>

      {/* Spiral Stories */}
      <section className="max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-4">Spiral Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Temple", desc: "Центр силы и событий Spiral" },
            { title: "Беседка на дереве", desc: "Уединение и связь с природой" },
            { title: "Домики для проживания", desc: "Временный дом в мире Spiral" },
            { title: "Телескоп", desc: "Окно в космос и в себя" },
            { title: "Качель для бани", desc: "Точка покоя и медитации" },
            { title: "Терраса для йоги", desc: "Движение и дыхание на фоне гор" },
            { title: "Лаунж зона", desc: "Пространство интеграции и отдыха" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-4">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-4">Афиша событий</h2>
        <ul className="space-y-4">
          {[
            { date: "06.04", title: "Gong Bath", desc: "Звуковая церемония с гонгами и вибрацией тела" },
            { date: "13.04", title: "Ecstatic Dance", desc: "Вечер свободы и движения под открытым небом" },
            { date: "20.04", title: "Breathwork Journey", desc: "Глубокая дыхательная практика" },
            { date: "27.04", title: "Sauna Ritual", desc: "Церемония очищения и соединения" },
          ].map((event, index) => (
            <li key={index} className="bg-white shadow rounded-xl p-4">
              <strong>{event.date} — {event.title}</strong>: {event.desc}
            </li>
          ))}
        </ul>
      </section>

      {/* Contacts */}
      <section className="max-w-4xl w-full">
        <h2 className="text-3xl font-semibold mb-4">Контакты</h2>
        <div className="bg-white shadow rounded-xl p-4 space-y-2">
          <p>Email: <a className="text-blue-500" href="mailto:rtrubchik@gmail.com">rtrubchik@gmail.com</a></p>
          <p>Telegram: <a className="text-blue-500" href="https://t.me/trubchik">@trubchik</a></p>
          <p>Instagram: <a className="text-blue-500" href="http://instagram.com/spiral_madeira" target="_blank">@spiral_madeira</a></p>
        </div>
      </section>

    </main>
  );
}
