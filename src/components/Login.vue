<template>
    
    <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto h-screen pt:mt-0 dark:bg-gray-900">
        
        <div class="items-center justify-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800">
            <div class="hidden w-2/3 lg:flex">
                <img class="rounded-l-lg" src="	https://flowbite.com/application-ui/demo/images/authentication/login.jpg" alt="login image">
            </div>
            <div class="w-full p-6 space-y-8 sm:p-8 lg:p-16 lg:py-0">
                <h2 class="text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                    Sign in to platform
                </h2>
                <div class="mt-8 space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" v-model="user.email">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="user.password">
                    </div>
                    
                    <button type="submit" @click="userLogin()" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            userLogin() {
                this.$emit('userLogin', this.user);
            }
        }
    };
</script>