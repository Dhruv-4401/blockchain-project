// Blockchain Supply Chain Transparency System
// Data Storage (In-memory for demo purposes)
const supplyChainData = {
    products: [
        {
            id: "PRD001",
            name: "Premium Coffee Beans",
            manufacturer: "Mountain Coffee Co.",
            batch: "BCH2024001",
            manufacturing_date: "2024-10-01",
            status: "Delivered",
            location: "Local Grocery Store",
            blockchain_hash: "0x1a2b3c4d5e6f7890abcdef1234567890",
            category: "Food & Beverage",
            description: "Premium organic coffee beans from high altitude farms"
        },
        {
            id: "PRD002",
            name: "Organic Tea Leaves",
            manufacturer: "Valley Tea Farms",
            batch: "TEA2024002",
            manufacturing_date: "2024-09-28",
            status: "In Transit",
            location: "Distribution Center B",
            blockchain_hash: "0x9876543210fedcba0987654321abcdef",
            category: "Food & Beverage",
            description: "Organic tea leaves sourced from sustainable farms"
        },
        {
            id: "PRD003",
            name: "Artisan Chocolate",
            manufacturer: "Swiss Chocolate Co.",
            batch: "CHC2024003",
            manufacturing_date: "2024-10-05",
            status: "Quality Check",
            location: "Manufacturing Plant",
            blockchain_hash: "0xabcdef1234567890fedcba0987654321",
            category: "Food & Beverage",
            description: "Hand-crafted Swiss chocolate with premium cocoa"
        }
    ],
    
    supply_chain_stages: [
        { name: "Manufacturing", description: "Product creation and initial quality control" },
        { name: "Quality Control", description: "Comprehensive testing and certification" },
        { name: "Packaging", description: "Final packaging and labeling" },
        { name: "Shipping", description: "Transportation to distribution centers" },
        { name: "Distribution", description: "Storage and routing to retailers" },
        { name: "Retail", description: "Available for consumer purchase" },
        { name: "Delivered", description: "Successfully delivered to end consumer" }
    ],
    
    transactions: [
        {
            id: "TXN001",
            product_id: "PRD001",
            stage: "Manufacturing",
            timestamp: "2024-10-01T08:00:00Z",
            location: "Factory A",
            party: "Mountain Coffee Co.",
            hash: "0x1111aaaa2222bbbb3333cccc4444dddd"
        },
        {
            id: "TXN002",
            product_id: "PRD001",
            stage: "Quality Control",
            timestamp: "2024-10-01T12:00:00Z",
            location: "QC Lab 1",
            party: "CertifyPro Ltd.",
            hash: "0x2222bbbb3333cccc4444dddd5555eeee"
        },
        {
            id: "TXN003",
            product_id: "PRD001",
            stage: "Shipping",
            timestamp: "2024-10-02T09:00:00Z",
            location: "Warehouse District",
            party: "LogisticsPro",
            hash: "0x3333cccc4444dddd5555eeee6666ffff"
        },
        {
            id: "TXN004",
            product_id: "PRD001",
            stage: "Distribution",
            timestamp: "2024-10-03T14:00:00Z",
            location: "Regional Hub",
            party: "FastDelivery Inc.",
            hash: "0x4444dddd5555eeee6666ffff7777aaaa"
        },
        {
            id: "TXN005",
            product_id: "PRD001",
            stage: "Retail",
            timestamp: "2024-10-04T10:00:00Z",
            location: "SuperMart Store",
            party: "SuperMart",
            hash: "0x5555eeee6666ffff7777aaaa8888bbbb"
        },
        {
            id: "TXN006",
            product_id: "PRD001",
            stage: "Delivered",
            timestamp: "2024-10-05T16:00:00Z",
            location: "Customer Address",
            party: "John Doe",
            hash: "0x6666ffff7777aaaa8888bbbb9999cccc"
        }
    ],
    
    quality_records: [
        {
            id: "QR001",
            product_id: "PRD001",
            test_type: "Moisture Content",
            result: "12.5%",
            status: "Passed",
            inspector: "Dr. Sarah Johnson",
            date: "2024-10-01",
            certification: "ISO 9001"
        },
        {
            id: "QR002",
            product_id: "PRD002",
            test_type: "Pesticide Residue",
            result: "Below Detection Limit",
            status: "Passed",
            inspector: "Dr. Michael Chen",
            date: "2024-09-28",
            certification: "Organic Certified"
        },
        {
            id: "QR003",
            product_id: "PRD003",
            test_type: "Heavy Metals",
            result: "Within Safe Limits",
            status: "Passed",
            inspector: "Dr. Emily Rodriguez",
            date: "2024-10-05",
            certification: "EU Standards"
        }
    ],
    
    fraud_alerts: [
        {
            id: "FA001",
            type: "Suspicious Location Jump",
            product_id: "PRD002",
            description: "Product location changed unusually fast",
            severity: "Medium",
            timestamp: "2024-10-10T14:30:00Z",
            status: "Under Investigation"
        },
        {
            id: "FA002",
            type: "Duplicate Product ID",
            product_id: "PRD003",
            description: "Multiple products found with same ID",
            severity: "High",
            timestamp: "2024-10-09T11:20:00Z",
            status: "Resolved"
        }
    ]
};

