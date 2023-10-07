import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Spring',
      description: {
        en: 'I build modern and advanced REST API with Spring',
        id_ID: 'Je développe des API REST avancées et modernes en utilisant Spring',
      },
      icon: 'devicon:spring',
      image: null,
    },
    {
      id: 2,
      title: 'C',
      description: {
        en: 'For an app, I also use C',
        id_ID: 'Pour développer des applications j\'utilise également le langage C',
      },
      icon: 'devicon:c',
      image: null,
    },
    {
      id: 3,
      title: 'Linux',
      description: {
        en: 'I use Linux to work',
        id_ID: 'J\'utilise Linux pour travailler',
      },
      icon: 'devicon:linux',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: 'I also use python sometimes to build an app',
        id_ID: 'J\'utilise également python pour développer des applications',
      },
      icon: 'devicon:python',
      image: null,
    },
  ]
})
