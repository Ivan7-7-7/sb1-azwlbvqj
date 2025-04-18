import React, { useEffect, useRef, useState } from 'react';
import { Brain, Wine, Cigarette, Heart, Shield, Phone, Pill as Pills, Users, Skull, Guitar as Hospital, Ban, Clock, AlertTriangle, CheckCircle2, XCircle, BookOpen, Activity, Heart as Heartbeat, ClipboardCheck } from 'lucide-react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeTab, setActiveTab] = useState('physical');
  const [showTest, setShowTest] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      text: "Как часто вы употребляете алкоголь?",
      options: [
        { text: "Никогда", score: 0 },
        { text: "Редко (1-2 раза в месяц)", score: 1 },
        { text: "Часто (1-2 раза в неделю)", score: 2 },
        { text: "Регулярно (более 2 раз в неделю)", score: 3 }
      ]
    },
    {
      text: "Испытываете ли вы желание употреблять алкоголь в стрессовых ситуациях?",
      options: [
        { text: "Никогда", score: 0 },
        { text: "Иногда", score: 1 },
        { text: "Часто", score: 2 },
        { text: "Всегда", score: 3 }
      ]
    },
    {
      text: "Были ли случаи, когда вы не могли остановиться после начала употребления?",
      options: [
        { text: "Никогда", score: 0 },
        { text: "Редко", score: 1 },
        { text: "Периодически", score: 2 },
        { text: "Часто", score: 3 }
      ]
    },
    {
      text: "Влияет ли употребление на вашу работу или учебу?",
      options: [
        { text: "Нет", score: 0 },
        { text: "Незначительно", score: 1 },
        { text: "Заметно", score: 2 },
        { text: "Серьезно", score: 3 }
      ]
    },
    {
      text: "Говорили ли вам близкие о необходимости меньше употреблять?",
      options: [
        { text: "Никогда", score: 0 },
        { text: "Редко", score: 1 },
        { text: "Несколько раз", score: 2 },
        { text: "Часто", score: 3 }
      ]
    }
  ];

  const getResultMessage = (score: number) => {
    if (score <= 3) {
      return {
        risk: "Низкий риск",
        message: "У вас низкий риск развития зависимости. Продолжайте вести здоровый образ жизни!",
        color: "text-green-600"
      };
    } else if (score <= 8) {
      return {
        risk: "Средний риск",
        message: "Есть признаки рискованного поведения. Рекомендуем пересмотреть свои привычки и обратиться к специалисту для консультации.",
        color: "text-yellow-600"
      };
    } else {
      return {
        risk: "Высокий риск",
        message: "Существует высокий риск развития зависимости. Настоятельно рекомендуем обратиться за профессиональной помощью.",
        color: "text-red-600"
      };
    }
  };

  const handleAnswer = (score: number) => {
    setScore(prev => prev + score);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setShowTest(false);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-fade').forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in gradient-text">Остановись и подумай</h1>
          <p className="text-2xl max-w-3xl mx-auto animate-fade-in animate-delay-200">
            Узнай правду о разрушительном влиянии алкоголя и наркотиков на жизнь человека
          </p>
          <div className="mt-8 animate-fade-in animate-delay-300">
            <a href="#help" className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors animate-pulse-slow">
              Получить помощь
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Emergency Alert */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-12 rounded-r-lg animate-slide-in">
          <div className="flex items-center">
            <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
            <p className="text-red-700">
              Если вы или ваши близкие находятся в критической ситуации, немедленно позвоните по номеру экстренной помощи: <strong>112</strong>
            </p>
          </div>
        </div>

        {/* Effects Section */}
        <section className="mb-20 section-fade">
          <h2 className="text-4xl font-bold text-center mb-12">Влияние на организм</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Brain className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Мозг</h3>
              <p className="text-gray-600">Разрушение нейронных связей, ухудшение памяти и концентрации, риск развития деменции. Необратимые изменения в структуре мозга.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Сердце</h3>
              <p className="text-gray-600">Повышение давления, риск инфаркта, нарушение работы сердечно-сосудистой системы. Развитие кардиомиопатии.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Shield className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Иммунитет</h3>
              <p className="text-gray-600">Ослабление защитных функций организма, повышенный риск инфекционных заболеваний и онкологии.</p>
            </div>
          </div>
        </section>

        {/* Additional Effects Section */}
        <section className="mb-20 section-fade">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Pills className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Печень</h3>
              <p className="text-gray-600">Цирроз печени, гепатит, нарушение метаболизма. 90% случаев цирроза связаны с алкоголизмом.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Clock className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Продолжительность жизни</h3>
              <p className="text-gray-600">Сокращение продолжительности жизни на 10-15 лет. Ускоренное старение организма.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Социальные связи</h3>
              <p className="text-gray-600">Разрушение семейных отношений, потеря работы, социальная изоляция.</p>
            </div>
          </div>
        </section>

        {/* Myths and Facts Section */}
        <section className="mb-20 section-fade">
          <h2 className="text-4xl font-bold text-center mb-12">Мифы и Факты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="myth-card bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start">
                <XCircle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Миф: "Алкоголь помогает согреться"</h3>
                  <p className="text-gray-600">На самом деле алкоголь расширяет кровеносные сосуды, что приводит к большей потере тепла. Ощущение тепла обманчиво и может привести к переохлаждению.</p>
                </div>
              </div>
            </div>
            <div className="myth-card bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start">
                <CheckCircle2 className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Факт: "Алкоголь влияет на мозг мгновенно"</h3>
                  <p className="text-gray-600">Алкоголь начинает воздействовать на мозг через 30 секунд после первого глотка, нарушая работу нейронных связей.</p>
                </div>
              </div>
            </div>
            <div className="myth-card bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start">
                <XCircle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Миф: "Наркотики помогают быть креативнее"</h3>
                  <p className="text-gray-600">Исследования показывают, что наркотики не улучшают творческие способности, а наоборот, со временем снижают когнитивные функции.</p>
                </div>
              </div>
            </div>
            <div className="myth-card bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start">
                <CheckCircle2 className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Факт: "Зависимость может развиться очень быстро"</h3>
                  <p className="text-gray-600">У некоторых людей сильная зависимость может сформироваться уже после нескольких приемов наркотических веществ.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-gray-900 text-white rounded-xl p-12 mb-20 section-fade">
          <h2 className="text-4xl font-bold text-center mb-12">Статистика</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center hover-scale">
              <Wine className="w-16 h-16 mx-auto mb-4 text-red-400" />
              <p className="text-5xl font-bold mb-2">2.5 млн</p>
              <p className="text-gray-300">Смертей ежегодно связаны с алкоголем</p>
            </div>
            <div className="text-center hover-scale">
              <Skull className="w-16 h-16 mx-auto mb-4 text-red-400" />
              <p className="text-5xl font-bold mb-2">88%</p>
              <p className="text-gray-300">Смертей от передозировки наркотиков</p>
            </div>
            <div className="text-center hover-scale">
              <Hospital className="w-16 h-16 mx-auto mb-4 text-red-400" />
              <p className="text-5xl font-bold mb-2">5.1 млн</p>
              <p className="text-gray-300">Обращений за медицинской помощью</p>
            </div>
          </div>
        </section>

        {/* Interactive Info Section */}
        <section className="mb-20 section-fade">
          <h2 className="text-4xl font-bold text-center mb-12">Последствия употребления</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex mb-8 border-b">
              <button 
                className={`px-6 py-3 ${activeTab === 'physical' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('physical')}
              >
                <Activity className="w-5 h-5 inline-block mr-2" />
                Физические
              </button>
              <button 
                className={`px-6 py-3 ${activeTab === 'psychological' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('psychological')}
              >
                <Brain className="w-5 h-5 inline-block mr-2" />
                Психологические
              </button>
              <button 
                className={`px-6 py-3 ${activeTab === 'social' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('social')}
              >
                <Users className="w-5 h-5 inline-block mr-2" />
                Социальные
              </button>
            </div>
            <div className="p-4">
              {activeTab === 'physical' && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">Физические последствия</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Повреждение внутренних органов (печень, сердце, мозг)</li>
                    <li>• Ослабление иммунной системы</li>
                    <li>• Нарушение координации и моторики</li>
                    <li>• Риск развития различных форм рака</li>
                    <li>• Проблемы с пищеварением</li>
                  </ul>
                </div>
              )}
              {activeTab === 'psychological' && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">Психологические последствия</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Депрессия и тревожность</li>
                    <li>• Нарушения памяти и концентрации</li>
                    <li>• Эмоциональная нестабильность</li>
                    <li>• Психозы и галлюцинации</li>
                    <li>• Суицидальные мысли</li>
                  </ul>
                </div>
              )}
              {activeTab === 'social' && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">Социальные последствия</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Разрушение семейных отношений</li>
                    <li>• Потеря работы и финансовые проблемы</li>
                    <li>• Социальная изоляция</li>
                    <li>• Проблемы с законом</li>
                    <li>• Потеря друзей и социальных связей</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Prevention Section */}
        <section className="mb-20 section-fade">
          <h2 className="text-4xl font-bold text-center mb-12">Профилактика</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Ban className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Как избежать зависимости</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Ведите активный образ жизни</li>
                <li>• Занимайтесь спортом и творчеством</li>
                <li>• Развивайте новые навыки и хобби</li>
                <li>• Поддерживайте здоровые отношения с близкими</li>
                <li>• Научитесь справляться со стрессом здоровыми способами</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover-scale">
              <Users className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Признаки зависимости у близких</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Резкие перепады настроения</li>
                <li>• Потеря интереса к прежним увлечениям</li>
                <li>• Необъяснимые финансовые проблемы</li>
                <li>• Изменение круга общения</li>
                <li>• Нарушение сна и режима дня</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Test Section */}
        <section className="mb-20 section-fade">
          <h2 className="text-4xl font-bold text-center mb-12">Оценка риска зависимости</h2>
          <div className="max-w-2xl mx-auto">
            {!showTest && !showResult && (
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <ClipboardCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Пройдите тест</h3>
                <p className="text-gray-600 mb-6">
                  Ответьте на несколько вопросов, чтобы оценить риск развития зависимости. 
                  Тест анонимный, результаты не сохраняются.
                </p>
                <button
                  onClick={() => setShowTest(true)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Начать тест
                </button>
              </div>
            )}

            {showTest && !showResult && (
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-gray-600 mt-2">
                    Вопрос {currentQuestion + 1} из {questions.length}
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].text}</h3>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showResult && (
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Результаты теста</h3>
                <div className={`text-xl font-bold mb-4 ${getResultMessage(score).color}`}>
                  {getResultMessage(score).risk}
                </div>
                <p className="text-gray-600 mb-6">{getResultMessage(score).message}</p>
                <button
                  onClick={resetTest}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Пройти тест заново
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-20 section-fade">
          <h2 className="text-4xl font-bold text-center mb-12">Полезные ресурсы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover-scale">
              <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Образовательные материалы</h3>
              <p className="text-gray-600">Научные статьи, исследования и материалы о влиянии психоактивных веществ на организм.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover-scale">
              <Activity className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Программы реабилитации</h3>
              <p className="text-gray-600">Информация о доступных программах лечения и реабилитации в вашем регионе.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover-scale">
              <Heartbeat className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Группы поддержки</h3>
              <p className="text-gray-600">Контакты групп взаимопомощи и сообществ, где можно получить поддержку.</p>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section id="help" className="text-center section-fade">
          <h2 className="text-4xl font-bold mb-12">Нужна помощь?</h2>
          <div className="bg-blue-600 text-white py-12 px-8 rounded-lg inline-block hover-scale">
            <Phone className="w-16 h-16 mx-auto mb-6" />
            <p className="text-3xl font-bold mb-4">8-800-200-0-200</p>
            <p className="text-xl">Круглосуточная горячая линия</p>
            <p className="mt-4 text-blue-100">Анонимно • Бесплатно • 24/7</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">© 2025 Здоровое будущее. Все права защищены.</p>
          <p className="mt-4 text-gray-400">Сайт создан с целью информирования о вреде алкоголя и наркотиков</p>
        </div>
      </footer>
    </div>
  );
}

export default App;