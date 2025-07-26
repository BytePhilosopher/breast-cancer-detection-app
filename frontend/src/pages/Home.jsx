import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [features, setFeatures] = useState(Array(30).fill(""));
  const [result, setResult] = useState(null);

  const handleChange = (index, value) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const floatFeatures = features.map(f => parseFloat(f));
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        features: floatFeatures,
      });
      setResult(response.data.prediction);
    } catch (error) {
      console.error("Prediction error:", error);
      setResult("Error");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🩺 Breast Cancer Prediction</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
        {features.map((value, index) => (
          <input
            key={index}
            type="number"
            step="any"
            placeholder={`Feature ${index + 1}`}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="border p-2 rounded"
            required
          />
        ))}
        <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded">
          Predict
        </button>
      </form>

      {result && (
        <div className="mt-4 text-xl">
          🔍 Prediction Result:{" "}
          <span className={`font-bold ${result === "Malignant" ? "text-red-600" : "text-green-600"}`}>
            {result}
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
