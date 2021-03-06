import React, { useContext } from 'react'
import { Button, ButtonGroup, Container, Grid, IconButton, Paper, Slider, TextField, Typography } from '@material-ui/core'
import { image_properties, type_slider } from '../SettingConstant'
import { PropertiesContext } from '../../../../../../context/PropertiesContext';
import { FormattedMessage } from 'react-intl';
export default function ImageControl() {


    const { properties, setProperties, handleSetProperties, classes } = useContext(PropertiesContext)

    function valuetext(value) {
        return `${value}px`;
    }


    const handleTextPropertyChange = propName => (event, newValue) => {
        

        let config = {
            channel: "image",
            property: propName
        }
        handleSetProperties(config, newValue)
    }
    
    return (
        <Container maxWidth={false}>
            <Typography variant="h5"><FormattedMessage id="lyricsMaker.advance.imageControl" /></Typography>
            <Typography style={{ marginTop: "5px", marginBottom: "20px", opacity: "0.7" }} ><FormattedMessage id="lyricsMaker.advance.imageControl.description" /></Typography>
            <Paper elevation={3} style={{ padding: "55px", borderRadius: "18px" }}>

                <Grid container>
                    {image_properties.map(({ propName, displayName, inputType, marks, min, max, step }, i) => {
                        return (
                            <React.Fragment key={i}>
                                {inputType == type_slider &&
                                    <>
                                        <Typography style={{ marginBottom: "40px", fontWeight: "600", fontSize: "15px" }}>{displayName}</Typography>
                                        < Slider
                                            color="secondary"
                                            classes={{ valueLabel: classes.valueLabel }}
                                            style={{ marginBottom: "50px" }}
                                            name={propName}
                                            value={properties.image[`${propName}`]}
                                            onChange={handleTextPropertyChange(propName)}
                                            // defaultValue={60}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider-always"
                                            step={step}
                                            marks={marks}
                                            valueLabelDisplay="on"
                                            min={min}
                                            max={max}

                                        />
                                    </>
                                }

                            </React.Fragment>
                        )
                    })}

                </Grid>
            </Paper>

        </Container>
    )
}
