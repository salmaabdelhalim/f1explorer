import React from "react";
import "./Races.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DriverTable = ({ results = [] }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell className="table-cell">Position</TableCell>
          <TableCell className="table-cell">Driver</TableCell>
          <TableCell className="table-cell">Constructor</TableCell>
          <TableCell className="table-cell">Nationality</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((result, idx) => (
          <TableRow key={idx}>
            <TableCell className="table-cell">{result.position}</TableCell>
            <TableCell className="table-cell">
              {result.Driver.givenName} {result.Driver.familyName}
            </TableCell>
            <TableCell className="table-cell">
              {result.Constructor.name}
            </TableCell>
            <TableCell className="table-cell">
              {result.Driver.nationality}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DriverTable;
