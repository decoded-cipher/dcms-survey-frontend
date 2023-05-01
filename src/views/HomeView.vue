<template>
    <MainLayout>

        <!-- <NoPermission 
            message="You don't have permission to view Analytics." 
            link="/survey"
            linkText="Create a Survey"
        /> -->

        <div class="h-screen w-full">
            <div class="flex gap-5 m-5">
                <iframe style="background: #21313C; border: none; border-radius: 5px; box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="200" height="200" src="https://charts.mongodb.com/charts-survey-vfmtq/embed/charts?id=64495911-2ff0-466d-855e-17320b84c424&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
                <iframe style="background: #21313C; border: none; border-radius: 5px; box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="200" height="200" src="https://charts.mongodb.com/charts-survey-vfmtq/embed/charts?id=6449597f-a127-4e68-85d6-6c2ee651bf9a&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
                <iframe style="background: #21313C; border: none; border-radius: 5px; box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="400" height="200" src="https://charts.mongodb.com/charts-survey-vfmtq/embed/charts?id=6449a42c-3b6a-4ff1-88e9-f0eff4476733&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
                <iframe style="background: #21313C; border: none; border-radius: 5px; box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="400" height="200" src="https://charts.mongodb.com/charts-survey-vfmtq/embed/charts?id=abd072f7-3aec-46e2-bcf4-843f1d0bbacf&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
            </div>
            <div class="flex gap-5 m-5">
                <iframe class="w-full" style="background: #21313C; border: none;border-radius: 5px; box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" height="200" src="https://charts.mongodb.com/charts-survey-vfmtq/embed/charts?id=64499a93-b2a5-43f8-8f59-5e35495c3aad&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
                <iframe class="w-full" style="background: #21313C; border: none;border-radius: 5px; box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" height="200" src="https://charts.mongodb.com/charts-survey-vfmtq/embed/charts?id=558aa83a-d503-4fea-b4be-5cd6cd460504&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
            </div>
            <div class="flex gap-5 m-5">
                <iframe style="background: #21313C; border: none; border-radius: 5px; box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="400" height="200" src="https://charts.mongodb.com/charts-survey-vfmtq/embed/charts?id=644a1759-108b-4e92-87e0-42182d6f0cc1&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
            </div>
        </div>
        
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