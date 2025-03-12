// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Modules interactivity
    const modules = document.querySelectorAll('.module');
    
    modules.forEach(module => {
        module.addEventListener('click', (event) => {
            const moreInfo = event.currentTarget.querySelector('.more-info');
            if (moreInfo) {
                // Toggle additional information display
                moreInfo.classList.toggle('hidden');
                event.currentTarget.classList.toggle('expanded');
            }
        });
    });

    // Simulated Database Data Loading
    loadDatabaseData();

    // Patient Report Generation
    generatePatientReport();
});

// Function to load database model data dynamically
function loadDatabaseData() {
    const clinicalPortalData = [
        { patient: 'John Doe', diagnosis: 'End-stage kidney disease', device: 'CLARIA APD Machine', vitals: 'Blood Pressure: 120/80' },
        { patient: 'Jane Smith', diagnosis: 'Chronic kidney disease', device: 'Homechoice CLARIA', vitals: 'Blood Pressure: 130/85' }
    ];

    const adminModelData = [
        { admin: 'Clinic A', access: 'Patient Records, Device Management' },
        { admin: 'Clinic B', access: 'Patient Records' }
    ];

    const clinicalPortalElement = document.querySelector('.db-model.clinical-portal ul');
    const adminModelElement = document.querySelector('.db-model.admin-model ul');

    clinicalPortalData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Patient: ${item.patient}, Diagnosis: ${item.diagnosis}, Device: ${item.device}, Vitals: ${item.vitals}`;
        clinicalPortalElement.appendChild(listItem);
    });

    adminModelData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Admin: ${item.admin}, Access: ${item.access}`;
        adminModelElement.appendChild(listItem);
    });
}

// Function to simulate patient report generation
function generatePatientReport() {
    const reportData = [
        { name: 'John Doe', dialysisSessions: 3, complications: 'None', alert: 'Normal' },
        { name: 'Jane Smith', dialysisSessions: 5, complications: 'Mild infection', alert: 'Warning' }
    ];

    const reportElement = document.querySelector('.report ul');
    reportData.forEach(report => {
        const listItem = document.createElement('li');
        listItem.textContent = `Patient: ${report.name}, Sessions: ${report.dialysisSessions}, Complications: ${report.complications}, Status: ${report.alert}`;
        reportElement.appendChild(listItem);
    });
}

// Example of showing additional information for each module (hidden by default)
document.querySelectorAll('.module').forEach(module => {
    module.addEventListener('click', function() {
        // Toggles expanded state and more info
        this.classList.toggle('expanded');
        const moreInfo = this.querySelector('.more-info');
        if (moreInfo) {
            moreInfo.classList.toggle('hidden');
        }
    });
});
