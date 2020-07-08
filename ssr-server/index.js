const express = require("express");
const passport = require('passport');
const boom = require('@hapi/boom');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const { config } = require("./config");

const app = express();

// body parser
app.use(express.json());
app.use(cookieParser());

// Agregamos las variables de timpo en segundos
const THIRTY_DAYS_IN_SEC = 2592000000;
const TWO_HOURS_IN_SEC = 7200000;

// Estategia basic
require('./utils/auth/strategies/basic');

// Estrategia google OAuth
require('./utils/auth/strategies/oauth');


app.post("/auth/sign-in", async function (req, res, next) {
  // Obtenemos el atributo rememberMe desde el cuerpo del request
  const { rememberMe } = req.body;

  passport.authenticate("basic", function (error, data) {
    try {
      if (error || !data) {
        next(boom.unauthorized());
      };


      req.login(data, { session: false }, async function (error) {
        if (error) {
          next(error);
        }

        const { token, ...user } = data;

        // Si el atributo rememberMe es verdadero la expiración será en 30 dias
        // de lo contrario la expiración será en 2 horas
        // res.cookie("token", token, {
        //   httpOnly: !config.dev,
        //   secure: !config.dev,
        //   maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC
        // });

        if (!config.dev) {
          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: rememberMe
              ? THIRTY_DAYS_IN_SEC
              : TWO_HOURS_IN_SEC
          });
        } else {
          res.cookie("token", token)
        }

        res.status(200).json(user);
      })
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

app.post("/auth/sign-up", async function (req, res, next) {
  const { body: user } = req;

  try {
    await axios({
      url: `${config.apiUrl}/api/auth/sign-up`,
      method: "post",
      data: user
    });

    res.status(201).json({ message: "user created" })
  } catch (error) {
    next(error);
  }
});

app.get("/movies", async function (req, res, next) {

});

app.post("/user-movies", async function (req, res, next) {
  try {
    const { body: userMovie } = req;
    const { token } = req.cookies;
    console.log('EL USER MOVIE  ...', userMovie);
    console.log('EL TOKEN ES ...', token);

    const { data, status } = await axios({
      url: `${config.apiUrl}/api/user-movies`,
      headers: { Authorization: `Bearer ${token}` },
      method: 'post',
      data: userMovie
    });

    if (status !== 201) {
      return next(boom.badImplementation());
    };

    res.status(201).json(data);

  } catch (error) {
    next(error);
  }
});

app.delete("/user-movies/:userMovieId", async function (req, res, next) {
  try {
    const { userMovieId } = req.params;
    const { token } = req.cookies;

    console.log('EL TOKEN PARA BORRAR QUE VIENE DE LA COOKIE ES ...', token);
    console.log('EL MOVIE ID A BORRAR ES....', userMovieId);

    const { data, status } = await axios({
      url: `${config.apiUrl}/api/user-movies/${userMovieId}`,
      headers: { Authorization: `Bearer ${token}` },
      method: "delete"
    });

    if (status !== 200) {
      return next(boom.badImplementation('ERROR POR MALA IMPLEMENTACIÓN....??'))
    };

    res.status(200).json(data);

  } catch (error) {
    console.log('POR AQUÍ HAY UN ERROR DE MALA IMPLEMENTACIÓN...TRY/CATCH');
    next(error);
  }
});

app.get("/auth/google-oauth", passport.authenticate("google-oauth", {
  scope: ['email', 'profile', 'openid']
}))

app.get("/auth/google-oauth/callback",
  passport.authenticate(
    "google-oauth",
    { session: false }
  ),
  function (req, res, next) {
    if (!req.user) {
      next(boom.unauthorized('AQUÍ HAY UN ERROR....EN GOOGLE...'));
    }

    const { token, ...user } = req.user;

    res.cookie("token", token, {
      httpOnly: !config.dev,
      secure: !config.dev
    })

    res.status(200).json(user);
  }
);

app.listen(
  config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
  }
);