npm install --save @nestjs/sequelize sequelize sequelize-typescript pg-hstore pg
npm install --save-dev @types/sequelize

## TODO:

- jwt sign and decode to req.user use AuthGuard (no use of JWT passport, just to give a test)
- Add exclude feature for useGlobalGuards #964: https://github.com/nestjs/nest/issues/964

- add cors/helm etc
- error handling
- cron jobs

httpie localhost:3000/profile Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyNzU5NTExLCJleHAiOjE2MDI4NDU5MTF9.iV9og49A-qt03Sy*n13p_Y4bkZHkruEPlNm*-sEyG1g"

httpie POST localhost:3000/auth/login username=Tuo pass=111222
httpie localhost:3000/profile

###### add roles for admin/staff

###### add public for exclusion

https://docs.nestjs.com/guards

## PROBLEMS:

- seuqlize typescript couldn't support autocompletion on create/update/where: https://github.com/RobinBuschmann/sequelize-typescript/issues/726
- [nest g resource](https://trilon.io/blog/introducing-cli-generators-crud-api-in-1-minute) - will not include orm part - need create a yeoman like cli to generate Sequelize-relation scaffoldings.
