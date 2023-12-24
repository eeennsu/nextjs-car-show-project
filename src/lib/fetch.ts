const url = process.env.RAPID_API_URL as string;
const apiKey = process.env.X_RAPID_API_KEY as string;
const apiHost = process.env.X_RAPID_API_HOST as string;

export const fetchCars = async (searchParams: CarSearchParams) => {

    const { fuel, limit, manufacturer, model, year } = searchParams;

    try {
        const response = await fetch(`${url}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost
            }
        });

        const result = await response.json() as Promise<Car[]>;

        return result;
    } catch (error) {
        console.log(error);
    }
}