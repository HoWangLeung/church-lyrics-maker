import { Container, Paper } from '@material-ui/core'
import React from 'react'
import MakerForm from './MakerForm/MakerForm'

export default function LyricsMaker({
    loaded,
    setLoaded,
    handleBlur,
    errors,
    setErrors,
    handleSubmit,
    setCart,
    properties,
    setProperties,
    isEditMode,
    setIsEditMode,
    cart,
    submitting,
    loadingOne,
    handleSmartSplit

}) {
    return (
        <Container   maxWidth={false} style={{marginBottom:"30px"}}>

            <Paper elevation={3} style={{ borderRadius: "15px",width:"100%",paddingBottom:"25px" }} >
                <MakerForm
                    loaded={loaded}
                    setLoaded={setLoaded}
                    handleSubmit={handleSubmit}
                    properties={properties}
                    setProperties={setProperties}
                    setCart={setCart}
                    isEditMode={isEditMode}
                    setIsEditMode={setIsEditMode}
                    cart={cart}
                    errors={errors}
                    setErrors={setErrors}
                    handleBlur={handleBlur}
                    submitting={submitting}
                    loadingOne={loadingOne}
                    handleSmartSplit={handleSmartSplit}
                />
            </Paper>
        </Container>
    )
}
