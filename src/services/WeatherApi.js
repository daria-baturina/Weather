export default class WeatherApi {
  find(search) {
    const testData = {
      temperature: '12 C',
      forecast: [
        {
          temperature: '12 C'
        },
        {
          temperature: '22 C'
        },
        {
          temperature: '32 C'
        },
      ],
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(testData), 500);
    });
  }
}