import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material";


const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

function Formulario() {
    return ( 
       <form>
          <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>  
            <Select label="Categoria">
                {CATEGORIAS.map((categoria) =>(
                    <MenuItem key={categoria.value} value={categoria.value}>
                        {categoria.label}
                    </MenuItem>
                ))}
            </Select>
            <Box mt={2} textAlign="right">   
                <Button  variant="text" color="info" sx={{
                    border: "solid 1px"
                }}>
                    Buscar Noticias
                </Button>
            </Box>
          
          </FormControl>  
       </form>
     );
}

export default Formulario;