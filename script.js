
        let currentRole = null;
        let currentStep = 1;

        function showScreen(screenId) {
            // Hide all screens
            const screens = document.querySelectorAll('.screen');
            screens.forEach(screen => screen.classList.remove('active'));
            
            // Show selected screen
            document.getElementById(screenId).classList.add('active');
            
            // Update nav
            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }

        function selectRole(role) {
            currentRole = role;
            const cards = document.querySelectorAll('.role-card');
            cards.forEach(card => card.classList.remove('selected'));
            event.target.classList.add('selected');
            
            // Show onboarding after a brief delay
            setTimeout(() => {
                showScreen(role + '-onboarding');
            }, 1000);
        }

        function showBuyerProfile(buyerId) {
            document.getElementById('buyer-modal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('buyer-modal').classList.remove('active');
        }

        function createMatch(buyerId) {
            // Simulate match creation
            alert('🎉 Match request sent to John Smith! They will be notified and can accept to start the deal process.');
            setTimeout(() => {
                showScreen('deals');
            }, 1000);
        }

        function simulateUpload() {
            const analyzer = document.querySelector('.document-analyzer');
            analyzer.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 32px; margin-bottom: 12px;">⚡</div>
                    <h4 style="margin-bottom: 8px; color: #0ea5e9;">AI Analysis In Progress...</h4>
                    <div style="width: 100%; background: #e0f2fe; height: 8px; border-radius: 4px; overflow: hidden; margin: 16px 0;">
                        <div id="upload-progress" style="width: 0%; background: #0ea5e9; height: 100%; transition: width 0.3s ease;"></div>
                    </div>
                    <p style="color: #666; font-size: 14px;">Processing financial documents...</p>
                </div>
            `;
            
            // Simulate progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    showAnalysisResults();
                }
                document.getElementById('upload-progress').style.width = progress + '%';
            }, 300);
        }

        function showAnalysisResults() {
            const analyzer = document.querySelector('.document-analyzer');
            analyzer.innerHTML = `
                <div style="text-align: left;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="font-size: 24px;">🎯</div>
                        <div>
                            <h4 style="color: #059669; margin-bottom: 4px;">Analysis Complete!</h4>
                            <p style="color: #666; font-size: 14px;">AI has processed your financials</p>
                        </div>
                    </div>
                    
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <h5 style="color: #059669; margin-bottom: 8px;">Key Strengths Identified:</h5>
                        <ul style="color: #666; font-size: 14px; margin-left: 20px; line-height: 1.6;">
                            <li>Strong 23% EBITDA margins (above industry avg)</li>
                            <li>95% customer retention rate</li>
                            <li>Consistent 28% YoY growth</li>
                            <li>Diversified customer base (no >15% concentration)</li>
                        </ul>
                    </div>
                    
                    <div style="background: #fffbeb; border: 1px solid #fed7aa; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                        <h5 style="color: #d97706; margin-bottom: 8px;">Suggested Improvements:</h5>
                        <ul style="color: #666; font-size: 14px; margin-left: 20px; line-height: 1.6;">
                            <li>Consider highlighting R&D investments for growth story</li>
                            <li>Prepare 3-year financial projections</li>
                        </ul>
                    </div>
                    
                    <button class="btn btn-primary" style="width: 100%;">Share AI-Generated Summary with John</button>
                </div>
            `;
        }

        // Add some interactive behaviors
        document.addEventListener('DOMContentLoaded', function() {
            // Simulate real-time updates
            setInterval(() => {
                if (document.getElementById('deals').classList.contains('active')) {
                    // Could add real-time activity updates here
                }
            }, 30000);
            
            // Add hover effects to cards
            const cards = document.querySelectorAll('.buyer-card, .step-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    if (!this.classList.contains('active') && !this.classList.contains('completed')) {
                        this.style.transform = 'translateY(-2px)';
                        this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    }
                });
                
                card.addEventListener('mouseleave', function() {
                    if (!this.classList.contains('active') && !this.classList.contains('completed')) {
                        this.style.transform = '';
                        this.style.boxShadow = '';
                    }
                });
            });
        });

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('buyer-modal');
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        }
