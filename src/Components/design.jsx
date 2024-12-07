import React from 'react';

function Design() {
  return (
    <div className="design-container">
      <h1>Templates designed to sell.</h1>
      <p>Choose from 100s of designs for every idea and industry.</p>
      <div className="template-gallery">
        <div className="template-item">{/* Image 1 */}</div>
        <div className="template-item">{/* Image 2 */}</div>
        <div className="template-item">{/* Image 3 */}</div>
      </div>
      <button className="browse-button">Browse All Templates</button>
    </div>
  );
}

export default Design;