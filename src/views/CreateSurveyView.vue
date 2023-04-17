<template>
    <MainLayout>

        <div class="mb-4 px-4">
            <GeneralInfo />
            <SocioEconomic @setData="setData" />
            <FamilyDetails />
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
                console.log(data);
            }
        }
        
    };
</script>