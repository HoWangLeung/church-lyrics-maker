import { Button, CircularProgress, Container, Grid, List, ListItem, ListItemSecondaryAction, ListItemText, Modal, Paper, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useImage from '../../useImage';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


export default function ImageArea({ classes, setProperties, properties, errors, setErrors,
    loaded, setLoaded

    // lastImg 
}) {



    let lyricsImg = properties.img
    const [rawImg, setRawImg, handleUpload, isLoading, uploadedImg] = useImage(
        setProperties, properties,
        errors, setErrors,
        loaded, setLoaded
    )
    const handleRemove = (e) => {
        setProperties(state => ({
            ...state,
            img: ""
        }))
        setRawImg("")
    }
    return (
        <Grid
            style={{ margin: "10px 0px" }}
            justifyContent="center"
            alignItems="center"
            container item>

            <Container>
                <Paper elevation={5}>
                    <Grid
                        direction="row"
                        container justifyContent="center" alignContent="center">
                        <Grid container item lg={8} justifyContent="flex-start" >
                            <List >
                                <ListItem>
                                    {!loaded && lyricsImg &&

                                        <CircularProgress />

                                    }
                                    {lyricsImg && <img
                                        onLoad={() => setLoaded(true)}
                                        style={{
                                            borderRadius: "5px",
                                            display: loaded ? "unset" : "none"
                                        }}
                                        src={lyricsImg} alt="ad" width="100%" height="100%" />}

                                    {rawImg && !lyricsImg && <img style={{ borderRadius: "5px" }}
                                        src={rawImg} alt="ad" width="100%" height="100%" />}

                                    {!rawImg && !lyricsImg &&
                                        <Grid container justifyContent="center" >
                                            <span
                                                style={{ color: "#9E9E9E", fontWeight: 600 }}
                                            >WINDOW + SHIFT + S to capture<br />
                                            </span>
                                            <span
                                                style={{ color: "#9E9E9E", fontWeight: 600 }}
                                            > CTRL + V to paste
                                            </span>
                                        </Grid>

                                    }

                                </ListItem>
                            </List>
                        </Grid>
                        {/* {lastImg &&
                            <Grid container item lg={4} direction="row" justifyContent="center" alignContent="center">
                                <Button onClick={handleRemove}  >移取</Button>
                            </Grid>} */}

                        {rawImg && !lyricsImg &&
                            <Grid container item lg={4} direction="row" justifyContent="center" alignContent="center">
                                <Button onClick={handleUpload} disabled={isLoading ? true : false}  >
                                    {isLoading && <CircularProgress
                                        size={18} style={{ marginRight: "10px" }} />}
                                    Confirm</Button>
                                <Button onClick={() => setRawImg("")} disabled={isLoading ? true : false} >Cancel</Button>
                            </Grid>}

                        {lyricsImg &&
                            <Grid container item lg={4}
                                direction="column"
                                justifyContent="center"
                                alignContent="center"

                            >
                                {/* <CheckCircleIcon style={{ marginLeft: "11px" }} /> */}
                                <Button
                                    size="large"
                                    onClick={handleRemove}  >Remove</Button>


                            </Grid>
                        }

                    </Grid>
                </Paper>
            </Container>



        </Grid>
    )
}
