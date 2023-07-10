import {Typography, Grid}  from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

function ListadoNoticias() {

    const {noticias} = useNoticias()
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
        </>
     );
}

export default ListadoNoticias;