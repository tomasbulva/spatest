# SPA frameworks
Main focus of this SPIKE is to research static assets preload capabilities.
There are some additional factors that I will asses as well. Please see the parameters section. The order of frameworks here is as it was ordered in my story. Does not express preference or score. I have tried to asses the abilities of the frameworks as unbiased as possible.

### SPIKE parameters:
- Asses ability to route between the pages statically and dynamically.
- Layout routing static as well as dynamic as well as ability to route across components nested layouts (Nested Dynamic Routing).
- Asses ability to work with our microuis ideally with minimal or no modifications.
- Asses ability to server side render for static and dynamic pages.
- Asses ability preload, prefetch or support html relation hint attributes.

### repo:
https://github.com/tomasbulva/spatest

### pure react images as reference:
![pure-react-image-preload-code](https://github.com/tomasbulva/spatest/blob/main/assets/pure-react-image-preload-code.png)
![pure-react-image-preload](https://github.com/tomasbulva/spatest/blob/main/assets/pure-react-image-preload.png)

# nextjs
it's mature and complete framework. It's arguably the most used by a small and large companies alike. Companies like hulu, netflix, uber, github are using nextjs. Easy to understand and setup as dev environment. It's open source.

### features:
- routing
  - no routing setup required for basic routing (using filename tokes/posts/[id].js),
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

### summary:
Has very nice cli that makes this a developer experience. It has smooth CLI init flow as well as build flow that reports what features are being recognised in build: SSR, Incremental Static Regeneration, Static props preload, server side render at runtime. As well as all other features. It also reports what components contain what features.

Pros:
- Large community
- speed produced bundles and served results are very quick
- architecture seems very compatible with our frontend setup
- is being directly supported by nxdev (monorepo management tooling)
- CLI shows build analysis
- straight forward setup
- cool router features
- Nested Dynamic layouts are possible (using next router)[https://reacttricks.com/nested-dynamic-layouts-in-next-apps/]

Cons:
- requires code changes to take advantage of some features
- because of the complete ecosystem it might impose psychological lock-in

### images:
![nextjs-preload](https://github.com/tomasbulva/spatest/blob/main/assets/nextjs-preload.png)
![nextjs-build-cli-result](https://github.com/tomasbulva/spatest/blob/main/assets/nextjs-build-cli-result.png)
![nextjs-preload-code](https://github.com/tomasbulva/spatest/blob/main/assets/nextjs-preload-code.png)


# single-SPA
Single spa also mature framework used by a lot of big and small companies. It's been battle tested. It's build around routing rather then serving. Serving is based on 3rd party components. Is quite opinionated about the way microuis and basic templates should be structured and coded.

### features:
- routing
    - supports dynamic and static as well as layout routing
    - supports lazy loading for routes

- pre-rendering
    - suports SSR - server side rendering

- misc
    - supports a large number of frameworks, including webcomponents

### summary:
Main feature of single-spa is routing with mounting and un-maunting microuis.
This requires some changes in components that are getting routed to (mainly adding the mount unmount bootstrap hooks).
Has CLI that helps with converting components. On it's own it doesn't support anything else than routing. Featured import-maps are standalone project that can be used independently.

Pros:
- large community
- build-in support for layout and page routing
- build-in import maps
- import maps that offer excellent developer experience
- nice CLI

Cons:
- doesn't offer optimisations or even analysis of the performance.
- it's just router attached to import maps it feels a bit eclectic.
- because of the import maps might not offer best performance?
- setup is not as straight forward as some other frameworks (import maps may require 3rd server to as deployer).

### images:
![singlespa-build-optimization](https://github.com/tomasbulva/spatest/blob/main/assets/singlespa-build-optimization.png)
![singlespa-developerment-serving](https://github.com/tomasbulva/spatest/blob/main/assets/singlespa-developerment-serving.png)


# Tailor
Is build around the serving files rather then routing. It's a part of larger project (Mosaic)[https://www.mosaic9.org/]. Other parts of this framework are offering two other projects that take care of routing. Created and backed by Zalando (German Company). It's open source.

### features:
- routing
  - supports layout routing via html templates composing fragments
  - routing fault tolerance
  - performance budgeting

- pre-rendering
  - supports ssr pre-rendering

### summary:
Very interesting take on microui SPA framework. It's mission is to bring the microservices experience to the backend.

Pros:
- extremely modular and resilient
- handles streaming and injecting the fragments/microuis into the app.
- not opinionated as what front-end framework is supporting

Cons:
- I don't think it would be possible to use with import-maps (tailor is solving similar issue)
- no native CLI instead is using Lerna to help orchestrate microui-microservices
- I was not able to preload/prefetch any assets across fragments
- small community

### images:
![tailorjs-developement-serving](https://github.com/tomasbulva/spatest/blob/main/assets/tailorjs-developement-serving.png)
![tailorjs-build](https://github.com/tomasbulva/spatest/blob/main/assets/tailorjs-build.png)
![tailorjs-preload](https://github.com/tomasbulva/spatest/blob/main/assets/tailorjs-preload.png)


# Riot
complete modular suite, focused on building riot component module that features RCM injector, css scoping and more because of this, Riot is more than just opinionated, it is closed ecosystem. (Examples)[https://riot.js.org/made-with-riot/].

- routing
  - suports general static and dynamic routing (nodejs/express style)
  - supports layout routing via markup (static and dynamic)
  - supports lazy loading

- pre-rendering
  - supports ssr

### summary:
Riotjs is focused on it's own ecosystem. Using it's own components framework syntax of which is similar in appearance to VUE components. Using it's own router, own server and so on. It's pretty closed system. But because of this it offers very good performance.

Pros:
  - supports Nested dynamic routing via native router
  - lean libraries
  - very good performance
  - all in one solution
  - open source

Cons:
  - riotjs is full package not just SPA framework or just router
  - can not be used with our components we would have to re-write components to riotjs

### images:
![riotjs-build-webpack](https://github.com/tomasbulva/spatest/blob/main/assets/riotjs-build-webpack.png)
![riotjs-developement-serving](https://github.com/tomasbulva/spatest/blob/main/assets/riotjs-developement-serving.png)


## other possible alternatives:
- Gatsby - Complete ecosystem, including plugins and deployment cloud.
- Nuxtjs - like nextjs but for VUE
