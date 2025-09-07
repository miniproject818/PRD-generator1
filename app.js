// Application data from provided JSON
const appData = {
  "businessTypes": [
    "",
    "E-commerce",
    "Portfolio", 
    "Corporate/Business",
    "Blog/Content Site",
    "SaaS Platform",
    "Educational",
    "Healthcare",
    "Real Estate",
    "Restaurant/Food Service",
    "Non-profit",
    "Other"
  ],
  "trafficLevels": [
    "",
    "Under 1,000 monthly visitors",
    "1K - 10K monthly visitors", 
    "10K - 100K monthly visitors",
    "100K - 1M monthly visitors",
    "1M+ monthly visitors"
  ],
  "budgetRanges": [
    "",
    "Under $5,000",
    "$5,000 - $25,000",
    "$25,000 - $100,000", 
    "$100,000+"
  ],
  "hostingOptions": [
    "",
    "Cloud Platform (AWS/Azure/GCP)",
    "Shared Hosting",
    "VPS/Dedicated Server",
    "Don't Know/Need Recommendation"
  ],
  "timelines": [
    "",
    "1-3 months",
    "3-6 months", 
    "6-12 months",
    "12+ months"
  ],
  "coreFeatures": [
    "User Authentication & Login",
    "E-commerce/Online Store", 
    "Blog/Content Management",
    "Search Functionality",
    "Analytics & Reporting",
    "Social Media Integration",
    "API Integrations",
    "Admin Dashboard",
    "Mobile App Integration",
    "Payment Processing",
    "Email Marketing",
    "Live Chat Support",
    "Multi-language Support",
    "SEO Optimization"
  ],
  "designStyles": [
    "",
    "Modern/Minimalist",
    "Corporate/Professional",
    "Creative/Artistic", 
    "E-commerce Focused",
    "Blog/Content Focused",
    "Custom Design"
  ],
  "popularFonts": [
    "",
    "Open Sans",
    "Roboto",
    "Lato", 
    "Montserrat",
    "Source Sans Pro",
    "Poppins",
    "Inter",
    "Nunito"
  ],
  "securityFeatures": [
    "HTTPS/SSL Certificate",
    "User Data Protection",
    "Payment Security",
    "GDPR Compliance",
    "Two-Factor Authentication", 
    "Regular Security Audits",
    "Data Backup & Recovery"
  ],
  "performanceFeatures": [
    "Fast Page Loading",
    "SEO Optimization",
    "Progressive Web App (PWA)",
    "Offline Support",
    "Image Optimization",
    "CDN Integration",
    "Mobile Optimization"
  ]
};

