// import React from 'react'

const Stats = () => {
  return (
       <section className="stats-grid">
                <div className="stats-card">
                    <div class="card-icon" style="background-color: #e0f7fa;"><i class="fa-solid fa-hotel" style="color: #0097a7;"></i></div>
                    <h3>Total Properties</h3>
                    <p>38</p>
                </div>
                <div className="stats-card">
                    <div className="card-icon" style="background-color: #e8f5e9;"><i class="fa-solid fa-user-check" style="color: #388e3c;"></i></div>
                    <h3>Active Tenants</h3>
                    <p>124</p>
                </div>
                <div className="stats-card">
                    <div class="card-icon" style="background-color: #e3f2fd;"><i class="fa-solid fa-chart-line" style="color: #1976d2;"></i></div>
                    <h3>Monthly Revenue</h3>
                    <p>$120,000</p>
                </div>
                <div className="stats-card">
                    <div class="card-icon" style="background-color: #f3e5f5;"><i class="fa-solid fa-percent" style="color: #7b1fa2;"></i></div>
                    <h3>Occupancy Rate</h3>
                    <p>87.5%</p>
                </div>
                <div className="stats-card">
                    <div class="card-icon" style="background-color: #fff3e0;"><i class="fa-solid fa-file-invoice-dollar" style="color: #f57c00;"></i></div>
                    <h3>Outstanding</h3>
                    <p>$38,000</p>
                </div>
                 <div className="stats-card">
                    <div class="card-icon" style="background-color: #ffebee;"><i class="fa-solid fa-wrench" style="color: #d32f2f;"></i></div>
                    <h3>Maintenance</h3>
                    <p>2 Pending</p>
                </div>
            </section>
  )
}

export default Stats
