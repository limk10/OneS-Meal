import React from "react";

import { Box, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Box pt={5}>
      <Typography variant="h4" gutterBottom>
        OneS Meals
      </Typography>

      <Typography variant="h6" gutterBottom>
        Um breve resumo do que foi usado
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Neste projeto foi usando a biblioteca <b>React ❤</b>, com as
        tecnologias, <b>ESLint</b> com padrão standart para organização do
        código, <b>Babel Root Import </b>
        para organização de importações, <b>Redux Thunk</b> para controle de
        estados, <b>Material UI</b> para Kit de UI, <b>Axios</b> para integração
        com o backend, implementado tratamento de erros no interceptor... entre
        outras tecnologias.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Clique em uma categoria de receita acima :)
      </Typography>
    </Box>
  );
};

export default Home;
