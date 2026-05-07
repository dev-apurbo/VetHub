const clinics = [
    {
        name: "Birds & Pet Animal Clinic",
        address: "Darikhorbona Moor, Uposhohor, Rajshahi",
        phone: "01780-790526",
        services: ["Bird Treatment", "Pet Surgery", "General Checkup"],
        coords: "Darikhorbona+Moor+Rajshahi",
        rating: 4.3,
        reviews: 108
    },
    {
        name: "Pet Care",
        address: "Besides Agrani Bank, Uttora Clinic Moor, Uposhahar Road, Rajshahi",
        phone: "01907-395718",
        services: ["Surgery", "Vaccination", "Emergency Care"],
        coords: "Uttora+Clinic+Moor+Rajshahi",
        rating: 4.7,
        reviews: 47
    },
    {
        name: "Pet 360°",
        address: "Vodra Moor (Opposite to Best Buy), Rajshahi",
        phone: "01771-533043",
        services: ["Dental Care", "Grooming", "Pathology"],
        coords: "Pet 360°, Vodra moar(opposit to Best Buy, Rajshahi 6207",
        rating: 5.0,
        reviews: 57
    },
    {
        name: "Dr. Shazid's Pet Clinic",
        address: "Vodra Moor, Rajshahi",
        phone: "01326520709",
        services: ["Consultation", "Pet Nutrition", "Skin Care"],
        coords: "Dr+Shazid+Pet+Clinic+Vodra+Moor+Rajshahi",
        rating: 4.5,
        reviews: 26
    },
    {
        name: "Vet & Pet Care and Cure",
        address: "Rajshahi City",
        phone: "01703-501962",
        services: ["Home Service", "Vaccination", "Consultation"],
        coords: "Rajshahi+City",
        rating: 4.8,
        reviews: 29
    },
    {
        name: "RU Veterinary Teaching Hospital",
        address: "Department of Veterinary Sciences, Rajshahi University",
        phone: "01326520709",
        services: ["Advanced Research", "Surgery", "Inpatient Care"],
        coords: "Rajshahi+University+Veterinary+Hospital",
        rating: 5.0,
        reviews: 1
    },
    {
        name: "Model Veterinary Clinic",
        address: "Rajshahi",
        phone: "01751-226243",
        services: ["Pathology", "Research", "Pet Care"],
        coords: "Rajshahi",
        rating: 5.0,
        reviews: 6
    },
    {
        name: "Kitty Cat Rajshahi",
        address: "Rajshahi City",
        phone: "01321-521818",
        services: ["Cat Specialist", "Vaccination", "Deworming"],
        coords: "Kitty+Cat+Rajshahi",
        rating: 4.7,
        reviews: 32
    }
];

const shops = [
    {
        name: "Pet World Rajshahi",
        address: "Ground Floor, Baharampur Bank Colony, Rajpara, Rajshahi",
        phone: "01726-421070",
        items: ["Cat & Dog Food", "Pet Medicines", "Supplements", "Accessories"],
        coords: "Baharampur+Bank+Colony+Rajshahi",
        rating: 4.3,
        reviews: 11
    },
    {
        name: "Pet 360° (Shop)",
        address: "Vodra Moor (Opposite to Best Buy), Rajshahi",
        phone: "01771-533043",
        items: ["Premium Pet Food", "Grooming Kits", "Toys", "Cages"],
        coords: "Vodra+Moor+Rajshahi",
        rating: 5.0,
        reviews: 57
    },
    {
        name: "Rajshahi Pet Care & Shop",
        address: "Uttara Clinic More, Beside Agrani Bank, Rajshahi",
        phone: "01907-395718",
        items: ["Pet Food", "Pet Care Products", "Aquarium Supplies"],
        coords: "Uttara+Clinic+More+Rajshahi",
        rating: 4.7,
        reviews: 47
    },
    {
        name: "Posha Ghor (Pet Shop)",
        address: "Darikhorbona Moor, Uposhohor, Rajshahi",
        phone: "01780-790526",
        items: ["Birds & Bird Food", "Exotic Pet Supplies", "Pet Food", "Medicines"],
        coords: "Darikhorbona+Moor+Rajshahi",
        rating: "N/A",
        reviews: 0
    },
    {
        name: "Kitty Cat Supplies",
        address: "Rajshahi City",
        phone: "01321-521818",
        items: ["Specialized Cat Food", "Litter boxes", "Cat Accessories"],
        coords: "Kitty+Cat+Rajshahi",
        rating: 4.7,
        reviews: 32
    }
];

