
// export interface Project {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   featuredImage: string;
//   images: string[];
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Современа кујна во минималистички стил",
//     category: "Кујни",
//     description: "Елегантна кујна во минималистички стил изработена со висококвалитетни материјали и напредна технологија. Комбинацијата на дрво и модерни материјали создаваат совршен баланс помеѓу функционалност и естетика.",
//     featuredImage: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     ]
//   },
//   {
//     id: 2,
//     title: "Гардеробер по мерка",
//     category: "Гардеробери",
//     description: "Гардеробер по мерка направен за максимална искористеност на просторот, со паметни решенија за организација и складирање. Изработен од висококвалитетно дрво и модерни материјали кои гарантираат долготрајност и елеганција.",
//     featuredImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1558997519-83ea9252edf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1567016376408-0226e4d0b1ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     ]
//   },
//   {
//     id: 3,
//     title: "Трпезариска маса со столици",
//     category: "Трпезарии",
//     description: "Елегантен сет за трпезарија изработен од масивно дрво. Маса и столици кои се перфектен спој на традиционалната изработка и модерниот дизајн, создавајќи топла и пријатна атмосфера за вашиот дом.",
//     featuredImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     ]
//   },
//   {
//     id: 4,
//     title: "Дневна соба со полици",
//     category: "Дневни соби",
//     description: "Модерен мебел за дневна соба со полици за книги и декорации. Дизајниран за максимална функционалност и естетика, овој мебел го трансформира просторот во удобно и стилско место за релаксација.",
//     featuredImage: "https://images.unsplash.com/photo-1567016507665-356928ac6679?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1567016507665-356928ac6679?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1583845112203-29329902332e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     ]
//   },
//   {
//     id: 5,
//     title: "Канцелариски мебел",
//     category: "Канцеларии",
//     description: "Функционален канцелариски мебел дизајниран за максимална продуктивност и комфор. Изработен од квалитетни материјали со фокус на ергономија и практичност за долгорочна употреба.",
//     featuredImage: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     images: [
//       "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     ]
//   },
//   {
//     id: 6,
//     title: "Спална соба со кревет и ноќни комоди",
//     category: "Спални",
//     description: "Луксузен сет за спална соба вклучувајќи кревет и ноќни комоди, изработени од природно дрво со фина завршна обработка. Комбинација на комфор и елеганција за создавање на совршен простор за одмор.",
//     featuredImage: "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2278.jpg?t=st=1742411479~exp=1742415079~hmac=665cd1dd669da4236d6dc0f2c6516cc3f17c6c047ada99263fe3c18c9a1a0729&w=1380",
//     images: [
//       "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2278.jpg?t=st=1742411479~exp=1742415079~hmac=665cd1dd669da4236d6dc0f2c6516cc3f17c6c047ada99263fe3c18c9a1a0729&w=1380",
//       "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//     ]
//   }
// ];

// export default projects;


export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  featuredImage: string;
  images: string[];
}

// This function will dynamically import all project data from the Projects folder
const loadProjects = (): Project[] => {
  // For now, we'll return the same projects but imagine they're loaded from files
  return [
    {
      id: 1,
      title: "Современа кујна во минималистички стил",
      category: "Плакари",
      description: "Елегантна кујна во минималистички стил изработена со висококвалитетни материјали и напредна технологија. Комбинацијата на дрво и модерни материјали создаваат совршен баланс помеѓу функционалност и естетика.",
      featuredImage: "./projects/Project1/photos/1.jpeg",
      images: [
        "./projects/Project1/photos/1.jpeg",
        "/projects/Project1/photos/2.jpeg",
        //"/projects/Project1/photos/3.jpeg"
      ]
    },
    {
      id: 2,
      title: "Гардеробер по мерка",
      category: "Гардеробери",
      description: "Гардеробер по мерка направен за максимална искористеност на просторот, со паметни решенија за организација и складирање. Изработен од висококвалитетно дрво и модерни материјали кои гарантираат долготрајност и елеганција.",
      featuredImage: "/projects/Project2/photos/1.jpeg",
      images: [
        "./projects/Project2/photos/1.jpeg",
        "/projects/Project2/photos/2.jpeg",
        "/projects/Project2/photos/3.jpeg"
      ]
    },
    {
      id: 3,
      title: "Трпезариска маса со столици",
      category: "Трпезарии",
      description: "Елегантен сет за трпезарија изработен од масивно дрво. Маса и столици кои се перфектен спој на традиционалната изработка и модерниот дизајн, создавајќи топла и пријатна атмосфера за вашиот дом.",
      featuredImage: "./projects/Project3/photos/1.jpeg",
      images: [
        "./projects/Project3/photos/1.jpeg",
        "/projects/Project3/photos/2.jpeg",
        "/projects/Project3/photos/3.jpeg"
      ]
    },
    {
      id: 4,
      title: "Дневна соба со полици",
      category: "Дневни соби",
      description: "Модерен мебел за дневна соба со полици за книги и декорации. Дизајниран за максимална функционалност и естетика, овој мебел го трансформира просторот во удобно и стилско место за релаксација.",
      featuredImage: "./projects/Project4/photos/1.jpeg",
      images: [
        "./projects/Project4/photos/1.jpeg",
        "/projects/Project4/photos/2.jpeg",
        "/projects/Project4/photos/3.jpeg"
      ]
    },
    {
      id: 5,
      title: "Канцелариски мебел",
      category: "Канцеларии",
      description: "Функционален канцелариски мебел дизајниран за максимална продуктивност и комфор. Изработен од квалитетни материјали со фокус на ергономија и практичност за долгорочна употреба.",
      featuredImage: "./projects/Project5/photos/1.jpeg",
      images: [
        "./projects/Project5/photos/1.jpeg",
        "/projects/Project5/photos/2.jpeg",
        "/projects/Project5/photos/3.jpeg"
      ]
    },
    {
      id: 6,
      title: "Спална соба со кревет и ноќни комоди",
      category: "Спални",
      description: "Луксузен сет за спална соба вклучувајќи кревет и ноќни комоди, изработени од природно дрво со фина завршна обработка. Комбинација на комфор и елеганција за создавање на совршен простор за одмор.",
      featuredImage: "./projects/Project6/photos/1.jpeg",
      images: [
        "./projects/Project6/photos/1.jpeg",
        "/projects/Project6/photos/2.jpeg",
        "/projects/Project6/photos/3.jpeg"
      ]
    }
  ];
};

// Load all projects
const projects: Project[] = loadProjects();

// Group projects by category
export const getProjectsByCategory = () => {
  const categories = {};
  
  projects.forEach(project => {
    if (!categories[project.category]) {
      categories[project.category] = [];
    }
    categories[project.category].push(project);
  });
  
  return categories;
};

// Get unique categories
export const getCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};

export default projects;
