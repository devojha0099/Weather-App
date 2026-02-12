const API_KEY= "f5ce12a06041b1425b89f62d6455e5ad";
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export async function getWeatherData(city){
  try{
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
    if(!response.ok) throw new Error('City not Found')

    return await response.json()
  }catch(error){
    throw error
  }
}

export async function getForecastData(lat ,lon){
  try{
    const response = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )

    if(!response.ok) throw new Error('Forecast not available')
    return await response.json();
  }catch(error){
    throw error;
  }
}