// PRD Template
const prdTemplate = `# **{{PROJECT_NAME}} - Product Requirements Document**

## **Document Information**

| Field | Value |
|-------|-------|
| **Document Title** | {{PROJECT_NAME}} - Product Requirements Document |
| **Document Version** | 1.0.0 |
| **Created Date** | {{CREATED_DATE}} |
| **Status** | Draft |

---

## **1. Project Overview**

### **Project Name**
{{PROJECT_NAME}}

### **Project Description**
{{PROJECT_DESCRIPTION}}

### **Business Type/Industry**
{{BUSINESS_TYPE}}

### **Target Audience**
{{TARGET_AUDIENCE}}

### **Key Business Goals**
{{BUSINESS_GOALS}}

---

## **2. Technical Requirements**

### **2.1 Performance Expectations**
- **Expected Traffic**: {{EXPECTED_TRAFFIC}}
- **Budget Range**: {{BUDGET_RANGE}}
- **Timeline**: {{TIMELINE}}
- **Hosting Preference**: {{HOSTING_PREFERENCE}}

### **2.2 Technical Stack Recommendations**
Based on the project requirements, we recommend:
- **Frontend**: Modern responsive framework (React, Vue.js, or Angular)
- **Backend**: {{BACKEND_RECOMMENDATION}}
- **Database**: {{DATABASE_RECOMMENDATION}}
- **Hosting**: {{HOSTING_RECOMMENDATION}}

---

## **3. Feature Requirements**

### **3.1 Core Features**
{{CORE_FEATURES_LIST}}

### **3.2 Third-party Integrations**
{{THIRD_PARTY_INTEGRATIONS}}

### **3.3 Special Requirements**
{{SPECIAL_REQUIREMENTS}}

---

## **4. Design & User Experience**

### **4.1 Design Style**
{{DESIGN_STYLE}}

### **4.2 Color Palette**
- **Primary Color**: {{PRIMARY_COLOR}}
- **Secondary Color**: {{SECONDARY_COLOR}}

### **4.3 Typography**
- **Font Family**: {{FONT_PREFERENCE}}

### **4.4 Responsive Design Requirements**
{{RESPONSIVE_REQUIREMENTS}}

---

## **5. Security & Performance Requirements**

### **5.1 Security Features**
{{SECURITY_FEATURES_LIST}}

### **5.2 Performance Requirements**
{{PERFORMANCE_FEATURES_LIST}}

---

## **6. Development Timeline & Milestones**

### **6.1 Project Timeline**
**Overall Timeline**: {{TIMELINE}}

### **6.2 Suggested Milestones**
1. **Planning & Design Phase** (Week 1-2)
   - Requirements finalization
   - UI/UX design creation
   - Technical architecture planning

2. **Development Phase** (Week 3-{{DEVELOPMENT_WEEKS}})
   - Backend development
   - Frontend development
   - Feature implementation

3. **Testing & Launch Phase** (Final 1-2 weeks)
   - Quality assurance testing
   - Performance optimization
   - Deployment and launch

---

## **7. Success Metrics**

### **7.1 Technical Metrics**
- Page load time: < 3 seconds
- Mobile responsiveness: 100% compatible
- Uptime: 99.9%

### **7.2 Business Metrics**
{{SUCCESS_METRICS}}

---

## **8. Additional Requirements**

{{ADDITIONAL_COMMENTS}}

---

## **9. Risk Assessment & Mitigation**

### **9.1 Potential Risks**
- **Technical Complexity**: {{TECHNICAL_RISK_ASSESSMENT}}
- **Timeline Risk**: Regular milestone reviews recommended
- **Budget Risk**: Clear scope definition and change management process

### **9.2 Mitigation Strategies**
- Regular progress reviews
- Agile development approach
- Clear communication channels
- Proper testing protocols

---

**Document Generated**: {{CREATED_DATE}}
**Generated by**: PRD Generator Tool
**Next Review Date**: {{NEXT_REVIEW_DATE}}

---

*This document serves as the foundation for the {{PROJECT_NAME}} development project. All stakeholders should review and approve this document before development begins.*`;

// Global application state
let currentStep = 1;
let formData = {};
let totalSteps = 5;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing PRD Generator...');
    
    // Wait a brief moment to ensure all elements are rendered
    setTimeout(() => {
        initializeApp();
    }, 100);
});

