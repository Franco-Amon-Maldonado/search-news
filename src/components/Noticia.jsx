import { Grid, Card, CardActions, CardContent, CardMedia, Link, Typography, Box } from "@mui/material";

function Noticia({ noticia }) {

    const { urlToImage, url, title, description, source } = noticia

    return (

        <Grid item sm={12} md={6} lg={4} justifyContent="space-between" direction="column" mb={5}>
            <Box sx={{
                height: "100%",
                display: "flex",
                padding: "10px"
            }}>
                <Card>

                    <CardMedia
                        component="img"
                        alt={`Imagen de la noticia ${title}`}
                        image={urlToImage}
                        height="200px"
                    />

                    <CardContent>
                        <Typography variant="body1" color="error" textAlign="center">
                            {source.name}
                        </Typography>
                    </CardContent>

                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                        
                    </CardContent>

                    <CardActions>
                            <Link
                                href={url} target="_blank" variant="button" color="error" width={'100%'} textAlign="center"
                            >Leer noticia</Link>
                    </CardActions>

                </Card>
            </Box>

        </Grid>

    );
}

export default Noticia;