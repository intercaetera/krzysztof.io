import React, { forwardRef, useRef, useState } from "react"
import ReactMarkdown from 'react-markdown'
import NextImage from 'next/image'

import {Layout} from "@/components/layout"
import SEO from "@/components/seo"
import { SubscribeSPWZ, SubscribeSPWZScrollButton, SubscribeSPWZToggleButton } from "@/components/mailerLiteSPWZ"
import ShareButtons from "@/components/shareButtons"
import { config } from "@/config"
import { SPWZEbook } from "@/components/SPWZEbook"
import { SPWZLogo } from "@/components/SPWZLogo"
import { Highlight } from "@/components/Highlight"

const czemuCiSieToPrzydaMd = `
Gdy stawiałem swoje pierwsze kroki jako Software Engineer, to nie wiedziałem, **jak stwierdzić, czy robię dobrą robotę**
i jak moja praca zostanie oceniona przez zespół i pracodawcę.

Nie chciałem być jednym z tych bezbronnych płatków śniegu, na których nie można polegać,
trzeba ciągle pilnować i od których nie można ogólnie zbyt wiele wymagać.

Dlatego zacząłem obserwować najbardziej kompetentne osoby, które udało mi się znaleźć,
a potem rozkładałem na czynniki pierwsze, wdrażałem w życie i testowałem ich sposoby pracy.

Szukałem sposobów, które pozwolą mi zrozumieć, spełnić i przekroczyć stawiane przede mną oczekiwania.

Szukałem elementów wspólnych, które pozwolą mi nabić punkty splendoru i odblokować korzyści
w postaci lepszych projektów, większej swobody w robieniu rzeczy po swojemu oraz lepszego wynagrodzenia.

Nauczyłem się, że **nikt nie musi czekać, żeby zacząć zachowywać się jak doświadczony programista.**
Można zacząć od razu - od zmiany mindsetu.

Wpisowe polega na tym, żeby **wziąć odpowiedzialność nie tylko za pisanie kodu**,
ale też za dobrą współpracę z zespołem, z klientem, z pracodawcą i za stopniowe zwiększanie jakości dowożonych zadań.

Okazało się, że znajomość umiejętności miękkich jest niezbędna, bo pomaga eliminować wszelkie przeszkody, które napotykam w pracy.
Zauważyłem też, że te umiejętności są cenione wśród pracodawców i ludzi, z którymi pracuję.

Dzięki wsparciu wielu doświadczonych osób udało mi się wypracować podejście do pracy,
które przekazuję od kilku lat wszystkim zainteresowanym - indywidualnie i w każdym kolejnym projekcie, do którego dołączam.

Po jakimś czasie zauważyłem, że ci, którzy je stosują, **stopniowo zaczynają być uważani za najbardziej ogarnięte osoby w projekcie,
przestają mieć problemy na rozmowach o kasę i często naturalnie wchodzą w role liderskie w swoich zespołach**.

Tych sprawdzonych w boju, uporządkowanych informacji, które można szybko zaaplikować u siebie, brakuje w Internecie,
a niektórzy nie mają w swoim otoczeniu osób, od których można się uczyć.

Dlatego postanowiłem zebrać to, czego się nauczyłem, a potem przefiltrowałem, zostawiłem to, co w mojej ocenie jest najważniejsze i wziąłem się za tworzenie tego programu.

Zebrane doświadczenia chcę podać Ci w przystępnej formie, bez coachingu, bez wciskania kitu na siłę i bez mówienia o tym, co "musisz" i co "powinieneś".

**Dostajesz tylko to, co działa** u mnie i u ludzi, których znam.
Nakreślam też kontekst, który podpowie Ci jak zaaplikować tę wiedzę u siebie i zmodyfikować podejście w razie potrzeby.

Moim celem jest pokazać Ci jak zostać dojrzałym, godnym zaufania, cenionym członkiem zespołu.
`

