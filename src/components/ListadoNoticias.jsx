import {Typography, Grid}  from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

function ListadoNoticias() {

    const {noticias} = useNoticias()
    console.log(noticias);
    return ( 
        <>
            <Typography variant="h2" component="h3" textAlign="center" marginY={7}>
                Ultimas Noticias    
            </Typography>

            <Grid container direction="row" justifyContent="center" alignItems="center">
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