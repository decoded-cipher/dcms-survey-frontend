<template>
    <MainLayout>

        <NoPermission 
            message="You don't have permission to view Analytics." 
            link="/survey"
            linkText="Create a Survey"
        />
        
    </MainLayout>
</template>

<script>
    import MainLayout from '@/layouts/MainLayout.vue';
    import NoPermission from '@/partials/NoPermission.vue';
    export default {
        name: 'HomeView',
        components: {
            MainLayout,
            NoPermission
        }
    };
</script>