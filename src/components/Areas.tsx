import Icon from "./Icon";

export default function Areas() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-4xl">📍</span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Obsługujemy:
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-2xl">🏙️</span>
              Warszawa - dzielnice wschodnie i północne
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Białołęka</strong> — Tarchomin, Nowodwory, Brzeziny,
                  Henryków, Choszczówka, Białołęka Dworska
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Targówek</strong> — Bródno, Zacisze
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Praga Północ</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900">
              <span className="text-2xl">🏘️</span>
              Miasta podwarszawskie
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Wschód:</strong> Marki, Ząbki, Zielonka, Wołomin,
                  Kobyłka
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">
                  <strong>Północ:</strong> Jabłonna, Łomianki, Legionowo
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-sky-200 bg-sky-50 p-6 text-center">
          <p className="text-base leading-relaxed text-slate-700">
            📞 Nie wiesz, czy obsługujemy Twoją okolicę?
            <br />
            Zadzwoń:{' '}
            <a
              href="tel:+48788304845"
              className="font-bold text-sky-600 underline hover:text-sky-700"
            >
              788 304 845
            </a>{' '}
            lub{' '}
            <a
              href="#kontakt"
              className="font-bold text-sky-600 underline hover:text-sky-700"
            >
              zostaw kontakt
            </a>{' '}
            — odpowiemy w 24h.
          </p>
        </div>
      </div>
    </section>
  );
}
