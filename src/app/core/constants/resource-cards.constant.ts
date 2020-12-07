const RESOURCES_USEFUL_LINKS = [
  {
    title: 'Angular Cheat Sheet',
    link: [`https://angular.io/guide/cheatsheet`],
    description: 'The cheat sheet is super useful.',
    linkText: 'Reference',
  },
  {
    title: 'Style Guide',
    link: ['https://angular.io/guide/styleguide'],
    description:
      'Angular has a very opinionated style guide. Angular is opinionated and all projects should look largely the same. Familiarize yourself with it and follow it',
    linkText: 'Reference',
  },
  {
    title: 'CLI Commands',
    link: ['https://cli.angular.io/'],
    description: 'CLI Quick Link',
    linkText: 'Reference',
  },
];

const RESOURCES_LIBRARY_LINKS = [
  {
    title: 'Rxweb Validators',
    link: [
      'https://docs.rxweb.io/reactive-dynamic-forms/dynamic-forms/stepbystep#installpackage',
    ],
    description:
      'I’d recommend using RXWeb forms in every Angular project. There’s literally no reason not to use them. Angular is dropping many validators.',
    linkText: 'RxWeb',
  },
];

const RESOURCES_TUTORIAL_LINKS = [
  // https://angular.io/guide/dependency-injection-in-action
  // https://angular.io/tutorial
  {
    title: 'Observable Data Service',
    link: ['https://coryrylan.com/blog/angular-observable-data-services'],
    description: 'Killer tutorial on building observable data services',
    linkText: 'Tutorial',
  },
  {
    title: 'Angular Tour of Heroes',
    link: ['https://angular.io/tutorial'],
    description: 'The base angular tutorial',
    linkText: 'Tour of Heroes',
  },
  {
    title: 'State Management with Services',
    link: [
      'https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/',
    ],
    description: 'Build a system to manage state with services',
    linkText: 'Tutorial',
  },
  {
    title: 'NGRX Pokedex',
    link: [
      'https://www.carloscaballero.io/build-your-pokedex-part1-introduction-ngrx/',
    ],
    description:
      'Amazing full tutorial in NGRX. Covers many angular concepts in addition to NGRX quite well.',
    linkText: 'NGRX Tutorial',
  },
];

export const RESOURCES_CARDS = {
  tutorials: RESOURCES_TUTORIAL_LINKS,
  libraries: RESOURCES_LIBRARY_LINKS,
  useful: RESOURCES_USEFUL_LINKS,
} as const;
