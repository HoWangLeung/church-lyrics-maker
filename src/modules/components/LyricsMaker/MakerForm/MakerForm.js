import { Box, Button, CircularProgress, Container, FormHelperText, Grid, InputAdornment, MenuItem, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';
import FontSizeSlider from './FontSizeSlider';
import ImageArea from './ImageArea';
import { validator } from './Validator';
import SettingsIcon from '@material-ui/icons/Settings';
import AdvancedSettings from './AdvancedSettings/AdvancedSettings';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

}), { index: 1 });

export default function MakerForm({
    handleBlur,
    errors,
    setErrors,
    handleSubmit,
    properties,
    setProperties,
    setCart,
    isEditMode,
    setIsEditMode,
    loaded,
    setLoaded,
    submitting
}) {

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let lastSize = 60
    let lastColor = "#fff"
    let lastImg = ""
    let contentValue = JSON.parse(JSON.stringify(properties.content));
    if (Array.isArray(contentValue)) {
        contentValue = contentValue.join("\n\n")
    }




    const inputFile = useRef(null)
    const classes = useStyles();


    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setIsEditMode(true)
        if (key === "title") {
            setIsEditMode(false)
        }

        setProperties(state => ({
            ...state,
            [key]: value
        }))


    }

    const handleUpload = () => {
        inputFile.current.click();
    }
    const handleFileChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {


            let cart = JSON.parse(e.target.result)
            setCart(cart)
        };
    }


    return (
        <Container >
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                style={{ padding: "10px 0px 0px 0px" }}
            >
                <Typography component="h1" variant="h5" >
                    添加詩歌
                </Typography>
                <div>
                    {/* <IconButton onClick={handleUpload}  >
                        <input
                            accept=".json"
                            onChange={(e) => handleFileChange(e)}
                            type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                        <PublishIcon />
                    </IconButton> */}
                    {/* <Button variant="outlined" onClick={() => setLyrics(state => ({
                        ...state,
                        title: "",
                        content: ``,
                        fontSize: 60,
                        fontColor: "#fff",
                        height: "",
                        textColor: "#fff",
                        lastPlayed: false

                    }))} >新的詩歌</Button> */}
                    {/* <Button variant="outlined" startIcon={<SettingsIcon />} >Advanced</Button> */}
                    <AdvancedSettings />
                </div>
            </Grid>


            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    onBlur={handleBlur}
                    error={errors.title ? true : false}
                    helperText={errors.title}
                    variant="outlined"
                    margin="normal"

                    fullWidth
                    id="title"
                    label="歌名"
                    name="title"
                    autoComplete="title"
                    onChange={handleChange}
                    value={properties.title}

                    InputLabelProps={{
                        shrink: true
                    }}
                    placeholder="以逗號分開歌名和作者, 例:無言的讚頌,曲、詞：朱浩權"
                />
                <Box mb={2}>
                    <Grid
                        container
                        item
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid
                            container
                            item
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            xs={6}
                        >
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                name="composer"
                                label="Composer"
                                id="cardCvc"
                                value={properties.composer}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            xs={6}
                        >
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                name="lyricist"
                                label="Lyricist"
                                id="lyricist"
                                value={properties.lyricist}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <TextField
                    error={errors.content ? true : false}
                    helperText={errors.content}
                    onBlur={handleBlur}

                    fullWidth
                    variant="outlined"
                    id="standard-multiline-flexible"
                    label="歌詞"
                    multiline
                    rows={20}
                    name="content"
                    value={contentValue}
                    onChange={handleChange}
                    autoComplete="content"
                />


                {/* <FontSizeSlider properties={properties} setProperties={setProperties} /> */}
                <ImageArea
                    classes={classes}
                    properties={properties}
                    setProperties={setProperties}
                    setErrors={setErrors}
                    errors={errors}
                    loaded={loaded}
                    setLoaded={setLoaded}
                />




                <Grid
                    container
                    justifyContent="center"
                >

                    <Button
                        disabled={submitting}
                        size="large"
                        type="submit" variant="outlined" style={{
                            margin: "20px 0px",

                        }}>
                         {submitting && <CircularProgress
                            size={18} style={{ marginRight: "10px" }} />}
                        Submit
                    </Button>
                </Grid>

            </form>




        </Container>
    )
}
