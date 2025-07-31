 
        // Fleet Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.fleet-item');
        const totalSlides = slides.length;

        function changeSlide(direction) {
            currentSlide += direction;
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            }
            
            const track = document.querySelector('.fleet-track');
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        // Auto-advance slides
        setInterval(() => {
            changeSlide(1);
        }, 5000);

        // Chat functionality
        function toggleChat() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.classList.toggle('active');
        }

        function handleChatInput(event) {
            if (event.key === 'Enter') {
                const input = document.getElementById('chatInput');
                const message = input.value.trim();
                if (message) {
                    addChatMessage(message, 'user');
                    input.value = '';
                    
                    // Simulate response
                    setTimeout(() => {
                        addChatMessage('Thank you for your message! A support agent will respond shortly.', 'agent');
                    }, 1000);
                }
            }
        }

        function addChatMessage(message, sender) {
            const chatMessages = document.getElementById('chatMessages');
            const messageDiv = document.createElement('div');
            messageDiv.style.cssText = `
                padding: 0.8rem;
                margin-bottom: 1rem;
                border-radius: 10px;
                ${sender === 'user' ? 
                    'background: #0066cc; color: white; margin-left: 2rem; text-align: right;' : 
                    'background: #f0f0f0; margin-right: 2rem;'
                }
            `;
            messageDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'Support'}:</strong><br>${message}`;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Booking form submission
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const pickup = document.getElementById('pickup').value;
            const delivery = document.getElementById('delivery').value;
            const vehicleType = document.getElementById('vehicleType').value;
            const transportType = document.getElementById('transport').value;
            
            // Simple quote calculation (this would connect to your backend)
            const distance = Math.floor(Math.random() * 1000) + 200; // Simulate distance
            let rate = 0.75; // Base rate
            
            if (transportType === 'enclosed') rate = 1.25;
            if (transportType === 'single') rate = 2.00;
            
            const quote = (distance * rate).toFixed(2);
            
            // Show quote (in a real app, this would be a modal or new page)
            alert(`Thank you for your booking request!
            
Estimated Distance: ${distance} miles
Transport Type: ${transportType}
Vehicle Type: ${vehicleType}
Estimated Quote: ${quote}

A representative will contact you within 24 hours to confirm details and provide final pricing.`);
            
            // Reset form
            this.reset();
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        // window.addEventListener('scroll', function() {
        //     const header = document.querySelector('header');
        //     if (window.scrollY > 100) {
        //         header.style.background = 'rgba(26, 26, 26, 0.98)';
        //         header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        //     } else {
        //         header.style.background = 'rgba(26, 26, 26, 0.95)';
        //         header.style.boxShadow = 'none';
        //     }
        // });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });

        // Form label animations
        document.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value) {
                    this.classList.add('has-value');
                } else {
                    this.classList.remove('has-value');
                }
            });
        });

        // Initialize Google Maps (placeholder - you'll need to integrate with Google Maps API)
        function initMap() {
            // This would initialize your Google Maps integration
            console.log('Google Maps would be initialized here');
        }

        // Schedule management placeholder
        const scheduleData = {
            pending: [],
            confirmed: [],
            inTransit: [],
            delivered: []
        };

        function addToSchedule(booking) {
            scheduleData.pending.push(booking);
            console.log('Booking added to schedule:', booking);
        }

        // Responsive menu toggle (for mobile)
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            
        }

        // Add mobile menu button if needed
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('nav');
            const menuBtn = document.createElement('button');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuBtn.onclick = toggleMobileMenu;
            menuBtn.style.cssText = `
                background: none;
                border: none;
                color: black;
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
            `;
            nav.appendChild(menuBtn);
        }

        // Load testimonials dynamically (placeholder)
        const testimonials = [
            {
                name: "John Doe",
                title: "Business Executive",
                text: "Exceptional service! My car was delivered on time and in perfect condition.",
                avatar: "JD"
            },
            {
                name: "Sarah Miller",
                title: "Car Collector",
                text: "The enclosed trailer service was worth every penny for my classic car.",
                avatar: "SM"
            },
            {
                name: "Mike Johnson",
                title: "Military Personnel",
                text: "Professional team, competitive pricing, and excellent communication.",
                avatar: "MJ"
            }
        ];

        console.log('AutoFlow Car Transport Website Loaded Successfully!');
  