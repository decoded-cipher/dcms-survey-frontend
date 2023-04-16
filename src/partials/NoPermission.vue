<template>

    <div class="h-screen w-full">
        <div class="flex flex-col mx-10 items-center text-center justify-center h-full">
            <h1 class="text-2xl font-bold text-gray-200">{{ message }}</h1>
            <p class="text-gray-500 my-2">Please contact your administrator for more details.</p>
            <router-link :to="link" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {{ linkText }}
            </router-link>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'NoPermission',
        props: {
            message: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            linkText: {
                type: String,
                required: true
            }
        }
    }
    
</script>