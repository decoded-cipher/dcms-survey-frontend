<template>
    <div class="grid grid-cols-1 px-4 pt-4 mb-4 xl:grid-cols-2 xl:gap-4 dark:bg-gray-900 dark:border-gray-700">
        <!-- <div class="col-span-full mb-4 xl:mb-2">
            <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Billing</h1>
        </div> -->
    </div>

    <div class="mb-4 px-4">
        

        <div class="p-4 mb-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
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
                        <input type="text" name="panchayath" id="panchayath" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. 12345" required>
                    </div>
                    <div>
                        <label for="district" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                        <input type="text" name="district" id="district" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. 12345" required>
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

        <div class="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
            <h3 class="mb-4 text-xl font-bold dark:text-white">Socio-Economic Survey</h3>
            
            <!-- Question to know if the person owns any land -->
            <SimpleQuestion 
                question = "Do you own any land?"
                name = "land"
                inputType = "number"
                placeholder = "Eg: 1.53"
            />

            <!-- Question to know if the person owns any house -->
            <SimpleQuestion 
                question = "Do you own any house?"
                name = "house"
                inputType = "select"
                :options = "houseStatus"
            />

            <!-- Question to know if the person owns any vehicle -->


            <!-- Question to know if the person has any bank account -->


            <!-- Question to know if the person has any insurance policy -->
            <SimpleQuestion 
                question = "Do you have any insurance policy?"
                name = "insurancePolicy"
                inputType = "select"
                :options = "insurancePolicy"
            />

            <!-- Question to know if the person has any investment -->
            <SimpleQuestion 
                question = "Do you have any investment?"
                name = "investment"
                inputType = "select"
                :options = "investmentOption"
            />

            <!-- Question to know if the person has any liabilities -->
            <SimpleQuestion 
                question = "Do you have any liabilities?"
                name = "liability"
                inputType = "select"
                :options = "liabilityOption"
            />

            <!-- Question to know if the family has any government/ semi-government/ aided school employee -->
            <SimpleQuestion 
                question = "Do you have any government employee in your family?"
                name = "govtJob"
                inputType = "select"
                :options = "govtEmployee"
            />

            <!-- Question to know if the family has any agricultural activity -->
            <SimpleQuestion 
                question = "Do you have any agricultural activity in your family?"
                name = "farming"
                inputType = "select"
                :options = "agriculturalActivity"
            />

            <!-- Question to know if the family runs any business -->
            <SimpleQuestion 
                question = "Do you have any business in your family?"
                name = "business"
                inputType = "select"
                :options = "businessActivity"
            />

            <!-- Question to know if the family has any migrant employee -->
            <SimpleQuestion 
                question = "Do you have any migrant employee in your family?"
                name = "migrant"
                inputType = "select"
                :options = "migrantEmployee"
            />

            <!-- Question to know if the family has any priest or religious leader or any other person who is dependent on the family -->
            <SimpleQuestion 
                question = "Do you have any priest or a priestly member in the family?"
                name = "priestlyMember"
                inputType = "select"
                :options = "priestlyMember"
            />

            <!-- Question to know whether the family has a ration card -->
            <SimpleQuestion 
                question = "Do you have a ration card?"
                name = "rationCard"
                inputType = "select"
                :options = "rationCard"
            />

        </div>
    </div>
</template>


<script>

    import SimpleQuestion from '../partials/SimpleQuestion.vue';

    export default {
        components: {
            SimpleQuestion
        },
        data () {
            return {
                houseStatus: [
                    { text: 'Habitable', value: 'habitable' },
                    { text: 'Non-Habitable', value: 'non-habitable' },
                    { text: 'Under Construction', value: 'under-construction' }
                ],
                insurancePolicy: [
                    { text: 'Life Insurance', value: 'life' },
                    { text: 'Health Insurance', value: 'health' },
                    { text: 'Vehicle Insurance', value: 'vehicle' },
                    { text: 'Property Insurance', value: 'property' },
                    { text: 'Other', value: 'other' }
                ],
                investmentOption: [
                    { text: 'Stocks', value: 'stocks' },
                    { text: 'Mutual Funds', value: 'mutual-funds' },
                    { text: 'Fixed Deposits', value: 'fixed-deposits' },
                    { text: 'Other', value: 'other' }
                ],
                liabilityOption: [
                    { text: 'Personal Loan', value: 'personal-loan' },
                    { text: 'Home Loan', value: 'home-loan' },
                    { text: 'Vehicle Loan', value: 'vehicle-loan' },
                    { text: 'Credit Card', value: 'credit-card' },
                    { text: 'Other', value: 'other' }
                ],
                govtEmployee: [
                    { text: 'State Government', value: 'state' },
                    { text: 'Central Government', value: 'central' },
                    { text: 'Semi-Government', value: 'semi' },
                    { text: 'Aided School', value: 'aided' }
                ],
                agriculturalActivity: [
                    { text: 'Rubber', value: 'rubber' },
                    { text: 'Other', value: 'other' }
                ],
                businessActivity: [
                    { text: 'Retail', value: 'retail' },
                    { text: 'Wholesale', value: 'wholesale' },
                    { text: 'Service', value: 'service' },
                    { text: 'Other', value: 'other' }
                ],
                migrantEmployee: [
                    { text: 'Asia', value: 'asia' },
                    { text: 'Middle East', value: 'middle-east' },
                    { text: 'Europe', value: 'europe' },
                    { text: 'America', value: 'america' },
                    { text: 'Other', value: 'other' }
                ],
                priestlyMember: [
                    { text: 'Priest', value: 'priest' },
                    { text: 'Religious Leader', value: 'religious-leader' },
                    { text: 'Other', value: 'other' }
                ],
                rationCard: [
                    { text: 'APL', value: 'apl' },
                    { text: 'BPL', value: 'bpl' },
                    { text: 'AAY', value: 'aay' },
                ]
            }
        }
    }


</script>