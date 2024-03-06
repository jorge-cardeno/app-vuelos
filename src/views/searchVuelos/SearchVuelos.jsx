import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AirplaneTicket } from '@mui/icons-material';
/* import searchVuelos from './searchVuelos.css'; */

const SearchVuelos = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item style={{display: 'grid'}}>
        <Typography variant="h6">Origen</Typography>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AirplaneTicket />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item style={{display: 'grid'}}>
        <Typography variant="h6">Destino</Typography>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AirplaneTicket />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item style={{display: 'grid'}}>
        <Typography variant="h6">Fecha de ida</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </Grid>

      <Grid item style={{display: 'grid'}}>
        <Typography variant="h6">Fecha de vuelta</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </Grid>

    </Grid>
  )
}

export default SearchVuelos
