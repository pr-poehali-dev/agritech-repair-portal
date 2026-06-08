import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/4c105996-462e-4299-8b4f-40a54fd6af1f/files/4ee3195f-b4c6-40fa-8387-2468284c31d8.jpg";
const WORKSHOP_IMG = "https://cdn.poehali.dev/projects/4c105996-462e-4299-8b4f-40a54fd6af1f/files/4efaf8d0-41d1-46b1-9b07-8780e9bd96a1.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Гарантия", href: "#warranty" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Wrench", title: "Ремонт двигателей", desc: "Капитальный и текущий ремонт двигателей тракторов, комбайнов, самоходной техники" },
  { icon: "Settings", title: "Ремонт трансмиссии", desc: "Восстановление КПП, мостов, редукторов, карданных валов всех типов" },
  { icon: "Zap", title: "Электрика и диагностика", desc: "Компьютерная диагностика, ремонт электрооборудования и автоматики" },
  { icon: "Droplets", title: "Гидравлические системы", desc: "Ремонт насосов, гидроцилиндров, распределителей, шлангов высокого давления" },
  { icon: "Shield", title: "ТО и обслуживание", desc: "Плановое техническое обслуживание перед посевной и уборочной кампанией" },
  { icon: "Truck", title: "Выездной ремонт", desc: "Ремонт непосредственно на полях и фермах — выезд по всей области" },
];

const REVIEWS = [
  {
    name: "Иван Петрович Сидоров",
    role: "Фермер, Воронежская область",
    text: "Обратился с поломкой комбайна в разгар уборки. Ребята приехали через 2 часа, починили прямо на поле. Спасли весь урожай. Работают профессионально и быстро.",
    rating: 5,
  },
  {
    name: "ООО «АгроПлюс»",
    role: "Руководитель парка техники",
    text: "Обслуживаем у них весь парк — 12 единиц техники. Всегда в срок, никаких сюрпризов по цене. Гарантия реально работает — один раз обратились по гарантийному случаю, всё решили без вопросов.",
    rating: 5,
  },
  {
    name: "Сергей Анатольевич Краснов",
    role: "Фермерское хозяйство КФХ",
    text: "До этого чинились в другом месте — постоянно переделки. Здесь с первого раза сделали всё правильно. Двигатель работает как новый уже второй сезон.",
    rating: 5,
  },
];

const WARRANTY_ITEMS = [
  { icon: "BadgeCheck", title: "12 месяцев", desc: "Гарантия на все выполненные работы без исключений" },
  { icon: "Package", title: "Оригинальные запчасти", desc: "Используем только сертифицированные запчасти от проверенных поставщиков" },
  { icon: "ClipboardList", title: "Письменный договор", desc: "Фиксируем все условия и сроки документально до начала работ" },
  { icon: "PhoneCall", title: "Поддержка 5/2", desc: "Техническая консультация по телефону в рабочие дни" },
];

const TIME_SLOTS = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

