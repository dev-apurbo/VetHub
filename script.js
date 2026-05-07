const clinics = [
    {
        name: "Birds & Pet Animal Clinic",
        address: "Darikhorbona Moor, Uposhohor, Rajshahi",
        phone: "01780-790526",
        services: ["Bird Treatment", "Pet Surgery", "General Checkup"],
        coords: "Darikhorbona+Moor+Rajshahi"
    },
    {
        name: "Pet Care",
        address: "Besides Agrani Bank, Uttora Clinic Moor, Uposhahar Road, Rajshahi",
        phone: "01907-395718",
        services: ["Surgery", "Vaccination", "Emergency Care"],
        coords: "Uttora+Clinic+Moor+Rajshahi"
    },
    {
        name: "Pet 360°",
        address: "Vodra Moor (Opposite to Best Buy), Rajshahi",
        phone: "01771-533043",
        services: ["Dental Care", "Grooming", "Pathology"],
        coords: "Vodra+Moor+Rajshahi"
    },
    {
        name: "Dr. Shazid's Pet Clinic",
        address: "Vodra Moor, Rajshahi",
        phone: "N/A",
        services: ["Consultation", "Pet Nutrition", "Skin Care"],
        coords: "Dr+Shazid+Pet+Clinic+Vodra+Moor+Rajshahi"
    },
    {
        name: "Vet & Pet Care and Cure",
        address: "Rajshahi City",
        phone: "01703-501962",
        services: ["Home Service", "Vaccination", "Consultation"],
        coords: "Rajshahi+City"
    },
    {
        name: "RU Veterinary Teaching Hospital",
        address: "Department of Veterinary Sciences, Rajshahi University",
        phone: "N/A",
        services: ["Advanced Research", "Surgery", "Inpatient Care"],
        coords: "Rajshahi+University+Veterinary+Hospital"
    },
    {
        name: "Model Veterinary Clinic",
        address: "Rajshahi",
        phone: "01751-226243",
        services: ["Pathology", "Research", "Pet Care"],
        coords: "Rajshahi"
    },
    {
        name: "Kitty Cat Rajshahi",
        address: "Rajshahi City",
        phone: "01321-521818",
        services: ["Cat Specialist", "Vaccination", "Deworming"],
        coords: "Kitty+Cat+Rajshahi"
    }
];

const shops = [
    {
        name: "Pet World Rajshahi",
        address: "Ground Floor, Baharampur Bank Colony, Rajpara, Rajshahi",
        phone: "01726-421070",
        items: ["Cat & Dog Food", "Pet Medicines", "Supplements", "Accessories"],
        coords: "Baharampur+Bank+Colony+Rajshahi"
    },
    {
        name: "Pet 360° (Shop)",
        address: "Vodra Moor (Opposite to Best Buy), Rajshahi",
        phone: "01771-533043",
        items: ["Premium Pet Food", "Grooming Kits", "Toys", "Cages"],
        coords: "Vodra+Moor+Rajshahi"
    },
    {
        name: "Rajshahi Pet Care & Shop",
        address: "Uttara Clinic More, Beside Agrani Bank, Rajshahi",
        phone: "01907-395718",
        items: ["Pet Food", "Pet Care Products", "Aquarium Supplies"],
        coords: "Uttara+Clinic+More+Rajshahi"
    },
    {
        name: "Posha Ghor (Pet Shop)",
        address: "Darikhorbona Moor, Uposhohor, Rajshahi",
        phone: "01780-790526",
        items: ["Birds & Bird Food", "Exotic Pet Supplies", "Pet Food", "Medicines"],
        coords: "Darikhorbona+Moor+Rajshahi"
    },
    {
        name: "Kitty Cat Supplies",
        address: "Rajshahi City",
        phone: "01321-521818",
        items: ["Specialized Cat Food", "Litter boxes", "Cat Accessories"],
        coords: "Kitty+Cat+Rajshahi"
    }
];

const clinicGrid = document.getElementById('clinicGrid');
const shopGrid = document.getElementById('shopGrid');
const searchInput = document.getElementById('clinicSearch');
const searchBtn = document.getElementById('searchBtn');

function displayClinics(filteredClinics) {
    clinicGrid.innerHTML = '';
    
    if (filteredClinics.length === 0) {
        clinicGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light); padding: 2rem;">No clinics found matching your search.</p>';
        return;
    }

    filteredClinics.forEach((clinic, index) => {
        const card = document.createElement('div');
        card.className = 'clinic-card';
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <h3>${clinic.name}</h3>
            <div class="clinic-info">
                <div class="info-item">
                    <i class="fas fa-location-dot"></i>
                    <span>${clinic.address}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <span>${clinic.phone}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-kit-medical"></i>
                    <span>${clinic.services.join(', ')}</span>
                </div>
            </div>
            <div class="clinic-actions">
                <a href="tel:${clinic.phone}" class="btn btn-primary">Call Now</a>
                <a href="https://www.google.com/maps/search/?api=1&query=${clinic.coords}" target="_blank" class="btn btn-outline">Directions</a>
            </div>
        `;
        clinicGrid.appendChild(card);
    });
}

function displayShops(filteredShops) {
    shopGrid.innerHTML = '';
    
    if (filteredShops.length === 0) {
        shopGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light); padding: 2rem;">No shops found matching your search.</p>';
        return;
    }

    filteredShops.forEach((shop, index) => {
        const card = document.createElement('div');
        card.className = 'clinic-card'; // Reuse same styling
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <h3>${shop.name}</h3>
            <div class="clinic-info">
                <div class="info-item">
                    <i class="fas fa-location-dot"></i>
                    <span>${shop.address}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <span>${shop.phone}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-bag-shopping"></i>
                    <span>${shop.items.join(', ')}</span>
                </div>
            </div>
            <div class="clinic-actions">
                <a href="tel:${shop.phone}" class="btn btn-primary">Call Now</a>
                <a href="https://www.google.com/maps/search/?api=1&query=${shop.coords}" target="_blank" class="btn btn-outline">Directions</a>
            </div>
        `;
        shopGrid.appendChild(card);
    });
}

// Initial display
displayClinics(clinics);
displayShops(shops);

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredClinics = clinics.filter(clinic => 
        clinic.name.toLowerCase().includes(searchTerm) || 
        clinic.address.toLowerCase().includes(searchTerm) ||
        clinic.services.some(s => s.toLowerCase().includes(searchTerm))
    );
    
    const filteredShops = shops.filter(shop => 
        shop.name.toLowerCase().includes(searchTerm) || 
        shop.address.toLowerCase().includes(searchTerm) ||
        shop.items.some(i => i.toLowerCase().includes(searchTerm))
    );

    displayClinics(filteredClinics);
    displayShops(filteredShops);
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Smooth Scroll for Navigation
document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});
;