const coZnajdzieszMd = `
"Skuteczna Praca w Zespole" to **231 materiałów wideo** podzielonych na **24 moduły**. Łącznie jest to **19 godzin i 10 minut** nagrań podzielone na **10 tygodni** pracy.

Pod każdym modułem znajduje się **lista sugestii, które możesz zaaplikować u siebie**. Dorzucam też sporo materiałów zewnętrznych, które pomagały mi przez te wszystkie lata.

W tym programie nie ma lekcji, nie ma zadań domowych i certyfikatów.
To dlatego, że nie chcę nikogo niańczyć i nie chcę być niczyim nauczycielem.

Chcę po prostu pokazać, co widzę, że działa. **Chcę, żeby każdy mógł zastosować tę wiedzę w swojej pracy i jak najszybciej czerpać płynące z tego korzyści**.
`

const dlaKogoMd = `
"Skuteczna Praca w Zespole" to program dla programistów i programistek na poziomie junior oraz regular,
którzy chcą poznać sposoby pracy oraz umiejętności miękkie dobrze opłacanych i wyróżniających się senior developerów,
które pozwolą im w przyszłości bez problemu wypełniać role liderskie na najwyższym poziomie (jeśli będą tego chcieli).

Dla senior developerów, którzy nie mieli wzorów do naśladowania i czują braki w swoich umiejętnościach nietechnicznych, mimo że ich umiejętności techniczne są na wysokim poziomie.

Ogólnie, program jest dla wszystkich, którzy:

- chcą wziąć odpowiedzialność za **wszystkie aspekty tworzenia oprogramowania**, a nie tylko za klikanie w klawiaturę
- wierzą w to, że nie samym kodem człowiek żyje i chcą poprawić swoje warunki zatrudnienia, rozwijając też inne umiejętności
- chcą lepiej wykonywać swoją pracę jako członkowie zespołu
- chcą szybciej rozwiązywać problemy z pracą zespołową, żeby nie odciągały ich od kodzenia

Materiały są pisane z myślą o ludziach, którzy programują, bo sam to robię, ale sprawdzają się też u innych, niezależne od roli.
`

const kilkaSlowOMnieMd = `
Jako programista pracowałem w różnych projektach. Od 10-letniego legacy kodu, po szybkie dwumiesięczne startupowe projekty,
gdzie liczyło się szybkie dowiezienie funkcjonalności, żeby sprawdzić, czy ma on szansę zaistnieć na rynku.

Pełniłem funkcję lidera technicznego, architekta, czy doradcy technicznego, który pomaga rozwijać wiele różnych projektów jednocześnie.

Miałem przyjemność współtworzyć zespoły od zera, przechodząc przez wszystkie fazy jego formowania.
Pomagałem przekształcać dysfunkcyjne zespoły w takie, które wydajnie rozwiązują wszystkie napotkane problemy.

Poznałem najprawdopodobniej **każdy możliwy antypattern dotyczący kodu i ludzkiego zachowania w zespole**. **Po latach pracy wiem, jak sobie z nimi radzić**.

Swoje doświadczenia weryfikuję przez dzielenie się nimi na konferencjach, warsztatach, w pracy na etacie oraz online.

Rolę bullshit detectora pełni też bogata siatka znajomych,
wśród których znajdują się doradcy techniczni, konsultanci, analitycy biznesowi, scrum masterzy,
product ownerzy, CTO, oraz założyciele firm zajmujących się tworzeniem oprogramowania.
`

const coKiedyMd = `
Obecnie skończyłem pierwszą edycję programu i przygotowuję się do drugiej.

Dużą ilość materiałów udostępniam teraz w formie cotygodniowego mailingu, na który możesz się tutaj zapisać.

Dotychczas dołączyło do niego już **ponad 1000 osób**, których opinie możesz zobaczyć poniżej.

Przy okazji dopiszę Cię do listy oczekujących na kolejne otwarcie programu.

Otrzymasz **najlepszą ofertę dołączenia do jego pełnej wersji**, gdy znowu będzie dostępny.
`

