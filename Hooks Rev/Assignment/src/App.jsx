// Hooks Rev/Assignment/src/App.jsx
import Heading from "./components/Heading";
import Input from "./components/Input";
import Card from "./components/Card";
import { useState, useEffect } from "react";
 
function App() {
  const fakeWeatherData = [
    { state: "Andhra Pradesh", temperature: 34, condition: "Sunny", humidity: 58 },
    { state: "Arunachal Pradesh", temperature: 22, condition: "Rainy", humidity: 82 },
    { state: "Assam", temperature: 29, condition: "Cloudy", humidity: 75 },
    { state: "Bihar", temperature: 33, condition: "Sunny", humidity: 66 },
    { state: "Chhattisgarh", temperature: 35, condition: "Hot", humidity: 60 },
    { state: "Goa", temperature: 30, condition: "Humid", humidity: 85 },
    { state: "Gujarat", temperature: 36, condition: "Sunny", humidity: 54 },
    { state: "Haryana", temperature: 32, condition: "Windy", humidity: 48 },
    { state: "Himachal Pradesh", temperature: 18, condition: "Snow", humidity: 70 },
    { state: "Jharkhand", temperature: 31, condition: "Rainy", humidity: 80 },
    { state: "Karnataka", temperature: 28, condition: "Cloudy", humidity: 78 },
    { state: "Kerala", temperature: 27, condition: "Rainy", humidity: 88 },
    { state: "Madhya Pradesh", temperature: 35, condition: "Sunny", humidity: 60 },
    { state: "Maharashtra", temperature: 33, condition: "Humid", humidity: 70 },
    { state: "Manipur", temperature: 26, condition: "Cloudy", humidity: 76 },
    { state: "Meghalaya", temperature: 24, condition: "Rainy", humidity: 90 },
    { state: "Mizoram", temperature: 25, condition: "Rainy", humidity: 85 },
    { state: "Nagaland", temperature: 23, condition: "Cloudy", humidity: 72 },
    { state: "Odisha", temperature: 32, condition: "Sunny", humidity: 68 },
    { state: "Punjab", temperature: 31, condition: "Sunny", humidity: 50 },
    { state: "Rajasthan", temperature: 40, condition: "Hot", humidity: 30 },
    { state: "Sikkim", temperature: 20, condition: "Rainy", humidity: 88 },
    { state: "Tamil Nadu", temperature: 30, condition: "Humid", humidity: 84 },
    { state: "Telangana", temperature: 34, condition: "Sunny", humidity: 64 },
    { state: "Tripura", temperature: 28, condition: "Cloudy", humidity: 80 },
    { state: "Uttar Pradesh", temperature: 35, condition: "Hot", humidity: 55 },
    { state: "Uttarakhand", temperature: 21, condition: "Cloudy", humidity: 70 },
    { state: "West Bengal", temperature: 31, condition: "Rainy", humidity: 82 }
  ];

  const [inputValue, setInputValue] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [weather, setWeather] = useState(null);

  // Modified handleSearch to accept the state name directly
  const handleSearch = (stateName) => {
    setSelectedState(stateName);
  };

  useEffect(() => {
    const data = fakeWeatherData.find(
      (item) => item.state.toLowerCase() === selectedState.toLowerCase()
    );
    setWeather(data || null);
  }, [selectedState]);

  return (
    <div className="bg-gradient-to-l from-[#0f172a] to-[#334155] min-h-screen">
      <Heading />
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSearch={handleSearch} // Pass the modified handleSearch
        selectedState={inputValue} // Pass inputValue as selectedState to Input component for validation
      />
      <Card weather={weather} />
    </div>
  );
}

export default App;