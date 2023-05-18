const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumm. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n \n Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? \n \n At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

const ipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumm. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";

const hardCommented = [
  {
    id: 1,
    author: "Vik Torugo",
    content: ipsum,
    likes: 3,
    responses: [
      {
        id: 1,
        author: "Elvis Kou",
        likes: 100,
      },
      {
        id: 2,
        author: "Juan Perez",
        likes: 15,
      },
      {
        id: 3,
        author: "María López",
        likes: 3,
      },
      {
        id: 4,
        author: "Carlos Ramirez",
        likes: 20,
      },
      {
        id: 5,
        author: "Ana González",
        likes: 10,
      },
      {
        id: 6,
        author: "Pedro Smith",
        likes: 5,
      },
      {
        id: 7,
        author: "Laura Martinez",
        likes: 12,
      },
    ],
  },
  {
    id: 2,
    author: "A30L14N",
    content: ipsum,
    likes: 7,
    responses: [
      {
        id: 1,
        author: "Elvis Kou",
        likes: 100,
      },
      {
        id: 2,
        author: "Juan Perez",
        likes: 15,
      },
      {
        id: 3,
        author: "María López",
        likes: 3,
      },
      {
        id: 4,
        author: "Carlos Ramirez",
        likes: 20,
      },
      {
        id: 5,
        author: "Ana González",
        likes: 10,
      },
      {
        id: 6,
        author: "Pedro Smith",
        likes: 5,
      },
      {
        id: 7,
        author: "Laura Martinez",
        likes: 12,
      },
    ],
  },
  {
    id: 3,
    author: "Lorena Ipsun",
    content: ipsum,
    likes: 8,
    responses: [
      {
        id: 1,
        author: "Elvis Kou",
        likes: 100,
      },
      {
        id: 2,
        author: "Juan Perez",
        likes: 15,
      },
      {
        id: 3,
        author: "María López",
        likes: 3,
      },
      {
        id: 4,
        author: "Carlos Ramirez",
        likes: 20,
      },
      {
        id: 5,
        author: "Ana González",
        likes: 10,
      },
      {
        id: 6,
        author: "Pedro Smith",
        likes: 5,
      },
      {
        id: 7,
        author: "Laura Martinez",
        likes: 12,
      },
    ],
  },
  {
    id: 4,
    author: "Norvegicus",
    content: ipsum,
    likes: 2,
    responses: [
      {
        id: 1,
        author: "Elvis Kou",
        likes: 100,
      },
      {
        id: 2,
        author: "Juan Perez",
        likes: 15,
      },
      {
        id: 3,
        author: "María López",
        likes: 3,
      },
      {
        id: 4,
        author: "Carlos Ramirez",
        likes: 20,
      },
      {
        id: 5,
        author: "Ana González",
        likes: 10,
      },
      {
        id: 6,
        author: "Pedro Smith",
        likes: 5,
      },
      {
        id: 7,
        author: "Laura Martinez",
        likes: 12,
      },
    ],
  },
  {
    id: 5,
    author: "Jonas Noa",
    content: ipsum,
    likes: 0,
    responses: [
      {
        id: 1,
        author: "Elvis Kou",
        likes: 100,
      },
      {
        id: 2,
        author: "Juan Perez",
        likes: 15,
      },
      {
        id: 3,
        author: "María López",
        likes: 3,
      },
      {
        id: 4,
        author: "Carlos Ramirez",
        likes: 20,
      },
      {
        id: 5,
        author: "Ana González",
        likes: 10,
      },
      {
        id: 6,
        author: "Pedro Smith",
        likes: 5,
      },
      {
        id: 7,
        author: "Laura Martinez",
        likes: 12,
      },
    ],
  },
];

export const data = [
  {
    id: 3,
    title: "Mi ruta de aprendizaje",
    image:
      "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q3/jira-product-roadmap/how-to-create-a-product-roadmap-visualization-header@2x.png",
    user: "Jane Smith",
    content: lorem,
    saved: false,
    favorite: false,
    date: "20 Enero 2023",
    time: "12 min",
    likes: 22,
    comments: hardCommented,
  },

  {
    id: 4,
    title: "Cómo crear un servidor web con Node.js",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgc6IlfnFM8ej_1nIaE74EKWI4XroYt1tbzWfP3uwEmLJlsb_i7XXW8-kYnGrNE4I9o4&usqp=CAU",
    user: "Jane Smith",
    content: lorem,
    saved: false,
    favorite: false,
    date: "20 Enero 2023",
    time: "12 min",
    likes: 22,
    comments: hardCommented,
  },
  {
    id: 5,
    title: "Cómo crear una aplicación web con React",
    image: "https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg",
    user: "Sara Anderson",
    content: lorem,
    saved: true,
    favorite: false,
    date: "25 Marzo 2023",
    time: "20 min",
    likes: 11,
    comments: hardCommented,
  },
  {
    id: 6,
    title: "Programación orientada a objetos en JavaScript",
    image:
      "https://www.microsoft.com/en-us/research/uploads/prod/2019/11/Area_IconHeader_Sys_Prog_11_2019_1920x7204.png",
    user: "Peter Johnson",
    content: lorem,
    saved: false,
    favorite: false,
    date: "16 Febrero 2023",
    time: "15 min",
    likes: 17,
    comments: hardCommented,
  },
  {
    id: 7,
    title: "Cómo crear una API REST con Express.js",
    image:
      "https://www.shutterstock.com/shutterstock/videos/1100748045/thumb/12.jpg?ip=x480",
    user: "Maria Rodriguez",
    content: lorem,
    saved: true,
    favorite: false,
    date: "06 Junio 2023",
    time: "10 min",
    likes: 15,
    comments: hardCommented,
  },
  {
    id: 8,
    title: "Introducción a TypeScript",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbw-VTmN95N4XlJjTIho5h1C8uD8-A9zhZQ&usqp=CAU",
    user: "David Brown",
    content: lorem,
    saved: false,
    favorite: false,
    date: "01 Noviembre 2023",
    time: "18 min",
    likes: 10,
    comments: hardCommented,
  },
  {
    id: 10,
    title: "Cómo crear una aplicación móvil con Flutter",
    image:
      "https://www.shutterstock.com/shutterstock/videos/1101554059/thumb/8.jpg?ip=x480",
    user: "Luisa Hernandez",
    content: lorem,
    saved: true,
    favorite: false,
    date: "26 Abril 2023",
    time: "25 min",
    likes: 32,
    comments: hardCommented,
  },
];
