# and-test
Prueba angular para la AND


El projecto esta divido en las siguientes carpetas:


app/sections:

--Home: Componente principal de la app,con el inicio de la web


app/components

--Footer

--Header

--conocer-opinion: En el se encuentra el bloque con las interaciones de participacion, que consumen el servicio content-data.getParticipations(), y el formulario para enviar opiniones, que consume el servicio opinion.createOpinion(opinion: Opinion). Ambos conectadas a una Realtime database en firebase

--informate: En el se encuentra el bloque con las informacion de las noticias, que consumen el servicio content-data.getNews(), conectada a una Realtime database (JSON) en firebase

--temas-interes: En el se encuentra el bloque con informacion de temas de interes, que consumen el servicio content-data.getInfo(), conectada a una Realtime database (JSON) en firebase



app/services

--content-data: En content-data.service.ts se encuentran los servicios que consultan la info en una Realtime database (JSON) en firebase

--opinion: En opinion.service.ts se encuentran el servicio que se encarga de guardar las opiniones en una Realtime database (JSON) en firebase


 JSON

 La estructura Realtime database (JSON) en firebase es la siguiente

 {
  "info" : [ {
    "image" : "mapa.png",
    "link" : "Me interesa!",
    "subtitle" : "La información que producen las entidades públicas a tu alcance",
    "title" : "Sabes que son datos abiertos?"
  }, {
    "image" : "colombiaco.png",
    "link" : "Ir a Colombia.co",
    "subtitle" : "Colombia es hermosa, y queremos que conozcas mas sobre ella",
    "title" : "Conoce más sobre nuestro pais"
  }, {
    "image" : "escudo.png",
    "link" : "Quiero saber como funciona",
    "subtitle" : "GOV.CO nace para facilitarle a los ciudadanos la interaccion con el Estado",
    "title" : "Este portal está pensado para ti"
  }, {
    "image" : "fucsia.png",
    "link" : "Call to action",
    "subtitle" : "Texto descriptivo que capte la atencion del lector",
    "title" : "Destacado que esté en acondicionado"
  } ],
  "news" : [ {
    "date" : "28 de febrero 2019",
    "image" : "personas.png",
    "title" : "Jovenes colombianos rompen record en participación para la construcción de una politica pública de género incluyente"
  }, {
    "date" : "28 febrero",
    "image" : "naturaleza.png",
    "title" : "Protégete del niño!"
  }, {
    "date" : "28 de febrero 2019",
    "image" : "bandera.png",
    "title" : "Colombia, ganador de premio internacional de innovacion"
  }, {
    "date" : "28 de febrero 2019",
    "image" : "alcaldia.png",
    "title" : "El nuevo sistema carcelario avanza"
  }, {
    "date" : "28 de febrero 2019",
    "image" : "portatil.png",
    "title" : "Esta convocatoria no te la puedes perder por nada"
  } ],
  "opinions" : {
    "-MIVlsNe0Ih92Bq7SPnD" : {
      "opinions" : "xz xz "
    },
    "-MIVpBGbOwlwOYQ0k4wP" : {
      "opinions" : "4324"
    },
    "-MIVz0Be74fJTWMAfmg-" : {
      "opinions" : "gfghfgh"
    },
    "-MIY6A8Ta8GYbmVkMWZN" : {
      "opinions" : ""
    },
    "-MIY7T_rFP4PTMbmhbzK" : {
      "opinions" : "ejemplp"
    },
    "-MIY9E39Pt9TJ3rQVrlB" : {
      "opinions" : "qwerty"
    }
  },
  "participations" : [ {
    "author" : "Presidencia de la República",
    "participants" : 534,
    "status" : "FALTA UN DIA",
    "title" : "Únete al Pacto por Colombia!"
  }, {
    "author" : "Secretaria de movilidad de Bogotá",
    "participants" : 87,
    "status" : "ACTIVO!",
    "title" : "Como mejorarías nuestro sistema de transporte?"
  }, {
    "author" : "Ministerio de las Tecnologías de la información y las Comunicaciones",
    "participants" : 0,
    "status" : "CONOCE LOS RESULTADOS",
    "title" : "Los datos y visualizaciones del gobierno interesantes para su uso, aprovechamiento y toma de decisiones"
  } ]
}