import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

function WebSiteTable(){

    const [ rows, setRows] = useState([]);

    useEffect(()=>{
        const data = async() =>{
            const result = await fetch('http://localhost:8091/webSite/getAllWebSite');
            const json = await result.json();

            setRows(json);
        }
        data()
    }, []);

    return(
        <div>
            <Container>
      <Box sx={{ my: 2 }} className="box">
        {/* <Button
              key={'danger'}
              variant="soft"
              color={'danger'}
              size="sm"
              disabled
            >
              {'danger'}
            </Button>
            <Button
              key={'success'}
              variant="soft"
              color={'success'}
              size="sm"
              disabled
            >
              {'success'}
            </Button> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize:'large', backgroundColor:'#b7d7f3', fontFamily:'system-ui'}} align="center">Name</TableCell>
            <TableCell style={{ fontSize:'large', backgroundColor:'#b7d7f3', fontFamily:'system-ui'}} align="center">URL</TableCell>
            <TableCell style={{ fontSize:'large', backgroundColor:'#b7d7f3', fontFamily:'system-ui'}} align="center">Status</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor:'#f2f2f2'}}>
          {rows.map((row) => (
            <TableRow
              key={row.webSiteName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.webSiteName}</TableCell>
              <TableCell align="center">{row.webSiteUrl}</TableCell>
              <TableCell align="center">{ row.isActive === false ? 'Failed' : 'success' }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
      </Container>
        </div>
    );

}

export default WebSiteTable;