const SERVICE_OPTIONS = [
  "Ремонт двигателя",
  "Ремонт трансмиссии",
  "Электрика и диагностика",
  "Гидравлические системы",
  "Техническое обслуживание",
  "Выездной ремонт",
  "Другое",
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingService, setBookingService] = useState("");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingCompany, setBookingCompany] = useState("");
  const [bookingComment, setBookingComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0D0D0D", color: "#E8DFD0" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(13,13,13,0.95)", borderBottom: "1px solid rgba(245,158,11,0.15)", backdropFilter: "blur(8px)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: "#F59E0B" }}>
              <Icon name="Wrench" size={16} style={{ color: "#111" }} />
            </div>
            <span className="font-display text-xl font-bold tracking-widest uppercase" style={{ color: "#F59E0B" }}>Сузунское РТП</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link">{l.label}</button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#booking")}
            className="hidden md:block btn-amber px-5 py-2 text-sm"
          >
            Записаться
          </button>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "#F59E0B" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(245,158,11,0.1)" }}>
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link text-left py-2">{l.label}</button>
            ))}
            <button onClick={() => scrollTo("#booking")} className="btn-amber px-5 py-2 text-sm mt-2">Записаться</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.7) 60%, rgba(13,13,13,0.3) 100%)" }} />
        <div className="absolute inset-0 industrial-grid" />

        <div className="relative max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up stagger-1">
              <div className="h-px w-12" style={{ background: "#F59E0B" }} />
              <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#F59E0B" }}>Профессиональный сервис</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up stagger-2" style={{ color: "#fff", lineHeight: "1.05" }}>
              РЕМОНТ<br />
              <span style={{ color: "#F59E0B" }}>СЕЛЬХОЗ-</span><br />
              ТЕХНИКИ
            </h1>

            <p className="text-lg mb-10 animate-fade-up stagger-3" style={{ color: "#9CA3AF", maxWidth: "480px", lineHeight: "1.7" }}>
              Капитальный ремонт тракторов, комбайнов и навесного оборудования. Выездной ремонт по всей области. Гарантия 12 месяцев.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
              <button onClick={() => scrollTo("#booking")} className="btn-amber px-8 py-4 text-base">
                Записаться на ремонт
              </button>
              <button onClick={() => scrollTo("#services")} className="btn-outline-amber px-8 py-4 text-base">
                Наши услуги
              </button>
            </div>

            <div className="flex flex-wrap gap-8 mt-14 animate-fade-up stagger-5">
              {[
                { num: "20+", label: "Лет опыта" },
                { num: "2 000+", label: "Ремонтов" },
                { num: "12 мес", label: "Гарантия" },
                { num: "5/2", label: "График работы" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold" style={{ color: "#F59E0B" }}>{s.num}</div>
                  <div className="text-sm mt-1" style={{ color: "#6B7280" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} style={{ color: "#F59E0B" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 industrial-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: "#F59E0B" }} />
            <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#F59E0B" }}>Что мы делаем</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: "#fff" }}>НАШИ УСЛУГИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="card-industrial p-8 group cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" }}>
                  <Icon name={s.icon} size={22} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#fff" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{s.desc}</p>
                <div className="flex items-center gap-2 mt-6 text-sm font-display tracking-wider uppercase" style={{ color: "#F59E0B" }}>
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12" style={{ background: "#F59E0B" }} />
                <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#F59E0B" }}>О компании</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8" style={{ color: "#fff" }}>АО СУЗУНСКОЕ РТП</h2>

              <div className="space-y-5 mb-10" style={{ color: "#9CA3AF" }}>
                <p className="leading-relaxed">
                  АО «Сузунское ремонтно-техническое предприятие» — специализированный центр ремонта и технического обслуживания сельскохозяйственной техники. Обслуживаем хозяйства и фермерские предприятия по всему региону.
                </p>
                <p className="leading-relaxed">
                  В нашей команде — сертифицированные механики с опытом работы на технике ведущих отечественных и зарубежных производителей.
                </p>
                <p className="leading-relaxed">
                  Собственный склад запасных частей, современное диагностическое оборудование и мобильные бригады для выездного ремонта прямо в поле.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Users", text: "Команда 25+ механиков" },
                  { icon: "MapPin", text: "Выезд по области" },
                  { icon: "Clock", text: "Работаем без выходных" },
                  { icon: "Star", text: "Рейтинг 4.9 из 5" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name={item.icon} size={16} style={{ color: "#F59E0B" }} />
                    <span className="text-sm" style={{ color: "#9CA3AF" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src={WORKSHOP_IMG} alt="Мастерская Сузунское РТП" className="w-full object-cover" style={{ height: "520px", filter: "brightness(0.85)" }} />
              <div className="absolute inset-0" style={{ border: "2px solid rgba(245,158,11,0.2)", margin: "16px" }} />
              <div className="absolute -bottom-6 -left-6 p-6" style={{ background: "#F59E0B", minWidth: "180px" }}>
                <div className="font-display text-4xl font-bold" style={{ color: "#111" }}>2009</div>
                <div className="font-display text-sm tracking-wider uppercase mt-1" style={{ color: "#111" }}>Год основания</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 industrial-grid" style={{ borderTop: "1px solid rgba(245,158,11,0.1)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12" style={{ background: "#F59E0B" }} />
              <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#F59E0B" }}>Онлайн-запись</span>
              <div className="h-px w-12" style={{ background: "#F59E0B" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "#fff" }}>ЗАПИСЬ НА РЕМОНТ</h2>
            <p className="mt-4" style={{ color: "#6B7280" }}>Выберите удобную дату и время — перезвоним для подтверждения</p>
          </div>

          {submitted ? (
            <div className="text-center py-16 card-industrial">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(245,158,11,0.15)", border: "1px solid #F59E0B" }}>
                <Icon name="CheckCircle" size={32} style={{ color: "#F59E0B" }} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "#fff" }}>ЗАЯВКА ПРИНЯТА!</h3>
              <p style={{ color: "#9CA3AF" }}>Перезвоним в течение 30 минут для подтверждения записи</p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline-amber px-8 py-3 text-sm mt-8"
              >
                Новая заявка
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-industrial p-8 md:p-12">
              <div className="mb-6">
                <label className="block font-display text-sm tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>Наименование предприятия заказчика</label>
                <input
                  type="text"
                  value={bookingCompany}
                  onChange={(e) => setBookingCompany(e.target.value)}
                  placeholder="ООО «Название организации»"
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{ background: "#1a1a1a", border: "1px solid rgba(245,158,11,0.2)", color: "#E8DFD0" }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-display text-sm tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    placeholder="Иван Петрович"
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{ background: "#1a1a1a", border: "1px solid rgba(245,158,11,0.2)", color: "#E8DFD0" }}
                  />
                </div>
                <div>
                  <label className="block font-display text-sm tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>Телефон *</label>
                  <input
                    type="tel"
                    required
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 text-sm outline-none"
                    style={{ background: "#1a1a1a", border: "1px solid rgba(245,158,11,0.2)", color: "#E8DFD0" }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-display text-sm tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>Вид работ *</label>
                <select
                  required
                  value={bookingService}
                  onChange={(e) => setBookingService(e.target.value)}
                  className="w-full px-4 py-3 text-sm outline-none"
                  style={{ background: "#1a1a1a", border: "1px solid rgba(245,158,11,0.2)", color: bookingService ? "#E8DFD0" : "#6B7280" }}
                >
                  <option value="" disabled>Выберите вид работ...</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s} style={{ background: "#1a1a1a" }}>{s}</option>
                  ))}
                </select>
              </div>



              <div className="mb-8">
                <label className="block font-display text-sm tracking-wider uppercase mb-2" style={{ color: "#9CA3AF" }}>Описание проблемы</label>
                <textarea
                  rows={3}
                  value={bookingComment}
                  onChange={(e) => setBookingComment(e.target.value)}
                  placeholder="Опишите неисправность, марку техники и год выпуска..."
                  className="w-full px-4 py-3 text-sm outline-none resize-none"
                  style={{ background: "#1a1a1a", border: "1px solid rgba(245,158,11,0.2)", color: "#E8DFD0" }}
                />
              </div>

              <button
                type="submit"
                className="btn-amber w-full py-4 text-base flex items-center justify-center gap-3"
              >
                <Icon name="Calendar" size={18} style={{ color: "#111" }} />
                Отправить заявку
              </button>

              <p className="text-center text-xs mt-4" style={{ color: "#4B5563" }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* WARRANTY */}
      <section id="warranty" className="py-24" style={{ borderTop: "1px solid rgba(245,158,11,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: "#F59E0B" }} />
            <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#F59E0B" }}>Надёжность</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: "#fff" }}>НАША ГАРАНТИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {WARRANTY_ITEMS.map((item, i) => (
              <div key={i} className="card-industrial p-8 text-center">
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" }}>
                  <Icon name={item.icon} size={24} style={{ color: "#F59E0B" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#F59E0B" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "#fff" }}>ГАРАНТИЙНЫЙ СЛУЧАЙ?</h3>
                <p style={{ color: "#9CA3AF" }}>Если в течение гарантийного срока возникла та же неисправность — устраняем бесплатно, без споров и задержек. Ваше время и техника слишком дорого стоят.</p>
              </div>
              <button onClick={() => scrollTo("#contacts")} className="btn-amber px-8 py-4 whitespace-nowrap">
                Позвонить нам
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 industrial-grid" style={{ borderTop: "1px solid rgba(245,158,11,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: "#F59E0B" }} />
            <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#F59E0B" }}>Клиенты о нас</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: "#fff" }}>ОТЗЫВЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card-industrial p-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>«{r.text}»</p>
                <div className="flex items-center gap-3" style={{ borderTop: "1px solid rgba(245,158,11,0.1)", paddingTop: "1.25rem" }}>
                  <div className="w-10 h-10 flex items-center justify-center font-display font-bold text-sm" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold" style={{ color: "#fff" }}>{r.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#4B5563" }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ borderTop: "1px solid rgba(245,158,11,0.1)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12" style={{ background: "#F59E0B" }} />
            <span className="font-display text-sm tracking-widest uppercase" style={{ color: "#F59E0B" }}>Связаться</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16" style={{ color: "#fff" }}>КОНТАКТЫ</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00", sub: "Звонки и WhatsApp, 24/7" },
                { icon: "MapPin", label: "Адрес", value: "г. Воронеж, ул. Промышленная, 14", sub: "Пн–Вс: 08:00 – 20:00" },
                { icon: "Mail", label: "E-mail", value: "info@agroservice.ru", sub: "Ответим в течение часа" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5 p-6 card-industrial">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" }}>
                    <Icon name={c.icon} size={20} style={{ color: "#F59E0B" }} />
                  </div>
                  <div>
                    <div className="font-display text-xs tracking-widest uppercase mb-1" style={{ color: "#4B5563" }}>{c.label}</div>
                    <div className="font-display text-lg font-semibold" style={{ color: "#fff" }}>{c.value}</div>
                    <div className="text-sm mt-1" style={{ color: "#6B7280" }}>{c.sub}</div>
                  </div>
                </div>
              ))}

              <button onClick={() => scrollTo("#booking")} className="btn-amber w-full py-4 text-base flex items-center justify-center gap-3">
                <Icon name="CalendarCheck" size={18} style={{ color: "#111" }} />
                Записаться онлайн
              </button>
            </div>

            <div className="card-industrial overflow-hidden" style={{ minHeight: "400px", position: "relative" }}>
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4" style={{ background: "#111" }}>
                <Icon name="MapPin" size={48} style={{ color: "#F59E0B" }} />
                <p className="font-display text-lg" style={{ color: "#9CA3AF" }}>г. Воронеж, ул. Промышленная, 14</p>
                <p className="text-sm" style={{ color: "#4B5563" }}>Карта откроется при нажатии</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#080808", borderTop: "1px solid rgba(245,158,11,0.15)", padding: "2rem 0" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center" style={{ background: "#F59E0B" }}>
              <Icon name="Wrench" size={12} style={{ color: "#111" }} />
            </div>
            <span className="font-display tracking-widest uppercase text-sm" style={{ color: "#F59E0B" }}>Сузунское РТП</span>
          </div>
          <p className="text-xs text-center" style={{ color: "#374151" }}>© 2024 АО «Сузунское РТП». Все права защищены.</p>
          <div className="flex gap-6">
            {NAV_LINKS.slice(0, 4).map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-xs nav-link">{l.label}</button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}