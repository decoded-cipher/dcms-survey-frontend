<template>
    <MainLayout>

        <CreateSurvey />
        
    </MainLayout>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout.vue';
    import CreateSurvey from '@/components/CreateSurvey.vue';
    export default {
        name: 'CreateSurveyView',
        components: {
            MainLayout,
            CreateSurvey
        }
    };
</script>