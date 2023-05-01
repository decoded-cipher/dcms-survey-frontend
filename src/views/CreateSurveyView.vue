<template>
    <MainLayout>

        <div class="absolute right-7 top-7">
            <ToastMessage
                v-for="toast in toasts"
                :key="toast.id"
                :toast="toast"
                @removeToast="removeToast()"
            />
        </div>

        <div class="mb-4 px-4">
            <GeneralInfo @setData="setGeneralInfoData" />
            <SocioEconomic @setData="setSocioEconomicData" />
            <FamilyDetails @setData="setFamilyDetailsData" :generalInfo="data.generalInfo" />

            
            <div class="flex justify-end">
                <button class="flex items-center justify-center w-full md:w-1/5 px-4 py-3 my-6 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" @click="submitSurvey()">
                    <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span>Submit Survey</span>
                </button>
            </div>

        </div>

        
    </MainLayout>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout.vue';

    import GeneralInfo from '../components/CreateSurvey/GeneralInfo.vue';
    import SocioEconomic from '@/components/CreateSurvey/SocioEconomic.vue';
    import FamilyDetails from '../components/CreateSurvey/FamilyDetails.vue';

    import ToastMessage from '../partials/ToastMessage.vue';

    export default {
        name: 'CreateSurveyView',
        components: {
            MainLayout,
            GeneralInfo,
            SocioEconomic,
            FamilyDetails,
            ToastMessage
        },
        data() {
            return {
                data: {
                    generalInfo: {},
                    socioEconomic: {},
                    familyDetails: {}
                },
                toasts: []
            }
        },

        methods: {
            setGeneralInfoData(data) {
                this.data = {
                    ...this.data,
                    generalInfo: {
                        ...this.data.generalInfo,
                        ...data
                    }
                }
                // console.table(this.data);
            },

            setSocioEconomicData(data) {
                this.data = {
                    ...this.data,
                    socioEconomic: {
                        ...this.data.socioEconomic,
                        ...data
                    }
                }
                // console.table(this.data);
            },

            setFamilyDetailsData(data) {
                this.data = {
                    ...this.data,
                    familyDetails: {
                        ...this.data.familyDetails,
                        ...data
                    }
                }
                // console.table(this.data);
            },

            dataValidation() {
                this.toasts = [];
                for (const [key, value] of Object.entries(this.data.generalInfo)) {
                    if (value == null || value == '') {
                        this.toasts.push({
                            id: this.toasts.length + 1,
                            message: 'You have not filled the ' + key + ' field',
                            type: 'error'
                        });
                    }
                }

                for (const [key, value] of Object.entries(this.data.familyDetails)) {
                    for (const [key2, value2] of Object.entries(value)) {
                        if (value2 == null || value2 == '') {
                            this.toasts.push({
                                id: this.toasts.length + 1,
                                message: 'You haven\'t filled the ' + key2 + ' field of a family member',
                                type: 'error'
                            });
                        }
                    }
                }

                console.log(this.toasts);
                if (this.toasts.length == 0) {
                    return true;
                } else {
                    return false;
                }
            },

            async submitSurvey() {
                if (this.dataValidation()) {
                    
                    // await fetch('http://localhost:3000/survey/create', {
                    await fetch('https://api.dcmschry.com/survey/create', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        },
                        body: JSON.stringify(this.data)
                    }).then(data => {
                        // console.log(data);
                        if (data.status == 200) {
                            alert('Survey Submitted');
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });

                }
            },

            removeToast(toastId) {
                this.toasts.splice(toastId, 1);
                // console.log(this.toasts);
            }
        }
        
    };
</script>