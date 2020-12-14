import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';
import { useParams } from 'react-router-dom'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let params = useParams();
    let carr = cars.filter((item => {
        return item.id == params.id
    }))
    // console.log(params.id)
    // console.log(useParams())
    // console.log(params)
    // console.log(carr)
    // console.log('match',props.match.params.id)
    // console.log('params: ', carr[0])
    return (
        <div>
            <Container maxWidth="sm" className="car-container">
                <Paper className="car-paper">
                    <div>
                        <h3>{carr[0].Name}</h3>
                    </div>
                    <div>
                        <Chip size="medium" label={`id: ${carr.id}`} />
                        <Chip size="medium" label={`Name: ${carr.Name}`} />
                        <Chip size="medium" label={`Miles_per_Gallon: ${carr.Miles_per_Gallon}`} />
                        <Chip size="medium" label={`Cylinders: ${carr.Cylinders}`} />
                        <Chip size="medium" label={`Displacement: ${carr.Displacement}`} />
                        <Chip size="medium" label={`Horsepower: ${carr.Horsepower}`} />
                        <Chip size="medium" label={`Weight_in_lbs: ${carr.Weight_in_lbs}`} />
                        <Chip size="medium" label={`Acceleration: ${carr.Acceleration}`} />
                        <Chip size="medium" label={`Year: ${carr.Year}`} />
                        <Chip size="medium" label={`Origin: ${carr.Origin}`} />
                    </div>
                </Paper>
            </Container>
        </div>    )
}
export default Car