const agendaMd = `
### 👉 Wstęp

Dowiesz się, dlaczego warto traktować swoją karierę jako biznes, jak działa model oparty o budowanie kapitału zawodowego i dlaczego pasja w pracy jest niepotrzebna, a czasem nawet szkodliwa.

Pokaże Ci jak budować reputację oraz nabijać punkty splendoru i że umiejętności miękkie (które wcale nie są takie miękkie) odgrywają w tym kluczową rolę.

### 👉 Ustawienie mindsetu

Pokażę Ci, w jaki sposób szybciej zdobywać informacje potrzebne do wejścia na wyższy poziom.

Powiem Ci, dlaczego nigdy nie nazywałem się "juniorem" i polecam to samo innym.

Pokażę, że masz wpływ praktycznie na każdy aspekt swojej pracy i możesz wykorzystać to na swoją korzyść.

Powiem też pokrótce o tym, jak się rozwijać na własną rękę.

### 👉 Praca z zadaniami

Przedstawię Ci mój sprawdzony w bojach proces planowania i realizacji zadań, którego używam od lat. Obejmuje on m.in.:

- Podział zadania na mniejsze części.
- Zadawanie pytań i zbieranie informacji o tym, co trzeba zrobić.
- Określanie, czy zadanie jest naprawdę skończone.
- Sposoby testowania.
- Raportowanie, informowanie o problemach i radzenie sobie z opóźnieniami.
- Radzenie sobie z blokadą (writer's block).
- Zbieranie feedbacku do zadania.

Dowiesz się:

- Dlaczego warto i jak wymasterować narzędzia, których używasz.
- Jak pracować, żeby nikt nie miał Ci nic do zarzucenia, jak radzić sobie z bagnem w kodzie i jak nie tworzyć nowego.
- Jak radzić sobie z trudnymi zadaniami oraz jak przekuć nudne zadania w coś pozytywnego.
- Jak wyrobić sobie intuicję, która będzie Ci automatycznie podpowiadać dobre i złe rozwiązania.
- Na czym tak naprawdę polega Code Review i jak robić to dobrze.
- Jak sobie radzić, gdy czujesz, że brakuje Ci doświadczenia.
- Dlaczego oraz kiedy stosować TDD. Gdzie i jak najszybciej się go nauczyć.

Opowiem Ci też o najważniejszych elementach pracy z narzędziami do zarządzania pracą zespołu (Jira, Linear itp.).

### 👉 Praca w zespole

**Serce tego programu**. Największy i najważniejszy moduł.

Na początek pokażę Ci, dlaczego programowanie to zawsze praca zespołowa i wrzucę kilka szybkich taktyk, które pomogą Ci wykazać się w projekcie. Do zastosowania od zaraz.

Dowiesz się jak wchodzić na grubo do projektu w trakcie trwania onboardingu.

Przedstawię Ci mój ulubiony, ekstremalnie trafny model, który opisuje, dlaczego niektóre zespoły działają jak grupa komandosów, a inne, jak grupa nieporadnych gęsi.

Powiem Ci, co możesz dać od siebie, żeby stopniowo przesuwać swój zespół w stronę tego pierwszego.

Poruszę też jeden z najważniejszych tematów, czyli **komunikację**. Pokażę Ci m.in.:

- Jak przekazywać to, co chcesz powiedzieć w jasny, zrozumiały i klarowny sposób.
- Jak dogadać się z ludźmi, w różnych sytuacjach, również konfliktowych, gdy każdy ma odmienne zdanie lub jest wrogo nastawiony.
- Jak to robić, żeby dosadnie przekazać wszystko, co chcesz przekazać, a jednocześnie zminimalizować ryzyko, że kogoś urazisz.
- Jak i kiedy mówić "nie".
- Jak i kiedy mówić "tak".
- Jak prosić o pomoc i komunikować swoje potrzeby.
- Jak w tym wszystkim nie triggerować ludzi ;).

Dowiesz się też m.in.:

- Jak rozwiązywać konflikty i kłótnie oraz jak podejmować decyzje w zespole tak, żeby zminimalizować narzekanie i sabotowanie podjętych decyzji.
- Jak skutecznie pracować z innymi i jak być dobrym współpracownikiem dla analityków biznesowych, QA, liderów i wszystkich innych, z którymi wchodzisz na co dzień w relacje (również z "wujkami dobra rada" i podobnymi osobistościami, którzy niepotrzebnie nas irytują).
- Jak wyglądają spotkania, na których nikt nie zasypia, które szybko się kończą, a jednocześnie przynoszą rezultaty. Dowiesz się co zrobić, gdy planowania są nudne, a retra to spotkania-wydmuszki, po których nic się nie zmienia.
- Jak propagować wiedzę w zespole.
- Jak zbierać i dawać feedback.
- Jak radzić sobie z presją i nadgodzinami.
- Jak odnaleźć się w zespole, gdzie wszystkim wszystko wydaje się oczywiste, gdzie czujesz dużą różnicę poziomów i brakuje ludzi skorych do pomocy.
- Jak poradzić sobie z nieogarniętym seniorem, który nie robi swojej roboty, jak należy?
- Jak, gdzie, kiedy i kogo informować o problemach w zespole, które wymagają eskalacji?

Powiem też trochę o estymacjach oraz o tym, jak dobrze poustawiać sobie pracę zdalną i asynchroniczną.

Na koniec powiem trochę o offboardingu i jak wyjść z projektu nie paląc za sobą mostów i zostawiając dobre wrażenie.

### 👉 Praca z klientem

Pokaże Ci punkt widzenia klienta, kim on jest w zależności od tego, w jakiego rodzaju firmie pracujesz, co tak naprawdę myśli, czego potrzebuje i jaka jest w tym rola zespołu deweloperskiego.

Dowiesz się:

- Jak dobrze zaprezentować się przed klientem i być kimś więcej niż losowym programistą z Polski, którego imienia nawet nie pamięta.
- Jak przekonać klienta do większej ilości testów, do refactoringu lub innego z Twoich pomysłów.
- Co należy zrobić, gdy pomysły klienta wydają się bezsensowne i nie ma on wg Ciebie prawa działać dobrze, a on niekoniecznie słucha Twojego feedbacku.
- Jak wyciągać od klienta potrzebne informacje i co zrobić, gdy nie wywiązuje się ze swoich zobowiązań.

Dostaniesz sporą dawkę taktyk o tym, jak stopniowo poprawiać komunikację z klientem.

Pokażę Ci też, jak przygotować się do demo oraz innych spotkań, na których musisz coś zaprezentować przed klientem.

Powiem o tym, jak podchodzę do nadgodzin, żeby się nie wypalić.

### 👉 Praca z pracodawcą

Powiem Ci, na czym polega dobra relacja z pracodawcą i jak to zrobić, żeby obydwie strony skorzystały na niej jak najwięcej.

Pokażę Ci moje jak dotąd niezawodne podejście do awansów, podwyżek oraz "negocjacji". Dowiesz się, czym tak naprawdę są negocjacje.

Powiem Ci też, za jakie dodatkowe działania ceni nas większość pracodawców.

Przedstawię Ci prosty model inwestowania w siebie i budowania reputacji, która zostanie z Tobą nawet wtedy, gdy zmienisz pracę.

### 👉 Pułapki odpowiedzialności

Na sam koniec opowiem o najbardziej powszechnych pułapkach, które czekają na wszystkich, którzy robią dobrą robotę oraz jak sobie z nimi poradzić i nie dać się wykorzystać.

Pokażę Ci, dlaczego branie zbyt wielu odpowiedzialności i zbyt szybki awans, mogą być błędem.

Pokażę Ci, jak szukać balansu w zależności od tego, co chcesz osiągnąć w swojej pracy.
`

