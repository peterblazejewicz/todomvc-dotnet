# todomvc-dotnet
Angular 2 TodoMVC backed by Dotnet Kestrel server featureing EF7 and Web API.

![TodoMvc Dotnet](https://cloud.githubusercontent.com/assets/14539/16746839/95b5754e-47bc-11e6-9f97-d91d7c3e52c1.png)

## Features

- Angular CLI based client project
- Kestrel server with static file support
- HTML5 routing
- CORS support
- EntityFramework 7 integration
- Sass (.scss) implementation
- NPM managed client side dependencies for CSS styles

## Building

### Client app

```
cd TodoMVCDotnet.Client
npm init
ng build
```

### Dotnet app

``` 
cd TodoMVCDotnet.Client
dotnet restore
dotnet build
dotnet ef database update
dotnet run
```

## Development

You could start Dotnet api endpoint at `localhost:5000`:
```
dotnet run
```
and continue developing client at `localhost:4200`:
```
ng serve
```

## Author

@peterblazejewicz