// Initialize the complete application
function initializeApp() {
    try {
        populateFormOptions();
        setupEventListeners();
        updateProgressBar();
        updateNavigationButtons();
        console.log('PRD Generator initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Populate form options from data
function populateFormOptions() {
    // Populate business types
    populateSelect('businessType', appData.businessTypes);
    
    // Populate technical preferences
    populateSelect('expectedTraffic', appData.trafficLevels);
    populateSelect('budgetRange', appData.budgetRanges);
    populateSelect('preferredHosting', appData.hostingOptions);
    populateSelect('timeline', appData.timelines);
    
    // Populate design options
    populateSelect('designStyle', appData.designStyles);
    populateSelect('fontPreference', appData.popularFonts);
    
    // Populate feature checkboxes
    populateCheckboxes('coreFeatures', appData.coreFeatures);
    populateCheckboxes('securityFeatures', appData.securityFeatures);
    populateCheckboxes('performanceFeatures', appData.performanceFeatures);
}

// Populate select dropdown
function populateSelect(elementId, options) {
    const select = document.getElementById(elementId);
    if (!select) {
        console.warn(`Select element '${elementId}' not found`);
        return;
    }
    
    // Clear existing options except first
    while (select.children.length > 1) {
        select.removeChild(select.lastChild);
    }
    
    // Add options
    options.forEach(option => {
        if (option.trim()) { // Skip empty strings
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            select.appendChild(optionElement);
        }
    });
}

// Populate checkbox groups
function populateCheckboxes(containerId, options) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container '${containerId}' not found`);
        return;
    }
    
    container.innerHTML = '';
    
    options.forEach((option, index) => {
        const checkboxItem = document.createElement('label');
        checkboxItem.className = 'checkbox-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = containerId;
        checkbox.value = option;
        checkbox.id = `${containerId}_${index}`;
        
        const label = document.createElement('span');
        label.textContent = option;
        
        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(label);
        container.appendChild(checkboxItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Start button
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Start button clicked');
            startForm();
        });
    }
    
    // Navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            previousStep();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextStep();
        });
    }
    
    if (generateBtn) {
        generateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generatePRD();
        });
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadPRD();
        });
    }
    
    // Form input listeners for data persistence
    const prdForm = document.getElementById('prdForm');
    if (prdForm) {
        prdForm.addEventListener('input', saveFormData);
        prdForm.addEventListener('change', saveFormData);
    }
}

// Start the form process
function startForm() {
    console.log('Starting form...');
    
    const welcomeScreen = document.getElementById('welcomeScreen');
    const formContainer = document.getElementById('formContainer');
    
    if (welcomeScreen && formContainer) {
        welcomeScreen.classList.add('hidden');
        formContainer.classList.remove('hidden');
        showStep(1);
        console.log('Form started successfully');
    } else {
        console.error('Welcome screen or form container not found');
    }
}

// Navigate to previous step
function previousStep() {
    if (currentStep > 1) {
        saveFormData();
        currentStep--;
        showStep(currentStep);
        updateProgressBar();
        updateNavigationButtons();
    }
}

// Navigate to next step
function nextStep() {
    // Validate current step
    if (currentStep === 1 && !validateStep1()) {
        return;
    }
    
    saveFormData();
    
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        updateProgressBar();
        updateNavigationButtons();
    }
}

// Show specific step
function showStep(stepNumber) {
    console.log(`Showing step ${stepNumber}`);
    
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    const currentStepElement = document.querySelector(`[data-step="${stepNumber}"]`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
        
        // Restore form data for this step
        restoreFormData();
    } else {
        console.error(`Step ${stepNumber} element not found`);
    }
}

// Update progress bar
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill && progressText) {
        const progressPercentage = (currentStep / totalSteps) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const generateBtn = document.getElementById('generateBtn');
    
    if (prevBtn) {
        if (currentStep === 1) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }
    }
    
    if (nextBtn && generateBtn) {
        if (currentStep === totalSteps) {
            nextBtn.classList.add('hidden');
            generateBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            generateBtn.classList.add('hidden');
        }
    }
}

// Validate Step 1 (only required fields)
function validateStep1() {
    const projectNameInput = document.getElementById('projectName');
    if (!projectNameInput) {
        console.error('Project name input not found');
        return false;
    }
    
    const projectName = projectNameInput.value.trim();
    if (!projectName) {
        alert('Please enter a project name to continue.');
        projectNameInput.focus();
        return false;
    }
    return true;
}

// Save form data to global state
function saveFormData() {
    const prdForm = document.getElementById('prdForm');
    if (!prdForm) return;
    
    const formDataObj = new FormData(prdForm);
    
    // Save regular form fields
    for (let [key, value] of formDataObj.entries()) {
        if (!key.includes('[]') && !['coreFeatures', 'securityFeatures', 'performanceFeatures', 'responsive'].includes(key)) {
            formData[key] = value;
        }
    }
    
    // Save checkbox arrays
    formData.coreFeatures = getCheckedValues('coreFeatures');
    formData.securityFeatures = getCheckedValues('securityFeatures');
    formData.performanceFeatures = getCheckedValues('performanceFeatures');
    formData.responsiveRequirements = getCheckedValues('responsive');
    
    console.log('Form data saved:', formData);
}

// Get checked values from checkbox group
function getCheckedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Restore form data from global state
function restoreFormData() {
    // Restore text inputs, selects, and textareas
    Object.keys(formData).forEach(key => {
        const element = document.getElementById(key);
        if (element && typeof formData[key] === 'string') {
            element.value = formData[key];
        }
    });
    
    // Restore checkboxes
    ['coreFeatures', 'securityFeatures', 'performanceFeatures', 'responsiveRequirements'].forEach(group => {
        if (formData[group] && Array.isArray(formData[group])) {
            // Clear all checkboxes first
            const groupName = group === 'responsiveRequirements' ? 'responsive' : group;
            document.querySelectorAll(`input[name="${groupName}"]`).forEach(cb => {
                cb.checked = false;
            });
            
            // Set checked values
            formData[group].forEach(value => {
                const checkbox = document.querySelector(`input[name="${groupName}"][value="${value}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
    });
}

// Generate PRD document
function generatePRD() {
    console.log('Generating PRD...');
    
    // Final save of form data
    saveFormData();
    
    // Show loading
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
    }
    
    // Simulate processing time for better UX
    setTimeout(() => {
        try {
            const generatedPRD = createPRDDocument();
            showResults(generatedPRD);
        } catch (error) {
            console.error('Error generating PRD:', error);
            alert('An error occurred while generating the PRD. Please try again.');
        } finally {
            if (loadingOverlay) {
                loadingOverlay.classList.add('hidden');
            }
        }
    }, 2000);
}

