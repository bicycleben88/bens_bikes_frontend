# Ben's Bikes

This is a front end e-commerce web application built with React. Users can create an account, browse thru products, add items to a cart & checkout. It accesses a full CRUD API built with Ruby on Rails that follows RESTful convention.

## [Video Walkthru](https://www.youtube.com/playlist?list=PLjYC3ZkfhqCpDJl-34_mycn5KZcrrsPKR)

> ### Live Earls:
>
> [bens-bikes-frontend.vercel.app](https://bens-bikes-frontend.vercel.app/)
>
> [bens-bikes-backend.herokuapp.com](https://bens-bikes-backend.herokuapp.com/items)

![Landing page to Ben's Bikes](https://i.imgur.com/Kt3juRq.jpg)

## Technologies Used

> ### Front End:
>
> - React.js
> - JavaScript
> - CSS Components
> - JWT
>
> ### Back End:
>
> - Ruby on Rails
> - PostgresQL
> - JWT
> - BCrypt

## Features & Functions

> Custom Hooks
>
> - useCart()
>   - use createContext() to create Provider component
> - ![local state provider](https://i.imgur.com/XtDjpIt.png)
>   - create higher level component called \<CartStateProvider>
>     - add state & functions
>     - return Provider component w/ all values that will be passed down as props to child components
> - ![cart state provider](https://i.imgur.com/ymSXt0m.png)
>   - create custom hook using useContext()
> - ![use cart hook](https://i.imgur.com/WRMtv1D.png)
>   - export hook & provider component
> - ![export](https://i.imgur.com/4vwOCVi.png)
>
> Store JWT Tokens in Local Storage
>
> - Keeps a a user logged in if page is reloaded
> - Make fetch request to API end point
>   - will return a JWT token
>   - save token in local storage thru the window object
>     ![set item local storage](https://i.imgur.com/2SKQmfh.png)
> - In App.js
>   - look for token in local storage
>   - add it to globalState
>     ![app global state](https://i.imgur.com/XaCXrc0.png)
> - To log out
>   - remove token from local storage
>   - set token in globalState to null
>     ![log out button](https://i.imgur.com/qY7Xmyq.png)

## Notes

> - Context.Provider allows consuming components to subscribe to context changes

## Contact

> - [LinkedIn](https://www.linkedin.com/in/benjamin-alt-higginbotham/)
> - [Portfolio](https://higginbotham.fun/)
> - [Tweet @BenMichaelJord1](https://twitter.com/BenMichaelJord1)
