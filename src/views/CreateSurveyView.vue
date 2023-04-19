<template>
    <MainLayout>

        <div class="mb-4 px-4">
            <GeneralInfo @setData="setData" />
            <SocioEconomic @setData="setData" />
            <FamilyDetails @setData="setData" />
            
            <div class="flex justify-end">
                <button class="flex items-center justify-center w-full md:w-1/5 px-4 py-3 my-6 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
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

    export default {
        name: 'CreateSurveyView',
        components: {
            MainLayout,
            GeneralInfo,
            SocioEconomic,
            FamilyDetails
        },

        methods: {
            setData(data) {
                console.table(data);
            }
        }
        
    };
</script>