// Create PRD document from template
function createPRDDocument() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const nextReviewDate = new Date();
    nextReviewDate.setMonth(nextReviewDate.getMonth() + 1);
    
    // Create replacement map
    const replacements = {
        '{{PROJECT_NAME}}': formData.projectName || 'Untitled Project',
        '{{CREATED_DATE}}': currentDate,
        '{{PROJECT_DESCRIPTION}}': formData.projectDescription || 'Project description to be defined.',
        '{{BUSINESS_TYPE}}': formData.businessType || 'Business type not specified',
        '{{TARGET_AUDIENCE}}': formData.targetAudience || 'Target audience to be defined based on business goals.',
        '{{BUSINESS_GOALS}}': formData.businessGoals || 'Business goals to be defined during project planning phase.',
        '{{EXPECTED_TRAFFIC}}': formData.expectedTraffic || 'Traffic expectations to be determined',
        '{{BUDGET_RANGE}}': formData.budgetRange || 'Budget to be determined',
        '{{TIMELINE}}': formData.timeline || 'Timeline to be determined',
        '{{HOSTING_PREFERENCE}}': formData.preferredHosting || 'Hosting solution to be determined based on technical requirements',
        '{{BACKEND_RECOMMENDATION}}': generateTechRecommendations().backend,
        '{{DATABASE_RECOMMENDATION}}': generateTechRecommendations().database,
        '{{HOSTING_RECOMMENDATION}}': generateTechRecommendations().hosting,
        '{{CORE_FEATURES_LIST}}': formatFeaturesList(formData.coreFeatures),
        '{{THIRD_PARTY_INTEGRATIONS}}': formData.thirdPartyIntegrations || 'Third-party integrations to be determined based on feature requirements.',
        '{{SPECIAL_REQUIREMENTS}}': formData.specialRequirements || 'No special requirements specified.',
        '{{DESIGN_STYLE}}': formData.designStyle || 'Design style to be determined during design phase',
        '{{PRIMARY_COLOR}}': formData.primaryColor || '#1e3a8a',
        '{{SECONDARY_COLOR}}': formData.secondaryColor || '#64748b',
        '{{FONT_PREFERENCE}}': formData.fontPreference || 'Modern web-safe fonts',
        '{{RESPONSIVE_REQUIREMENTS}}': formatFeaturesList(formData.responsiveRequirements),
        '{{SECURITY_FEATURES_LIST}}': formatFeaturesList(formData.securityFeatures),
        '{{PERFORMANCE_FEATURES_LIST}}': formatFeaturesList(formData.performanceFeatures),
        '{{DEVELOPMENT_WEEKS}}': calculateDevelopmentWeeks(),
        '{{SUCCESS_METRICS}}': generateSuccessMetrics(),
        '{{ADDITIONAL_COMMENTS}}': formData.additionalComments || 'No additional requirements specified.',
        '{{TECHNICAL_RISK_ASSESSMENT}}': generateRiskAssessment(),
        '{{NEXT_REVIEW_DATE}}': nextReviewDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };
    
    // Replace all placeholders in template
    let result = prdTemplate;
    Object.keys(replacements).forEach(placeholder => {
        const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        result = result.replace(regex, replacements[placeholder]);
    });
    
    return result;
}

// Generate technical recommendations based on requirements
function generateTechRecommendations() {
    const traffic = formData.expectedTraffic || '';
    const budget = formData.budgetRange || '';
    const features = formData.coreFeatures || [];
    
    let recommendations = {
        backend: 'Node.js with Express or Python with Django/Flask',
        database: 'PostgreSQL for relational data, MongoDB for flexible schemas',
        hosting: 'Cloud platform (AWS, Azure, or GCP) for scalability'
    };
    
    // Adjust based on traffic
    if (traffic.includes('1M+')) {
        recommendations.backend = 'Microservices architecture with Node.js or Java Spring Boot';
        recommendations.database = 'PostgreSQL with read replicas and Redis caching';
        recommendations.hosting = 'Multi-region cloud deployment with CDN';
    } else if (traffic.includes('100K')) {
        recommendations.backend = 'Node.js or Python with load balancing';
        recommendations.database = 'PostgreSQL with connection pooling';
        recommendations.hosting = 'Cloud platform with auto-scaling groups';
    }
    
    // Adjust based on budget
    if (budget.includes('Under $5,000')) {
        recommendations.hosting = 'Shared hosting or VPS for cost efficiency';
    }
    
    // Adjust based on features
    if (features.includes('E-commerce/Online Store')) {
        recommendations.backend = 'Node.js with Stripe/PayPal integration or dedicated e-commerce platform';
        recommendations.database = 'PostgreSQL for transaction integrity';
    }
    
    return recommendations;
}