// Utility Functions
function generateRandomHash() {
    return '0x' + Math.random().toString(16).substring(2, 34).padEnd(32, '0');
}

function generateProductId() {
    const prefix = 'PRD';
    const number = (supplyChainData.products.length + 1).toString().padStart(3, '0');
    return prefix + number;
}

function generateTransactionId() {
    const prefix = 'TXN';
    const number = (supplyChainData.transactions.length + 1).toString().padStart(3, '0');
    return prefix + number;
}

function generateQualityRecordId() {
    const prefix = 'QR';
    const number = (supplyChainData.quality_records.length + 1).toString().padStart(3, '0');
    return prefix + number;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatDateTime(dateString) {
    return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notificationMessage');
    
    messageElement.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.remove('hidden');
    
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 5000);
}

function showLoading() {
    document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}

// Navigation Functionality
function initializeNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetView = btn.getAttribute('data-view');
            
            // Update active nav button
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show target view
            views.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetView) {
                    view.classList.add('active');
                }
            });
            
            // Load data for specific views
            switch(targetView) {
                case 'dashboard':
                    loadDashboard();
                    break;
                case 'quality':
                    loadQualityRecords();
                    break;
                case 'fraud':
                    loadFraudDetection();
                    break;
                case 'analytics':
                    loadAnalytics();
                    break;
            }
        });
    });
}

// Dashboard Functions
function loadDashboard() {
    updateMetrics();
    loadRecentActivities();
    loadActiveFraudAlerts();
}

function updateMetrics() {
    const totalProducts = supplyChainData.products.length;
    const inTransit = supplyChainData.products.filter(p => p.status === 'In Transit' || p.status === 'Shipping').length;
    const qualityPassed = supplyChainData.quality_records.filter(q => q.status === 'Passed').length;
    const fraudAlerts = supplyChainData.fraud_alerts.filter(f => f.status !== 'Resolved').length;
    
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('inTransit').textContent = inTransit;
    document.getElementById('qualityPassed').textContent = qualityPassed;
    document.getElementById('fraudAlerts').textContent = fraudAlerts;
}

function loadRecentActivities() {
    const container = document.getElementById('recentActivities');
    const recentTransactions = supplyChainData.transactions
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 5);
    
    container.innerHTML = recentTransactions.map(transaction => {
        const product = supplyChainData.products.find(p => p.id === transaction.product_id);
        return `
            <div class="activity-item">
                <div class="activity-info">
                    <div class="activity-icon">
                        <i class="fas fa-check"></i>
                    </div>
                    <div class="activity-details">
                        <h4>${transaction.stage} - ${product ? product.name : transaction.product_id}</h4>
                        <p>${transaction.location} • ${transaction.party}</p>
                    </div>
                </div>
                <div class="activity-time">
                    ${formatDateTime(transaction.timestamp)}
                </div>
            </div>
        `;
    }).join('');
}

function loadActiveFraudAlerts() {
    const container = document.getElementById('activeFraudAlerts');
    const activeAlerts = supplyChainData.fraud_alerts.filter(alert => alert.status !== 'Resolved');
    
    if (activeAlerts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: var(--space-20);">No active fraud alerts</p>';
        return;
    }
    
    container.innerHTML = activeAlerts.map(alert => {
        const severityClass = alert.severity.toLowerCase();
        return `
            <div class="fraud-alert-item ${severityClass}">
                <div class="fraud-alert-content">
                    <h4>${alert.type}</h4>
                    <p><strong>Product:</strong> ${alert.product_id} • <strong>Severity:</strong> ${alert.severity}</p>
                    <p>${alert.description}</p>
                </div>
                <div class="status status--warning">${alert.status}</div>
            </div>
        `;
    }).join('');
}

