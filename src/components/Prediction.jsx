import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Prediction.css';

function Prediction({ onNavigate }) {
  const [simulatorData, setSimulatorData] = useState({
    rainfall: 800,
    temperature: 25,
    soilType: 'loamy',
    cropType: 'wheat',
    region: 'north',
    irrigation: 'moderate'
  });

  const [predictions, setPredictions] = useState({
    yield: 0,
    confidence: 0,
    riskLevel: 'low'
  });

  const [showHeatmap, setShowHeatmap] = useState(false);

  const soilTypes = [
    { value: 'sandy', label: 'Sandy Soil' },
    { value: 'loamy', label: 'Loamy Soil' },
    { value: 'clay', label: 'Clay Soil' },
    { value: 'silt', label: 'Silt Soil' }
  ];

  const cropTypes = [
    { value: 'wheat', label: 'Wheat' },
    { value: 'rice', label: 'Rice' },
    { value: 'corn', label: 'Corn' },
    { value: 'soybean', label: 'Soybean' }
  ];

  const regions = [
    { value: 'north', label: 'North Region' },
    { value: 'south', label: 'South Region' },
    { value: 'east', label: 'East Region' },
    { value: 'west', label: 'West Region' }
  ];

  const irrigationLevels = [
    { value: 'low', label: 'Low Irrigation' },
    { value: 'moderate', label: 'Moderate Irrigation' },
    { value: 'high', label: 'High Irrigation' }
  ];

  // Simulate yield prediction calculation
  const calculateYield = useCallback(() => {
    const { rainfall, temperature, soilType, cropType, region, irrigation } = simulatorData;
    
    // Base yield calculation (simplified algorithm)
    let baseYield = 100;
    
    // Rainfall impact (optimal around 800-1000mm)
    const rainfallFactor = rainfall < 400 ? 0.3 : rainfall > 1200 ? 0.7 : 1.0;
    
    // Temperature impact (optimal around 20-30°C)
    const tempFactor = temperature < 10 ? 0.2 : temperature > 40 ? 0.3 : 1.0;
    
    // Soil type impact
    const soilFactors = { sandy: 0.7, loamy: 1.0, clay: 0.8, silt: 0.9 };
    const soilFactor = soilFactors[soilType] || 1.0;
    
    // Crop type base yields
    const cropFactors = { wheat: 1.0, rice: 1.2, corn: 1.1, soybean: 0.9 };
    const cropFactor = cropFactors[cropType] || 1.0;
    
    // Irrigation impact
    const irrigationFactors = { low: 0.6, moderate: 1.0, high: 1.1 };
    const irrigationFactor = irrigationFactors[irrigation] || 1.0;
    
    // Region modifier
    const regionFactors = { north: 1.0, south: 1.1, east: 0.9, west: 0.95 };
    const regionFactor = regionFactors[region] || 1.0;
    
    const calculatedYield = Math.round(
      baseYield * rainfallFactor * tempFactor * soilFactor * cropFactor * irrigationFactor * regionFactor
    );
    
    // Calculate confidence based on input quality
    const confidence = Math.min(95, Math.max(60, 
      100 - Math.abs(rainfall - 800) / 20 - Math.abs(temperature - 25) / 2
    ));
    
    // Determine risk level
    let riskLevel = 'low';
    if (rainfall < 300 || rainfall > 1500 || temperature < 5 || temperature > 45) {
      riskLevel = 'high';
    } else if (rainfall < 500 || rainfall > 1200 || temperature < 10 || temperature > 40) {
      riskLevel = 'medium';
    }
    
    setPredictions({
      yield: calculatedYield,
      confidence: Math.round(confidence),
      riskLevel
    });
  }, [simulatorData]);

  useEffect(() => {
    calculateYield();
  }, [simulatorData, calculateYield]);

  const handleInputChange = (field, value) => {
    setSimulatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'low': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getRiskLabel = (risk) => {
    switch (risk) {
      case 'low': return 'Low Risk';
      case 'medium': return 'Medium Risk';
      case 'high': return 'High Risk';
      default: return 'Unknown';
    }
  };

  return (
    <div className="prediction-page">
      {/* Header */}
      <header className="prediction-header">
        <nav className="navbar">
          <div className="brand">
            <span className="brand-name">Synopsis</span>
          </div>
          <div className="nav-center">
            <ul className="nav-group">
              <li className="nav-item"><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}><span className="home-dot">⌂</span> Home</a></li>
              <li className="nav-item"><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a></li>
              <li className="nav-item active"><a href="#prediction">Prediction</a></li>
              <li className="nav-item"><a href="#products">Products</a></li>
              <li className="nav-item"><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="nav-actions">
            <a className="login" href="#signin">Sign In</a>
            <a className="signup outline" href="#signup">Sign up Free</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="prediction-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <h1 className="hero-title">AI-Powered Yield Prediction</h1>
            <p className="hero-subtitle">
              Optimize your agricultural decisions with advanced machine learning models
            </p>
          </div>
        </section>

        {/* Simulator Section */}
        <section className="simulator-section">
          <div className="simulator-container">
            <div className="simulator-grid">
              {/* Input Panel */}
              <div className="input-panel">
                <h2 className="panel-title">Yield Simulator</h2>
                <p className="panel-subtitle">Adjust parameters to see predicted outcomes</p>
                
                <div className="input-group">
                  <label className="input-label">Rainfall (mm/year)</label>
                  <div className="slider-container">
                    <input
                      type="range"
                      min="200"
                      max="2000"
                      value={simulatorData.rainfall}
                      onChange={(e) => handleInputChange('rainfall', parseInt(e.target.value))}
                      className="slider"
                    />
                    <span className="slider-value">{simulatorData.rainfall}mm</span>
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Temperature (°C)</label>
                  <div className="slider-container">
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={simulatorData.temperature}
                      onChange={(e) => handleInputChange('temperature', parseInt(e.target.value))}
                      className="slider"
                    />
                    <span className="slider-value">{simulatorData.temperature}°C</span>
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Soil Type</label>
                  <select
                    value={simulatorData.soilType}
                    onChange={(e) => handleInputChange('soilType', e.target.value)}
                    className="select-input"
                  >
                    {soilTypes.map(soil => (
                      <option key={soil.value} value={soil.value}>{soil.label}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label">Crop Type</label>
                  <select
                    value={simulatorData.cropType}
                    onChange={(e) => handleInputChange('cropType', e.target.value)}
                    className="select-input"
                  >
                    {cropTypes.map(crop => (
                      <option key={crop.value} value={crop.value}>{crop.label}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label">Region</label>
                  <select
                    value={simulatorData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="select-input"
                  >
                    {regions.map(region => (
                      <option key={region.value} value={region.value}>{region.label}</option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label">Irrigation Level</label>
                  <select
                    value={simulatorData.irrigation}
                    onChange={(e) => handleInputChange('irrigation', e.target.value)}
                    className="select-input"
                  >
                    {irrigationLevels.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Panel */}
              <div className="results-panel">
                <h2 className="panel-title">Prediction Results</h2>
                
                <div className="result-cards">
                  <div className="result-card primary">
                    <div className="result-icon">🌾</div>
                    <div className="result-content">
                      <h3 className="result-title">Predicted Yield</h3>
                      <p className="result-value">{predictions.yield} kg/ha</p>
                    </div>
                  </div>

                  <div className="result-card">
                    <div className="result-icon">📊</div>
                    <div className="result-content">
                      <h3 className="result-title">Confidence</h3>
                      <p className="result-value">{predictions.confidence}%</p>
                    </div>
                  </div>

                  <div className="result-card">
                    <div className="result-icon">⚠️</div>
                    <div className="result-content">
                      <h3 className="result-title">Risk Level</h3>
                      <p 
                        className="result-value"
                        style={{ color: getRiskColor(predictions.riskLevel) }}
                      >
                        {getRiskLabel(predictions.riskLevel)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="visualization-toggle">
                  <button 
                    className={`toggle-btn ${showHeatmap ? 'active' : ''}`}
                    onClick={() => setShowHeatmap(!showHeatmap)}
                  >
                    {showHeatmap ? 'Hide' : 'Show'} Regional Heatmap
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visualization Section */}
        {showHeatmap && (
          <section className="visualization-section">
            <div className="visualization-container">
              <h2 className="viz-title">Regional Yield Heatmap</h2>
              <div className="heatmap-container">
                <div className="heatmap-grid">
                  {regions.map((region, index) => {
                    const regionYield = Math.round(predictions.yield * (0.8 + Math.random() * 0.4));
                    const intensity = Math.min(1, regionYield / 150);
                    return (
                      <div 
                        key={region.value}
                        className="heatmap-cell"
                        style={{
                          backgroundColor: `rgba(16, 185, 129, ${intensity})`,
                          borderColor: intensity > 0.5 ? '#10b981' : '#e5e7eb'
                        }}
                      >
                        <div className="cell-label">{region.label}</div>
                        <div className="cell-value">{regionYield} kg/ha</div>
                      </div>
                    );
                  })}
                </div>
                <div className="heatmap-legend">
                  <div className="legend-item">
                    <div className="legend-color low"></div>
                    <span>Low Yield</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color medium"></div>
                    <span>Medium Yield</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color high"></div>
                    <span>High Yield</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Insights Section */}
        <section className="insights-section">
          <div className="insights-container">
            <h2 className="insights-title">AI Insights & Recommendations</h2>
            <div className="insights-grid">
              <div className="insight-card">
                <div className="insight-icon">💡</div>
                <h3 className="insight-title">Optimization Tips</h3>
                <p className="insight-text">
                  Based on your current parameters, consider adjusting irrigation levels 
                  to optimize water usage and improve yield potential.
                </p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">📈</div>
                <h3 className="insight-title">Market Trends</h3>
                <p className="insight-text">
                  Current market conditions favor your selected crop type with 
                  projected price increases of 12% this season.
                </p>
              </div>
              <div className="insight-card">
                <div className="insight-icon">🌡️</div>
                <h3 className="insight-title">Weather Alert</h3>
                <p className="insight-text">
                  Monitor temperature fluctuations closely. Current predictions 
                  suggest optimal growing conditions for the next 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-icon">S</div>
              <span className="footer-name">Synopsis</span>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#prediction">Prediction</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Synopsis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Prediction;