// Format features list for PRD
function formatFeaturesList(features) {
    if (!features || features.length === 0) {
        return 'No specific features selected. Standard website functionality will be implemented.';
    }
    
    return features.map(feature => `- ${feature}`).join('\n');
}

// Calculate development weeks based on timeline
function calculateDevelopmentWeeks() {
    const timeline = formData.timeline || '';
    if (timeline.includes('1-3 months')) return '8';
    if (timeline.includes('3-6 months')) return '16';
    if (timeline.includes('6-12 months')) return '32';
    if (timeline.includes('12+ months')) return '40';
    return '12';
}

// Generate success metrics based on project type
function generateSuccessMetrics() {
    const businessType = formData.businessType || '';
    const features = formData.coreFeatures || [];
    
    let metrics = [];
    
    if (businessType.includes('E-commerce') || features.includes('E-commerce/Online Store')) {
        metrics = [
            'Conversion rate: Target 2-3%',
            'Average order value: Track and optimize',
            'Cart abandonment rate: Keep below 70%'
        ];
    } else if (businessType.includes('Blog') || features.includes('Blog/Content Management')) {
        metrics = [
            'Monthly active users: Growth target',
            'Page views per session: Target 3+',
            'Time on site: Target 2+ minutes'
        ];
    } else if (businessType.includes('SaaS')) {
        metrics = [
            'User acquisition: Monthly growth rate',
            'User retention: 90-day retention rate',
            'Feature adoption: Track core feature usage'
        ];
    } else {
        metrics = [
            'User engagement: Time on site and page views',
            'Conversion goals: Lead generation or contact forms',
            'SEO performance: Organic search traffic growth'
        ];
    }
    
    return metrics.map(metric => `- ${metric}`).join('\n');
}

// Generate risk assessment based on project complexity
function generateRiskAssessment() {
    const features = formData.coreFeatures || [];
    const timeline = formData.timeline || '';
    const budget = formData.budgetRange || '';
    
    let riskLevel = 'Low';
    let risks = [];
    
    if (features.length > 7) {
        riskLevel = 'High';
        risks.push('Complex feature set may require additional development time');
    } else if (features.length > 4) {
        riskLevel = 'Medium';
        risks.push('Moderate complexity requires careful planning');
    }
    
    if (timeline.includes('1-3 months')) {
        risks.push('Aggressive timeline may require scope adjustment');
    }
    
    if (budget.includes('Under $5,000')) {
        risks.push('Limited budget may constrain feature scope');
    }
    
    if (risks.length === 0) {
        return `${riskLevel} complexity project with manageable scope and timeline.`;
    }
    
    return `${riskLevel} complexity. Key risks: ${risks.join('; ')}.`;
}

// Show results section
function showResults(generatedPRD) {
    console.log('Showing results...');
    
    const formContainer = document.getElementById('formContainer');
    const resultsSection = document.getElementById('resultsSection');
    const previewContent = document.getElementById('previewContent');
    
    if (formContainer && resultsSection && previewContent) {
        formContainer.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        previewContent.textContent = generatedPRD;
        
        // Store generated PRD for download
        window.generatedPRDContent = generatedPRD;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Download PRD as markdown file
function downloadPRD() {
    console.log('Downloading PRD...');
    
    if (!window.generatedPRDContent) {
        alert('No PRD content available for download.');
        return;
    }
    
    try {
        const blob = new Blob([window.generatedPRDContent], { 
            type: 'text/markdown;charset=utf-8' 
        });
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const filename = `${(formData.projectName || 'project').replace(/[^a-z0-9]/gi, '_').toLowerCase()}_prd.md`;
        
        link.href = url;
        link.download = filename;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        URL.revokeObjectURL(url);
        
        console.log('PRD downloaded successfully');
    } catch (error) {
        console.error('Download error:', error);
        alert('An error occurred while downloading the PRD. Please try again.');
    }
}