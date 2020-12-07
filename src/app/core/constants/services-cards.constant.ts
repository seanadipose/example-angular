export const SERVICES_CARDS = [
  {
    title: 'Introduction',
    description: [
      'A reusable Angular service is designed to encapsulate business logic and data with different components of Angular. It is basically a class that has a well-defined purpose to do something. You can create a service class for data or logic that is not associated with any specific view to share across components.',
      'These are called by several different names including: services, providers, viewProviders, valueProviders.',
      'While there are a number of different types of providers the simplest provider is merely a service decorated with the @Injectable() tag. This injects the service into the root of the whole app. These are the Services referred to as "singletons".',
    ],
  },
  {
    title: 'Why Services Are Needed',
    description: [
      'If you write all the business logic in components, you will have the following problems:',
      '1. You will not be able to reuse that logic anywhere else and you will have to re-code the entire logic in the target component.',
      '2. Your components will become hard to maintain as you will have to maintain two copies of the same code.',
      'So, if you wrap your business logic in a reusable Angular service, you will not only keep your components clean but also get the benefits of reusability and maintainability.',
    ],
  },
  {
    title: 'Best Practices',
    description: [
      'If any component method has logic that goes beyond ten lines of code, it should be considered a candidate to be wrapped in a reusable Angular service.',
      "Always make sure to decorate your service class with the @Injectable() decorator so that when you inject any other service in this service, you don't get an error.",
    ],
  },
  {
    title: 'Dependency Injection',
    description: [
      'Dependency injection is used to provide components with the services they can use. To define a class as a service in Angular, the @Injectable() decorator is used.',
      'It provides the metadata that allows Angular to inject it into a component as a dependency. Similarly, the @Injectable() decorator is used to indicate that a component or other class (such as another service, a pipe, or an NgModule) has a dependency.',
    ],
  },
] as const;
