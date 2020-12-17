#SPA framework
Main focus of this SPIKE is to re-search static assets preload capabilities.
There are some additional factors that I will asses as well. Please see the requirements section.

###Requirements:
Should be able route between the pages and inside the page as well as give API to allow for our components and microuis to direct the routing (Nested Dynamic Routing). Should be able to work with our microuis with minimal modifications.
Should offer server side rendering for static and dynamic pages.
Preload/Prefetch: be able to at least support html relation hint attributes.



##nextjs
easy to understand and configure.
It would fit well with our existing architecture. It's open source.

https://www.npmjs.com/package/next-router

- routing
    - no routing file required for static and dynamic routing (using filename tokes/posts/[id].js),
      routing is based on physical structure of the files.
    - dynamic routing nodejs/express for the handler logic, supports middleware

- pre-rendering
    - supports static and dynamic pre-rendering
    - static is by default when there is no data to be fetched
    - support for static props pre-rendering
    - react hook to fetch data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more.
- misc
    - direct support for monorepo and microuis as well as typescript
    - has a nxdev plugin to support deployments

###summary:
Has very cool build cli that will report the what features are being recognized in build (SSR, Incremental Static Regeneration, Static props preload, server side render at runtime) It also reports what components contain what features.

Pros:
- Large community
- automated static analysis
- speed
- opinionated in right direction
- CLI shows build analysis
- straight forward setup
- Nested Dynamic layouts are possible (using next router)[https://reacttricks.com/nested-dynamic-layouts-in-next-apps/]

Cons:
- opinionated
- requires code changes to take advantage of some features


##single-SPA
Single spa all based on routing. Serving the pages is secondary.
Is quite opinionated about the way microuis and basic templates should be structured and coded.

- routing
    - supports dynamic and static as well as layout routing
    - supports lazy loading for routes

- pre-rendering
    - suports SSR - server side rendering

- misc
    - supports a large number of frameworks, including webcomponents

###summary:
Main feature of single-spa is routing with mounting and un-maunting microuis.
This requires some changes in components that are getting routed to (mainly adding the mount unmount bootstrap hooks).
Has CLI that helps with converting components. On it's own it doesn't support anything else than routing. Featured import-maps are standalone project that can be used independently.

Pros:
- large community
- buildin support for layout and page routing
- buildin import maps
- good CLI

Cons:
- it's just router attached to import maps it feels a bit too eclectic.


##Tailor
minimalistic, basic, nodejs/express based. Tailor is more a server than router.

  - routing
    - supports layout routing via html templates composing fragments
    - routing fault tolerance
    - performance budgeting

  - pre-rendering
    - supports ssr pre-rendering

###summary:
Very interesting take on microui. It's mission is to bring the microservices experience to the backend. It's a part of larger project (Mosaic)[https://www.mosaic9.org/]. Created and backed by Zalando (German Company). It's open source.

Pros:
- extremely modular and resilient
- handles streaming and injecting the fragments/microuis into the app.
- not opinionated as what front-end framework is supporting

Cons:
- I don't think it would be possible to use with import-maps (tailor is solving similar issue)
- no native CLI instead is using Lerna to help orchestrate microui-microservices
- I was not able to preload/prefetch any assets across fragments



##Riot
complete modular suite, focused on building riot component module that features RCM injector, css scoping and more
because of this, Riot is very opinionated.

  - routing
    - suports general static and dynamic routing (nodejs/express style)
    - supports layout routing via markup (static and dynamic)
    - supports lazy loading

  - pre-rendering
    - supports ssr

Pros:
  - supports Nested dynamic routing (https://gist.github.com/virtuald/ac2fabcc37aeb00ecfe7a94e29035c72)
Cons:
  - opinionated forcing to use it's own tag/router/


##other possible alternatives:
- Gatsby - Complete ecosystem, including plugins and deployment cloud.
  Doesn't seem to fit our requirements.
- Nuxtjs - like nextjs but for VUE
