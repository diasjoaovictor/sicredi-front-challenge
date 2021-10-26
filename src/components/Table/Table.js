import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import { Grid } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const rows = [
  { id: 1, NDC: "0023", ABG: "Agência", CTL: "100", COO: "0809", AC: "02", dt_ini: '10/10/2021', dt_fim: '20/12/2021', situacao: 'Vigente' },
  { id: 2, NDC: "0023", ABG: "Cooperativa", CTL: "100", COO: "0809", AC: "02", dt_ini: '10/10/2021', dt_fim: '20/12/2021', situacao: 'Encerrado'  },
  { id: 3, NDC: "0023", ABG: "Cooperativa", CTL: "100", COO: "0809", AC: "02", dt_ini: '10/10/2021', dt_fim: '20/12/2021', situacao: 'Encerrado'  },
  { id: 4, NDC: "0023", ABG: "Cooperativa", CTL: "100", COO: "0809", AC: "02", dt_ini: '10/10/2021', dt_fim: '20/12/2021', situacao: 'Inativo'  },
  { id: 5, NDC: "0023", ABG: "Agência", CTL: "100", COO: "0809", AC: "02", dt_ini: '10/10/2021', dt_fim: '20/12/2021', situacao: 'Vigente'  },
];

export const DenseTable = () => {
  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs md={6.5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500, maxWidth: "100%" }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Número do Comite</TableCell>
                <TableCell align="center">Abrangência</TableCell>
                <TableCell align="center">Central</TableCell>
                <TableCell align="center">Cooperativa</TableCell>
                <TableCell align="center">Agência</TableCell>
                <TableCell align="center">Data Início<br />Data Fim</TableCell>
                <TableCell align="center">Situação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" align="center" scope="row">
                    {row.NDC}
                  </TableCell>
                  <TableCell align="center">{row.ABG}</TableCell>
                  <TableCell align="center">{row.CTL}</TableCell>
                  <TableCell align="center">{row.COO}</TableCell>
                  <TableCell align="center">{row.AC}</TableCell>
                  <TableCell align="center">{row.dt_ini}<br />{row.dt_fim}</TableCell>
                  <TableCell align="center">
                    {row.situacao === 'Vigente' ?
                      <Chip icon={<CheckCircleOutlineIcon />} color="success" label={row.situacao} sx={{ width: "90%" }} />
                      : row.situacao === 'Encerrado' ?
                        <Chip icon={<HighlightOffIcon />} color="error" variant="outlined" label={row.situacao} sx={{ width: "100%" }} />
                        :
                        <Chip icon={<HighlightOffIcon />} color="default" label={row.situacao} sx={{ width: "90%" }} />}

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    <br/>
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs md={2.1}>
        <Pagination count={10} size="small" color="success"/>
      </Grid>
    </Grid>
  </>
  );
};
