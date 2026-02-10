// Destinations Data - Update this file with your destination information
// Each destination should follow this structure

const destinationsData = [
    // Example structure - replace with your actual data
    /*
    {
        id: 1,
        name: "Destination Name",
        country: "Country",
        image: "image-url-or-path",
        rating: 4.5,
        reviews: 1250,
        priceFrom: 15000,
        currency: "₹",
        description: "Short description of the destination",
        highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
        bestTime: "October - March",
        category: ["beach", "adventure", "romantic"], // categories for filtering
        featured: true
    }
    */
];

// Categories for filtering
const destinationCategories = [
    { id: "all", name: "All", icon: "🌍" },
    { id: "beach", name: "Beaches", icon: "🏖️" },
    { id: "mountain", name: "Mountains", icon: "🏔️" },
    { id: "city", name: "Cities", icon: "🏙️" },
    { id: "heritage", name: "Heritage", icon: "🏛️" },
    { id: "adventure", name: "Adventure", icon: "🎯" },
    { id: "romantic", name: "Romantic", icon: "💕" },
    { id: "wildlife", name: "Wildlife", icon: "🦁" },
    { id: "spiritual", name: "Spiritual", icon: "🙏" }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { destinationsData, destinationCategories };
}
