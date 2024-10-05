# Angular Modules :

## 1. Eager Loading - Default

We need to import all declared modules in `app.module.ts` so automatically they will be loaded by default. It is an default module loading strategy but it hampers the performance.

## 2. Lazy Loading - Most useful

Declare routes in `app-routing.module.ts` with,
`{path:'login', loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},`

Goto LoginModule and declare,
`RouterModule.forChild([{`
      `path:'', component:LoginComponent`
`}])`

Declare exports,
`exports:[RouterModule]`

Trigger it on event like button click etc. so module will be lazily loaded.
`<button routerLink="login">Login</button>`

## 3. Pre Loading - Custom 

***Preload all modules***
If we set this strategy in app-routing.module as follows,

`RouterModule.forRoot(routes, {`
      `preloadingStrategy: PreloadAllModules,`
`}),`

then lazy loaded modules also get preloaded. 

If we want to restrict it then we need to go with custom preload strategy & maintain a flag like,
`data:{preload:true},`

***Custom Preload module strategy***

A `CustomPreloadingStrategyService.service.ts` created

add a flag like,  data:{preload:true},

`{`
    `path: 'preload2',`
    `data:{preload:true},`
    `loadChildren: () =>`
      `import('./preload-module2/preload-module2.module').then(m => m.PreloadModule2Module),`
`}`

Load strategy like,
`RouterModule.forRoot(routes,{`
      `preloadingStrategy: CustomPreloadingStrategyService,`
`})`