// Product Registration
function initializeProductRegistration() {
    const form = document.getElementById('productRegistrationForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        showLoading();
        
        // Simulate blockchain transaction delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const formData = new FormData(form);
        const productData = {
            id: generateProductId(),
            name: document.getElementById('productName').value,
            manufacturer: document.getElementById('manufacturer').value,
            batch: document.getElementById('batchNumber').value,
            manufacturing_date: document.getElementById('manufacturingDate').value,
            category: document.getElementById('productCategory').value,
            description: document.getElementById('productDescription').value,
            status: 'Manufacturing',
            location: 'Manufacturing Plant',
            blockchain_hash: generateRandomHash()
        };
        
        // Add to products
        supplyChainData.products.push(productData);
        
        // Create initial transaction
        const transactionData = {
            id: generateTransactionId(),
            product_id: productData.id,
            stage: 'Manufacturing',
            timestamp: new Date().toISOString(),
            location: 'Manufacturing Plant',
            party: productData.manufacturer,
            hash: generateRandomHash()
        };
        
        supplyChainData.transactions.push(transactionData);
        
        hideLoading();
        
        // Show success message
        document.getElementById('generatedId').textContent = productData.id;
        document.getElementById('generatedHash').textContent = productData.blockchain_hash;
        document.getElementById('transactionId').textContent = transactionData.id;
        
        form.style.display = 'none';
        document.getElementById('registrationSuccess').classList.remove('hidden');
        
        showNotification('Product successfully registered on blockchain!', 'success');
        
        // Reset form after delay
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            document.getElementById('registrationSuccess').classList.add('hidden');
        }, 5000);
    });
}

// Product Tracking
function initializeProductTracking() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchProduct(query);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchProduct(query);
            }
        }
    });
}

function searchProduct(query) {
    const product = supplyChainData.products.find(p => 
        p.id.toLowerCase().includes(query.toLowerCase()) || 
        p.batch.toLowerCase().includes(query.toLowerCase())
    );
    
    if (product) {
        displayProductDetails(product);
        displaySupplyChainTimeline(product.id);
    } else {
        showNotification('Product not found. Please check the ID or batch number.', 'error');
        document.getElementById('productDetails').classList.add('hidden');
        document.getElementById('supplyChainTimeline').classList.add('hidden');
    }
}

function displayProductDetails(product) {
    const container = document.getElementById('productDetails');
    
    container.innerHTML = `
        <div class="product-header">
            <div class="product-info">
                <h2>${product.name}</h2>
                <div class="status status--info">${product.status}</div>
            </div>
            <div class="product-qr">
                <i class="fas fa-qrcode" style="font-size: 48px; color: var(--color-text-secondary);"></i>
            </div>
        </div>
        <div class="product-meta">
            <div class="meta-item">
                <div class="meta-label">Product ID</div>
                <div class="meta-value">${product.id}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Manufacturer</div>
                <div class="meta-value">${product.manufacturer}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Batch Number</div>
                <div class="meta-value">${product.batch}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Manufacturing Date</div>
                <div class="meta-value">${formatDate(product.manufacturing_date)}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Current Location</div>
                <div class="meta-value">${product.location}</div>
            </div>
            <div class="meta-item">
                <div class="meta-label">Blockchain Hash</div>
                <div class="meta-value">${product.blockchain_hash}</div>
            </div>
        </div>
        <div style="margin-top: var(--space-16);">
            <p><strong>Description:</strong> ${product.description || 'No description available'}</p>
        </div>
    `;
    
    container.classList.remove('hidden');
}

