import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      title: "CAREER QUESTIONNAIRE",
      recommended_career: "Recommended Career",
      software_developer: "Software Developer",
      project_manager: "Project Manager",
      data_analyst: "Data Analyst",
      ux_ui_designer: "UX/UI Designer",
      previous: "Previous",
      next: "Next",
      submit: "Submit",
      back_to_quiz: "Back to Quiz",
      questions: [
        {
          id: "education",
          question: "What is your highest level of education?",
          options: [
            "High school or equivalent",
            "Vocational training",
            "Bachelor's degree",
            "Master's degree or higher",
          ],
        },
        {
          id: "experience",
          question: "How many years of work experience do you have?",
          options: [
            "0-2 years",
            "3-5 years",
            "6-10 years",
            "More than 10 years",
          ],
        },
        {
          id: "current_field",
          question:
            "Which field best describes your current or most recent job?",
          options: [
            "Technology and IT",
            "Business and Finance",
            "Healthcare",
            "Education",
            "Creative and Design",
            "Other",
          ],
        },
        {
          id: "career_goal",
          question: "What is your primary career goal?",
          options: [
            "Change to a new field",
            "Advance in current field",
            "Improve work-life balance",
            "Increase income",
            "Start own business",
          ],
        },
        {
          id: "comparison_pairs",
          question:
            "For each pair, choose the option that you prefer or identifies with you more:",
          pairs: [
            {
              id: "problem_solving_vs_creativity",
              a: "Solving complex problems",
              b: "Expressing creativity",
            },
            {
              id: "stability_vs_change",
              a: "Stable and predictable work environment",
              b: "Dynamic and changing work environment",
            },
            {
              id: "teamwork_vs_independent",
              a: "Working closely with a team",
              b: "Working independently",
            },
            {
              id: "analytical_vs_practical",
              a: "Analyzing data and information",
              b: "Applying practical skills",
            },
            {
              id: "leading_vs_supporting",
              a: "Leading and making decisions",
              b: "Supporting and implementing decisions",
            },
          ],
        },
      ],
    },
  },
  et: {
    translation: {
      title: "KARJÄÄRIKÜSITLUS",
      recommended_career: "Soovitatav karjäär",
      software_developer: "Tarkvaraarendaja",
      project_manager: "Projektijuht",
      data_analyst: "Andmeanalüütik",
      ux_ui_designer: "UI/UX disainer",
      previous: "Eelmine",
      next: "Edasi",
      submit: "Esita",
      back_to_quiz: "Tagasi viktoriini juurde",
      questions: [
        {
          id: "education",
          question: "Milline on teie kõrgeim haridustase?",
          options: [
            "Keskharidus või võrdväärne",
            "Kutseharidus",
            "Bakalaureusekraad",
            "Magistrikraad või kõrgem",
          ],
        },
        {
          id: "experience",
          question: "Kui palju teil on töökogemust?",
          options: [
            "0-2 aastat",
            "3-5 aastat",
            "6-10 aastat",
            "Rohkem kui 10 aastat",
          ],
        },
        {
          id: "current_field",
          question:
            "Milline valdkond kirjeldab kõige paremini teie praegust või viimast töökohta?",
          options: [
            "Tehnoloogia ja IT",
            "Äri ja rahandus",
            "Tervishoid",
            "Haridus",
            "Loovala ja disain",
            "Muu",
          ],
        },
        {
          id: "career_goal",
          question: "Mis on teie peamine karjäärieesmärk?",
          options: [
            "Vahetan eriala",
            "Arenen praeguses valdkonnas",
            "Parandan töö ja eraelu tasakaalu",
            "Suurendan sissetulekut",
            "Alustan oma ettevõttega",
          ],
        },
        {
          id: "comparison_pairs",
          question:
            "Iga paari puhul valige variant, mida eelistate või mis teid rohkem iseloomustab:",
          pairs: [
            {
              id: "probleemide_lahendamine_vs_loovus",
              a: "Keeruliste probleemide lahendamine",
              b: "Loovuse väljendamine",
            },
            {
              id: "stabiilsus_vs_muutus",
              a: "Stabiilne ja etteaimatav töökeskkond",
              b: "Dünaamiline ja muutuv töökeskkond",
            },
            {
              id: "meeskonnatöö_vs_sõltumatu",
              a: "Tihedalt meeskonnas töötamine",
              b: "Iseseisvalt töötamine",
            },
            {
              id: "analüütiline_vs_praktiline",
              a: "Andmete ja info analüüsimine",
              b: "Praktiliste oskuste rakendamine",
            },
            {
              id: "juhtiv_vs_toetamine",
              a: "Juhtimine ja otsuste tegemine",
              b: "Otsuste toetamine ja elluviimine",
            },
          ],
        },
      ],
    },
  },
  ru: {
    translation: {
      title: "КАРЬЕРНАЯ АНКЕТА",
      recommended_career: "Рекомендуемая карьера",
      software_developer: "Разработчик программного обеспечения",
      project_manager: "Руководитель проекта",
      data_analyst: "Аналитик данных",
      ux_ui_designer: "UI/UX дизайнер",
      previous: "Предыдущий",
      next: "Следующий",
      submit: "Представлять на рассмотрение",
      back_to_quiz: "Вернуться к викторине",
      questions: [
        {
          id: "education",
          question: "Какой у вас самый высокий уровень образования?",
          options: [
            "Среднее образование или эквивалент",
            "Профессиональное образование",
            "Степень бакалавра",
            "Степень магистра или выше",
          ],
        },
        {
          id: "experience",
          question: "Сколько у вас лет рабочего стажа?",
          options: ["0-2 года", "3-5 лет", "6-10 лет", "Более 10 лет"],
        },
        {
          id: "current_field",
          question:
            "Какая сфера лучше всего описывает вашу текущую или последнюю работу?",
          options: [
            "Технологии и ИТ",
            "Бизнес и финансы",
            "Здравоохранение",
            "Образование",
            "Творчество и дизайн",
            "Другое",
          ],
        },
        {
          id: "career_goal",
          question: "Какова ваша основная карьерная цель?",
          options: [
            "Сменить сферу деятельности",
            "Продвинуться в текущей сфере",
            "Улучшить баланс между работой и личной жизнью",
            "Увеличить доход",
            "Начать свой бизнес",
          ],
        },
        {
          id: "comparison_pairs",
          question:
            "Для каждой пары выберите вариант, который вы предпочитаете или который больше вас характеризует:",
          pairs: [
            {
              id: "проблема_solve_vs_креативность",
              a: "Решение сложных проблем",
              b: "Выражение креативности",
            },
            {
              id: "стабильность_vs_change",
              a: "Стабильная и предсказуемая рабочая среда",
              b: "Динамичная и меняющаяся рабочая среда",
            },
            {
              id: "работа в команде_vs_независимый",
              a: "Тесная работа в команде",
              b: "Самостоятельная работа",
            },
            {
              id: "аналитический_vs_практичный",
              a: "Анализ данных и информации",
              b: "Применение практических навыков",
            },
            {
              id: "ведущий_vs_поддержка",
              a: "Руководство и принятие решений",
              b: "Поддержка и реализация решений",
            },
          ],
        },
      ],
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
