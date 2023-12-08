
# reset-db-mysql

Reset a MySQL database to an empty state recreating it if needed.


## Install

```shell
npm i -D reset-db-mysql
```


## Usage

Configure the reset command in your `package.json` file:

```js
{
  "scripts": {
    "db:reset": "reset-db-mysql"
  }
}
```

Configure the `DATABASE_URL` in your local `.env` variables:

```ini
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DATABASE"
```

And run the command every time you want to reset and remove all the tables of the database:

```shell
npm run db:reset
```