function displaySupplyChainTimeline(productId) {
    const container = document.getElementById('supplyChainTimeline');
    const timeline = document.getElementById('timeline');
    
    const productTransactions = supplyChainData.transactions
        .filter(t => t.product_id === productId)
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    timeline.innerHTML = productTransactions.map((transaction, index) => {
        const isCompleted = true; // All transactions in timeline are completed
        return `
            <div class="timeline-item ${isCompleted ? 'completed' : ''}">
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h4 class="timeline-title">${transaction.stage}</h4>
                        <div class="timeline-time">${formatDateTime(transaction.timestamp)}</div>
                    </div>
                    <div class="timeline-details">
                        <div><strong>Location:</strong> ${transaction.location}</div>
                        <div><strong>Party:</strong> ${transaction.party}</div>
                        <div><strong>Hash:</strong> ${transaction.hash.substring(0, 16)}...</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    container.classList.remove('hidden');
}

// Quality Management
function initializeQualityManagement() {
    const form = document.getElementById('qualityCheckForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        showLoading();
        
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const qualityData = {
            id: generateQualityRecordId(),
            product_id: document.getElementById('qcProductId').value,
            test_type: document.getElementById('testType').value,
            result: document.getElementById('testResult').value,
            status: document.getElementById('testStatus').value,
            inspector: document.getElementById('inspector').value,
            date: new Date().toISOString().split('T')[0],
            certification: document.getElementById('certification').value
        };
        
        supplyChainData.quality_records.push(qualityData);
        
        hideLoading();
        form.reset();
        
        showNotification('Quality check recorded successfully!', 'success');
        loadQualityRecords();
    });
}

function loadQualityRecords() {
    const container = document.getElementById('qualityRecords');
    const recentRecords = supplyChainData.quality_records
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);
    
    container.innerHTML = recentRecords.map(record => {
        const statusClass = record.status.toLowerCase().replace(' ', '-');
        return `
            <div class="quality-record">
                <div class="quality-info">
                    <h4>${record.test_type} - ${record.product_id}</h4>
                    <div class="quality-details">
                        <span><strong>Result:</strong> ${record.result}</span>
                        <span><strong>Inspector:</strong> ${record.inspector}</span>
                        <span><strong>Date:</strong> ${formatDate(record.date)}</span>
                        <span><strong>Certification:</strong> ${record.certification}</span>
                    </div>
                </div>
                <div class="status status--${record.status === 'Passed' ? 'success' : record.status === 'Failed' ? 'error' : 'warning'}">
                    ${record.status}
                </div>
            </div>
        `;
    }).join('');
}

// Fraud Detection
function loadFraudDetection() {
    updateFraudStats();
    loadFraudAlerts();
}

function updateFraudStats() {
    const totalAlerts = supplyChainData.fraud_alerts.length;
    const highPriority = supplyChainData.fraud_alerts.filter(a => a.severity === 'High').length;
    const investigation = supplyChainData.fraud_alerts.filter(a => a.status === 'Under Investigation').length;
    const resolved = supplyChainData.fraud_alerts.filter(a => a.status === 'Resolved').length;
    
    document.getElementById('totalAlerts').textContent = totalAlerts;
    document.getElementById('highPriorityAlerts').textContent = highPriority;
    document.getElementById('investigationAlerts').textContent = investigation;
    document.getElementById('resolvedAlerts').textContent = resolved;
}

function loadFraudAlerts() {
    const container = document.getElementById('fraudAlertsList');
    
    container.innerHTML = supplyChainData.fraud_alerts.map(alert => {
        const severityClass = alert.severity.toLowerCase();
        const statusClass = alert.status.toLowerCase().replace(' ', '-');
        return `
            <div class="fraud-alert-item ${severityClass}">
                <div class="fraud-alert-content">
                    <h4>${alert.type}</h4>
                    <p><strong>Product:</strong> ${alert.product_id} • <strong>Severity:</strong> ${alert.severity}</p>
                    <p>${alert.description}</p>
                    <p><small>${formatDateTime(alert.timestamp)}</small></p>
                </div>
                <div class="status status--${alert.status === 'Resolved' ? 'success' : 'warning'}">
                    ${alert.status}
                </div>
            </div>
        `;
    }).join('');
}

// Product Verification
function initializeProductVerification() {
    const verifyBtn = document.getElementById('verifyBtn');
    const verifyInput = document.getElementById('verifyProductId');
    
    verifyBtn.addEventListener('click', () => {
        const productId = verifyInput.value.trim();
        if (productId) {
            verifyProduct(productId);
        }
    });
    
    verifyInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const productId = verifyInput.value.trim();
            if (productId) {
                verifyProduct(productId);
            }
        }
    });
}

function verifyProduct(productId) {
    const container = document.getElementById('verificationResult');
    const product = supplyChainData.products.find(p => p.id === productId);
    
    if (product) {
        // Product found - show success
        container.innerHTML = `
            <div class="verification-success">
                <div class="verification-header">
                    <i class="fas fa-check-circle"></i>
                    <h3>Product Verified!</h3>
                    <p>This product is authentic and registered on the blockchain.</p>
                </div>
                <div class="product-meta">
                    <div class="meta-item">
                        <div class="meta-label">Product Name</div>
                        <div class="meta-value">${product.name}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Manufacturer</div>
                        <div class="meta-value">${product.manufacturer}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Batch Number</div>
                        <div class="meta-value">${product.batch}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Manufacturing Date</div>
                        <div class="meta-value">${formatDate(product.manufacturing_date)}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Current Status</div>
                        <div class="meta-value">${product.status}</div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-label">Blockchain Hash</div>
                        <div class="meta-value">${product.blockchain_hash}</div>
                    </div>
                </div>
            </div>
        `;
        container.className = 'verification-result verification-success';
    } else {
        // Product not found - show error
        container.innerHTML = `
            <div class="verification-error">
                <div class="verification-header">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Product Not Found!</h3>
                    <p>This product ID is not registered on the blockchain. It may be counterfeit or the ID may be incorrect.</p>
                </div>
                <div style="text-align: center; margin-top: var(--space-20);">
                    <p><strong>What to do:</strong></p>
                    <ul style="text-align: left; display: inline-block;">
                        <li>Double-check the product ID</li>
                        <li>Verify the source of the product</li>
                        <li>Contact the manufacturer for verification</li>
                        <li>Report suspicious products to authorities</li>
                    </ul>
                </div>
            </div>
        `;
        container.className = 'verification-result verification-error';
    }
    
    container.classList.remove('hidden');
}

// Analytics Charts
let charts = {};

function loadAnalytics() {
    // Destroy existing charts
    Object.values(charts).forEach(chart => {
        if (chart) chart.destroy();
    });
    charts = {};
    
    setTimeout(() => {
        createStatusChart();
        createQualityChart();
        createRegistrationsChart();
        createFraudChart();
    }, 100);
}

function createStatusChart() {
    const ctx = document.getElementById('statusChart').getContext('2d');
    
    const statusCounts = {};
    supplyChainData.products.forEach(product => {
        statusCounts[product.status] = (statusCounts[product.status] || 0) + 1;
    });
    
    charts.statusChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statusCounts),
            datasets: [{
                data: Object.values(statusCounts),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function createQualityChart() {
    const ctx = document.getElementById('qualityChart').getContext('2d');
    
    const qualityCounts = {
        'Passed': 0,
        'Failed': 0,
        'Pending': 0
    };
    
    supplyChainData.quality_records.forEach(record => {
        qualityCounts[record.status] = (qualityCounts[record.status] || 0) + 1;
    });
    
    charts.qualityChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(qualityCounts),
            datasets: [{
                label: 'Quality Results',
                data: Object.values(qualityCounts),
                backgroundColor: ['#1FB8CD', '#B4413C', '#FFC185']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createRegistrationsChart() {
    const ctx = document.getElementById('registrationsChart').getContext('2d');
    
    // Generate mock monthly data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const registrations = [12, 19, 15, 25, 22, 30, 28, 35, 32, supplyChainData.products.length];
    
    charts.registrationsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Product Registrations',
                data: registrations,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createFraudChart() {
    const ctx = document.getElementById('fraudChart').getContext('2d');
    
    // Generate mock fraud trend data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const detected = [2, 1, 3, 0, 2, 1, 4, 2, 1, supplyChainData.fraud_alerts.length];
    const resolved = [2, 1, 2, 0, 2, 1, 3, 2, 1, supplyChainData.fraud_alerts.filter(a => a.status === 'Resolved').length];
    
    charts.fraudChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Detected',
                    data: detected,
                    backgroundColor: '#B4413C'
                },
                {
                    label: 'Resolved',
                    data: resolved,
                    backgroundColor: '#1FB8CD'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize Application
function initializeApp() {
    initializeNavigation();
    initializeProductRegistration();
    initializeProductTracking();
    initializeQualityManagement();
    initializeProductVerification();
    
    // Load initial data
    loadDashboard();
    
    // Set up notification close button
    document.getElementById('notificationClose').addEventListener('click', () => {
        document.getElementById('notification').classList.add('hidden');
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Simulate real-time updates (for demo purposes)
setInterval(() => {
    // Update dashboard metrics if dashboard is active
    const dashboardView = document.getElementById('dashboard');
    if (dashboardView.classList.contains('active')) {
        updateMetrics();
    }
}, 30000); // Update every 30 seconds