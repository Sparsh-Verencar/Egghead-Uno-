function createPanel({ imgSrc, serviceName, businessName, price }) {
    // Get the recommendations container
    const recommendationsContainer = document.getElementById("recommendations");
  
    // Create a new panel
    const panel = document.createElement("div");
    panel.classList.add("panel");
  
    // Create the image element
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = `${serviceName} image`;
  
    // Create the service name element
    const serviceNameDiv = document.createElement("div");
    serviceNameDiv.classList.add("serviceName");
    serviceNameDiv.textContent = serviceName;
  
    // Create the business name element
    const businessNameDiv = document.createElement("div");
    businessNameDiv.classList.add("businessName");
    businessNameDiv.textContent = businessName;
  
    // Create the price element
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    priceDiv.textContent = `$${price}`;
  
    // Append all elements to the panel
    panel.appendChild(img);
    panel.appendChild(serviceNameDiv);
    panel.appendChild(businessNameDiv);
    panel.appendChild(priceDiv);
  
    // Append the panel to the recommendations container
    recommendationsContainer.appendChild(panel);
  }
  

  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Hair Cutting",
    businessName: "John's Salon",
    price: "20.00",
  });
  
  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Spa Treatment",
    businessName: "Luxury Spa",
    price: "50.00",
  });
  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Hair Cutting",
    businessName: "John's Salon",
    price: "20.00",
  });
  
  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Spa Treatment",
    businessName: "Luxury Spa",
    price: "50.00",
  });
  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Hair Cutting",
    businessName: "John's Salon",
    price: "20.00",
  });
  
  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Spa Treatment",
    businessName: "Luxury Spa",
    price: "50.00",
  });
  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Hair Cutting",
    businessName: "John's Salon",
    price: "20.00",
  });
  
  createPanel({
    imgSrc: "https://via.placeholder.com/150", // Replace with actual image URL
    serviceName: "Spa Treatment",
    businessName: "Luxury Spa",
    price: "50.00",
  });
        