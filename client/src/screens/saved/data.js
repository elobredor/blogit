export const data = {
  user: {
    name: "Billy Doe",
    saved: [
      //default
      {
        title: "Guardado",
        posts: ["art1.id", "art2.id", "art3.id", "art33.id", "art42.id"],
      },
      //añadidas por el usuario,
      {
        title: "lo q sea",
        posts: ["art1.id", "art2.id", "art3.id", "art33.id", "art42.id"],
      },
      { title: "Preparar entrevista", posts: ["art12.id", "art33.id"] },
      {
        title: "Mundo laboral",
        posts: [
          "art33.id",
          "art42.id",
          "art33.id",
          "art42.id",
          "art33.id",
          "art42.id",
        ],
      },
    ],
  },
};

//pedir todos los blogs mediante el id que tenga yo en posts
//pedir los dos ultimos blogs mediante el id para elegir sus imagenes. acceder con slice / insertar con push
