<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description
```
 {
   "startDate": "11-11-2024",
   "endDate": "12-11-2024",
   "charge":{
     "amount": 50,
     "card":{
       "cvc": "413",
       "exp_month":12,
       "exp_year":2025,
       "number":"4242 4242 4242 4242"
     }
   }
 }

 step1: create user
 POST http:localhost:3001/users
{
  "email": "gmudumal@gmail.com",
  "password": "Test2@123"
}

 step2: login user
 POST http:localhost:3001/auth/login
 {
   "email": "test10201234@gmail.com,
   "password": "Test2@123"
 }

 step3: create reservation
 POST http:localhost:3000/reservation
 {
   "startDate": "11-11-2024",
   "endDate": "12-11-2024",
   "charge":{
     "amount": 10,
     "card":{
       "cvc": "413",
       "exp_month":12,
       "exp_year":2025,
       "number":"4242 4242 4242 4242"
     }
   }
 }
```
## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
