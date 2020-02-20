import axios from 'axios'

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'

const beersService = axios.create({
    baseURL
})

export const getAllBeers = async () => {
    const {data} = await beersService.get()
    return data
}