const clinicGrid = document.getElementById('clinicGrid');
const shopGrid = document.getElementById('shopGrid');
const searchInput = document.getElementById('clinicSearch');
const searchBtn = document.getElementById('searchBtn');

/**
 * Creates a card element for either clinic or shop
 */
function createCard(data, type) {
    const card = document.createElement('div');
    card.className = 'clinic-card animate-up';
    
    const icon = type === 'clinic' ? 'fa-kit-medical' : 'fa-bag-shopping';
    const tag = type === 'clinic' ? 'Services' : 'Products';
    const items = type === 'clinic' ? data.services : data.items;

    const ratingHtml = data.rating !== "N/A" 
        ? `<div class="rating">
            <i class="fas fa-star"></i>
            <span>${data.rating}</span>
            <span class="reviews">(${data.reviews} reviews)</span>
           </div>`
        : '';

    card.innerHTML = `
        <div class="card-header">
            <h3>${data.name}</h3>
            ${ratingHtml}
        </div>
        <div class="clinic-info">
            <div class="info-item">
                <i class="fas fa-location-dot" aria-hidden="true"></i>
                <span>${data.address}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-phone" aria-hidden="true"></i>
                <span>${data.phone}</span>
            </div>
            <div class="info-item">
                <i class="fas ${icon}" aria-hidden="true"></i>
                <span><strong>${tag}:</strong> ${items.join(', ')}</span>
            </div>
        </div>
        <div class="clinic-actions">
            <a href="tel:${data.phone}" class="btn btn-primary" aria-label="Call ${data.name}">Call Now</a>
            <a href="https://www.google.com/maps/search/?api=1&query=${data.coords}" target="_blank" rel="noopener" class="btn btn-outline" aria-label="Get directions to ${data.name}">Directions</a>
        </div>
    `;
    return card;
}

function displayData(grid, list, type) {
    grid.innerHTML = '';
    if (list.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-light); padding: 3rem;">No ${type === 'clinic' ? 'clinics' : 'shops'} found matching your search.</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    list.forEach((item, index) => {
        const card = createCard(item, type);
        card.style.animationDelay = `${index * 0.05}s`;
        fragment.appendChild(card);
    });
    grid.appendChild(fragment);
}

// Initial display
function init() {
    displayData(clinicGrid, clinics, 'clinic');
    displayData(shopGrid, shops, 'shop');
}

// Search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filterFn = (item) => {
        const searchableText = [
            item.name,
            item.address,
            ...(item.services || item.items)
        ].join(' ').toLowerCase();
        return searchableText.includes(searchTerm);
    };

    const filteredClinics = clinics.filter(filterFn);
    const filteredShops = shops.filter(filterFn);

    displayData(clinicGrid, filteredClinics, 'clinic');
    displayData(shopGrid, filteredShops, 'shop');
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('input', handleSearch); // Real-time search

// Smooth Scroll for Navigation
document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const btnText = submitBtn.querySelector('span');
        const btnIcon = submitBtn.querySelector('i');
        
        // Loading state
        submitBtn.classList.add('loading');
        btnText.textContent = 'Sending...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        
        const formData = new FormData(this);
        
        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success
                successModal.classList.add('active');
                this.reset();
            } else {
                const data = await response.json();
                alert(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Could not connect to the server. Please check your internet.');
        } finally {
            // Reset button
            submitBtn.classList.remove('loading');
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane';
        }
    });
}

// Modal closing logic
if (closeModal) {
    closeModal.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
}

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});

// Update Active State on Scroll
function updateActiveNavLink() {
    const sections = ['home', 'clinics', 'shops', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.mobile-nav-item').forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
                
                // Also update desktop nav if needed
                document.querySelectorAll('nav ul li a').forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Run init
document.addEventListener('DOMContentLoaded', () => {
    init();
    updateActiveNavLink();
});
