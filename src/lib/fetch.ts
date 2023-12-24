const url = process.env.RAPID_API_URL as string;
const apiKey = process.env.X_RAPID_API_KEY as string;
const apiHost = process.env.X_RAPID_API_HOST as string;

export const fetchCars = async () => {
    try {
        const response = await fetch(`${url}?model=corolla`, {
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