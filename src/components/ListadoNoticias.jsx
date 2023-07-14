import {Typography, Grid, Pagination, Stack} from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

function ListadoNoticias() {

    const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()
    const totalPaginas = Math.ceil(totalNoticias / 20) 
    return ( 
        <>
            <Typography variant="h2" component="h3" textAlign="center" marginY={7}>
                Ultimas Noticias    
            </Typography>

            <Grid container justifyContent="center">
                {noticias.map((noticia) =>(
                    <Noticia
                    key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid> 
            <Stack spacing={2} direction="row" justifyContent={"center"} alignItems={"center"} sx={{marginY: 5}}>
                <Pagination 
                    count={totalPaginas}
                    color="primary"
                    onChange={handleChangePagina}
                    page={pagina}
                />
            </Stack>
        </>
     );
}

export default ListadoNoticias;