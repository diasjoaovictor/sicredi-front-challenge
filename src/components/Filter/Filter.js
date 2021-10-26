import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./Filter.css";
import {
  abrangenciaBox,
  agenciaBox,
  centralBox,
  situacaoBox,
} from "./FilterBox";

export const Filter = () => {
  const [abrangencia, setAbrangencia] = useState("Todos");

  const handleAbrangencia = (event) => {
    setAbrangencia(event.target.value);
  };

  const [central, setCentral] = useState("Selecione");

  const handleCentral = (event) => {
    setCentral(event.target.value);
  };

  const [cooperativa, setCooperativa] = useState("Selecione");

  const handleCooperativa = (event) => {
    setCooperativa(event.target.value);
  };

  const [agencia, setAgencia] = useState("Selecione");

  const handleAgencia = (event) => {
    setAgencia(event.target.value);
  };

  const [situacao, setSituacao] = useState("Todas");

  const handleSituacao = (event) => {
    setSituacao(event.target.value);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs md={6.2}>
            <h2>Comitê Jovem: Comitês e mandatos</h2>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs md={6.2}>
            <div className="nav-bar">
              <div className="nav-item nav-item-active">
                Início <ChevronRightIcon/>
              </div>
              <div className="nav-item nav-item-active">
                Gestão de Comitês <ChevronRightIcon/>
              </div>
              <div className="nav-item">
                Comitês e Mandatos
              </div>
            </div>
          </Grid>
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs md={1.7}>
            <TextField
              id="standard-select"
              select
              label="Abrangência"
              value={abrangencia}
              onChange={handleAbrangencia}
              variant="standard"
              size="small"
              sx={{
                width: 180,
                maxWidth: "100%",
              }}
            >
              {abrangenciaBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs md={1.5}>
            <TextField
              id="standard-select"
              select
              label="Central"
              value={central}
              onChange={handleCentral}
              variant="standard"
              size="small"
            >
              {centralBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs md={1.5}>
            <TextField
              id="standard-select"
              select
              label="Cooperativa"
              value={cooperativa}
              onChange={handleCooperativa}
              variant="standard"
              size="small"
              sx={{
                width: 170,
                maxWidth: "100%",
              }}
            >
              {centralBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs md={1.5}>
            <TextField
              id="standard-select"
              select
              label="Agência"
              value={agencia}
              onChange={handleAgencia}
              variant="standard"
              size="small"
              sx={{
                width: 200,
                maxWidth: "100%",
              }}
            >
              {agenciaBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <br/>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs md={1}>
            <TextField
              id="standard-select"
              select
              label="Situação"
              value={situacao}
              onChange={handleSituacao}
              variant="standard"
              size="small"
              sx={{
                width: 100,
                maxWidth: "100%",
              }}
            >
              {situacaoBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs md={1}>
            <TextField
              id="standard"
              label="Número"
              variant="standard"
              size="small"
              sx={{
                width: 100,
                maxWidth: "100%",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Grid>
          <Grid item xs md={1}>
            <TextField
              id="standard"
              label="Data Início"
              variant="standard"
              size="small"
              type="date"
              sx={{
                width: 100,
                maxWidth: "100%",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Grid>
          <Grid item xs md={1}>
            <TextField
              id="standard"
              label="Data Término"
              variant="standard"
              size="small"
              type="date"
              sx={{
                width: 100,
                maxWidth: "100%",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </Grid>
          <Grid item xs md={1.2}>
            <Button
              variant="outlined"
              className="btn-search"
              color="success"
              size="small"
            >
              Limpar filtros
            </Button>
          </Grid>
          <Grid item xs md={1}>
            <Button variant="contained" color="success" size="small">
              <SearchIcon />
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
