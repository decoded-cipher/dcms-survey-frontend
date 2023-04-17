<template>

    <div class="p-4 my-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
        <h3 class="mb-4 text-xl font-bold dark:text-white">General Information</h3>

        <div class="grid grid-cols-1 mb-6 xl:mb-0 md:gap-6 sm:grid-cols-3">
            <div class="grid grid-cols-1 gap-6 mb-6 xl:mb-0 sm:grid-cols-2 col-span-2">
                <div>
                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required>
                </div>
                <div>
                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required>
                </div>
                <div>
                    <label for="post-office" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Office</label>
                    <input type="text" name="post-office" id="post-office" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. 12345" required>
                </div>
                <div>
                    <label for="panchayath" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Panchayath</label>
                    <select name="panchayath" id="panchayath" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="panchayath in panchayaths" :value="panchayath.value">{{ panchayath.text }}</option>
                    </select>
                </div>
                <div>
                    <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                    <select name="district" id="district" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="district in districts" :value="district.value">{{ district.text }}</option>
                    </select>
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                    <input type="number" name="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. 12345" required>
                </div>
            </div>
            <div class="col-span-1">
                <label for="info" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <textarea id="info" name="info" rows="10" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Receipt Info (optional)"></textarea>
            </div>
        </div>
    </div>

</template>


<script>

    export default {
        components: {

        },
        data () {
            return {
                panchayaths: [
                    { text: 'Vazhappally', value: 'vazhappally' },
                    { text: 'Aymanam', value: 'aymanam' },
                    { text: 'Athirampuzha', value: 'athirampuzha' },
                    { text: 'Ettumanoor', value: 'ettumanoor' },
                    { text: 'Kurichy', value: 'kurichy' },
                    { text: 'Thiruvarppu', value: 'thiruvarppu' }
                ],
                districts: [
                    { text: 'Kottayam', value: 'kottayam' },
                    { text: 'Alappuzha', value: 'alappuzha' },
                    { text: 'Pathanamthitta', value: 'pathanamthitta' },
                    { text: 'Idukki', value: 'idukki' }
                ]
            }
        }
    }

</script>