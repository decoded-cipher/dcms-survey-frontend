<template>

    <div class="p-3 my-6 border rounded dark:border-gray-600">

        <div class="mt-3 mb-6">
            <h3 class="text-md pb-1 font-semibold dark:text-white">Details : Member - #01</h3>
            <span class="text-xs text-gray-500 dark:text-gray-400">Note : The following fields are for entering the details of the family member #01</span>
        </div>

        <div class="grid grid-cols-1 xl:mb-0 md:gap-6 gap-4 sm:grid-cols-6">
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div>
                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required>
                </div>
                <div>
                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required>
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select name="gender" id="gender" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="gender in genders" :value="gender.value" :key="gender.value">{{ gender.text }}</option>
                    </select>
                </div>
                <div class="w-full">
                    <label for="relationship" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relationship</label>
                    <select name="relationship" id="relationship" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="relationship in relationships" :value="relationship.value" :key="relationship.value">{{ relationship.text }}</option>
                    </select>
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input type="number" name="age" id="age" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie" required>
                </div>
                <div class="w-full">
                    <label for="maritalStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marital Status</label>
                    <select name="maritalStatus" id="maritalStatus" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="maritalStatus in maritalStatuses" :value="maritalStatus.value" :key="maritalStatus.value">{{ maritalStatus.text }}</option>
                    </select>
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label for="education" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                    <select name="education" id="education" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="education in educationLevels" :value="education.value" :key="education.value">{{ education.text }}</option>
                    </select>
                </div>
                <div class="w-full">
                    <label for="occupation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                    <select name="occupation" id="occupation" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="occupation in occupations" :value="occupation.value" :key="occupation.value">{{ occupation.text }}</option>
                    </select>
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label for="parishDeligation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parish Deligation</label>
                    <select name="parishDeligation" id="parishDeligation" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="deligation in parishDeligations" :value="deligation.value" :key="deligation.value">{{ deligation.text }}</option>
                    </select>
                </div>
                <div class="w-full">
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                    <input type="number" name="phone" id="phone" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. 12345" required>
                </div>
            </div>
    
        </div>
    </div>

</template>


<script>

    export default {
        data() {
            return {
                genders: [
                    { text: 'Female', value: 'female' },
                    { text: 'Male', value: 'male' },
                    { text: 'Non-binary', value: 'trans' }
                ],
                relationships : [
                    { text: 'Spouse', value: 'spouse' },
                    { text: 'Child', value: 'child' },
                    { text: 'Parent', value: 'parent' },
                    { text: 'In-law', value: 'in-law' },
                    { text: 'Sibling', value: 'sibling' },
                    { text: 'Grandparent', value: 'grandparent' },
                    { text: 'Grandchild', value: 'grandchild' },
                    { text: 'Aunt/Uncle', value: 'aunt-uncle' },
                    { text: 'Niece/Nephew', value: 'niece-nephew' },
                    { text: 'Cousin', value: 'cousin' },
                    { text: 'Other', value: 'other' }
                ],
                maritalStatuses : [
                    { text: 'Single', value: 'single' },
                    { text: 'Married', value: 'married' },
                    { text: 'Divorced', value: 'divorced' },
                    { text: 'Widowed', value: 'widowed' },
                    { text: 'Separated', value: 'separated' },
                    { text: 'Other', value: 'other' }
                ],
                educationLevels : [
                    { text: 'Less than high school', value: 'less-than-high-school' },
                    { text: 'High school graduate', value: 'high-school-graduate' },
                    { text: 'Some college', value: 'some-college' },
                    { text: 'Associate degree', value: 'associate-degree' },
                    { text: 'Bachelor degree', value: 'bachelor-degree' },
                    { text: 'Master degree', value: 'master-degree' },
                    { text: 'Doctorate degree', value: 'doctorate-degree' },
                    { text: 'Other', value: 'other' }
                ],
                occupations: [
                    { text: 'Government Employee', value: 'govt-employee' },
                    { text: 'Military', value: 'military' },
                    { text: 'Private business', value: 'private-business' },
                    { text: 'Private/non-profit', value: 'private/non-profit' },
                    { text: 'Migrant (NRI)', value: 'migrant' },
                    { text: 'Self-employed', value: 'self-employed' },
                    { text: 'Retired', value: 'retired' },
                    { text: 'Homemaker', value: 'homemaker' },
                    { text: 'Student', value: 'student' },
                    { text: 'Unemployed', value: 'unemployed' },
                    { text: 'Other', value: 'other' }
                ],
                parishDeligations: [
                    { text: 'Altar Server', value: 'altar-server' },
                    { text: 'Reader', value: 'reader' },
                    { text: 'Other', value: 'other' },
                ]
            }
        },
    }

</script>