const SPWZPage = () => {
  const siteUrl = config.siteMetadata.siteUrl
  const social = config.siteMetadata.social.social

  const coKiedyRef = useRef(null)

  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => setShowPopup(showPopup => !showPopup)
  const scrollToSection = () => coKiedyRef.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <Layout isLandingPage>
      <SEO
        title="Skuteczna Praca w Zespole"
        description={`Kompletny przewodnik po umiejętnościach miękkich oraz sposobach pracy doświadczonych programistów. "Skuteczna Praca w Zespole" to program szkoleniowy online, w którym pokażę Ci, czego nauczyłem się przez ostatnie kilka lat o skutecznej współpracy z zespołem, klientem oraz pracodawcą, jak podchodzę do wykonywania zadań i jakie czerpię z tego wszystkiego korzyści.`}
        slug="spwz"
        ogType="page"
        ogImagePath="/spwz/spwz-og.png"
      />

      <p style={{marginBottom: 0}}>
        <SPWZLogo />
      </p>

      <h1 style={{fontSize:'2.5rem', marginTop: 'var(--spacing-6)', lineHeight: '3.2rem'}}>
        Kompletny przewodnik po <Highlight>umiejętnościach miękkich</Highlight> oraz <Highlight>sposobach pracy</Highlight><br />doświadczonych programistów.
      </h1>

      <h2
        style={{
          fontSize: '1.3rem',
          fontWeight: 'normal',
          lineHeight: '1.5',
          textAlign: 'center',
        }}
      >
        &quot;Skuteczna Praca w Zespole&quot; to program szkoleniowy online, w którym pokażę Ci,
        czego nauczyłem się przez ostatnie kilka lat o skutecznej współpracy z <strong>zespołem</strong>,{' '}
        <strong>klientem</strong> oraz <strong>pracodawcą</strong>, jak podchodzę do <strong>wykonywania zadań</strong> i jakie czerpię z tego wszystkiego <strong>korzyści</strong>.
      </h2>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Czemu Ci się to przyda?
      </CenteredH2>

      <ReactMarkdown>
        {czemuCiSieToPrzydaMd}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2>
        Co znajdziesz w środku?
      </CenteredH2>

      <ReactMarkdown>
        {coZnajdzieszMd}
      </ReactMarkdown>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <p style={{marginInline: '-22px'}}>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          <NextImage src="/spwz/edu-frame.png" fill={true} alt="Platforma" />
        </span>
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Agenda
      </CenteredH2>

      <ReactMarkdown className="small-spacing">
        {agendaMd}
      </ReactMarkdown>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)', marginBottom: 'var(--spacing-10)'}}>
        <SubscribeSPWZScrollButton scrollToSection={scrollToSection} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Dla kogo?
      </CenteredH2>

      <ReactMarkdown>
        {dlaKogoMd}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2>
        Kilka słów o mnie
      </CenteredH2>

      <p>
        <span className="image-wrapper" style={{textAlign: 'center'}}>
          <NextImage src="/spwz/face.jpg" width={282} height={282} alt="Opinie" />
        </span>
      </p>

      <h3 style={{textAlign: 'center', marginTop: 0}}>Krzysztof Jendrzyca / @kjendrzyca</h3>

      <ReactMarkdown>
        {kilkaSlowOMnieMd}
      </ReactMarkdown>

      <hr className="hr-spwz" />

      <CenteredH2 ref={coKiedyRef}>
        Co i kiedy?
      </CenteredH2>

      <ReactMarkdown>
        {coKiedyMd}
      </ReactMarkdown>

      <SPWZEbook />

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZToggleButton togglePopup={togglePopup} />
      </p>

      <hr className="hr-spwz" />

      <CenteredH2>
        Co mówią subskrybenci?
      </CenteredH2>

      <p>
        <span className="image-wrapper">
          <NextImage src="/spwz/testimonials-email.png" fill={true} alt="Opinie" />
        </span>
      </p>

      <p style={{textAlign: 'center', marginTop: 'var(--spacing-10)'}}>
        <SubscribeSPWZToggleButton togglePopup={togglePopup} />
      </p>

      <hr className="hr-spwz" />

      <ShareButtons
         url={`${siteUrl}/spwz`}
         title="Skuteczna Praca w Zespole"
         socialHandle={social}
         text={<>Jeśli znasz kogoś, kto chciałby zrozumieć, jak skutecznie pracować w zespole i poprawić swoje warunki zatrudnienia, ale nie wie jak się za to zabrać, to będę wdzięczny jeśli <span className="click-it">podeślesz mu link do tej strony.</span></>}
      />

      <SubscribeSPWZ showPopup={showPopup} togglePopup={togglePopup} />
    </Layout>
  )
}

SPWZPage.theme = 'light'

export default SPWZPage

const CenteredH2 = forwardRef(({children}, ref) => {
  return (
    <h2
      style={{
        textAlign: 'center',
      }}
      ref={ref}
    >
      {children}
    </h2>
  )
})

CenteredH2.displayName = 'CenteredH2'
