npm install --save @nestjs/sequelize sequelize sequelize-typescript pg-hstore pg
npm install --save-dev @types/sequelize

## TODO:

- jwt sign and decode to req.user use AuthGuard (no use of JWT passport, just to give a test)
- Add exclude feature for useGlobalGuards #964: https://github.com/nestjs/nest/issues/964

- add cors/helm etc
- error handling
- cron jobs

// ht localhost:3000/profile Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAyNzU5NTExLCJleHAiOjE2MDI4NDU5MTF9.iV9og49A-qt03Sy*n13p_Y4bkZHkruEPlNm*-sEyG1g"

ht POST localhost:3000/auth/login username=Tuo pass=111222
ht localhost:3000/profile
