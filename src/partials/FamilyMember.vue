<template>

    <div class="p-3 my-6 border rounded dark:border-gray-600">

        <div class="mt-3 mb-6">

            <div class="flex justify-between pb-2">
                <h3 class="text-md font-semibold dark:text-white">Details : Member - #0{{ index + 1 }}</h3>
                <button class="flex items-center justify-center text-sm font-medium text-white border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500" @click="removeFamilyMember(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">Note : The following fields are for entering the details of the family member #0{{ index + 1 }}</span>
        </div>

        <div class="grid grid-cols-1 xl:mb-0 md:gap-6 gap-4 sm:grid-cols-6">
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div>
                    <label :for="'first-name_' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" :name="'first-name_' + index" :id="'first-name_' + index" class="shadow-sm bg-gray-50 border border-gray\-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required v-model="familyMember.firstName" @input="setData()">
                </div>
                <div>
                    <label :for="'last-name_' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" :name="'last-name_' + index" :id="'last-name_' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Varghese" required v-model="familyMember.lastName" @input="setData()">
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label :for="'gender_' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <select :name="'gender_' + index" :id="'gender_' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="familyMember.gender" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="gender in genders" :value="gender.value" :key="gender.value">{{ gender.text }}</option>
                    </select>
                </div>
                <div class="w-full">
                    <label :for="'relationship_' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relationship</label>
                    <select :name="'relationship_' + index" :id="'relationship_' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="familyMember.relationship" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="relationship in relationships" :value="relationship.value" :key="relationship.value">{{ relationship.text }}</option>
                    </select>
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label :for="'age' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input type="number" :name="'age' + index" :id="'age' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="52" required v-model="familyMember.age" @input="setData()">
                </div>
                <div class="w-full">
                    <label :for="'maritalStatus' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marital Status</label>
                    <select :name="'maritalStatus' + index" :id="'maritalStatus' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="familyMember.maritalStatus" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="maritalStatus in maritalStatuses" :value="maritalStatus.value" :key="maritalStatus.value">{{ maritalStatus.text }}</option>
                    </select>
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label :for="'education' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                    <select :name="'education' + index" :id="'education' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="familyMember.education" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="education in educationLevels" :value="education.value" :key="education.value">{{ education.text }}</option>
                    </select>
                </div>
                <div class="w-full">
                    <label :for="'occupation' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                    <select :name="'occupation' + index" :id="'occupation' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="familyMember.occupation" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="occupation in occupations" :value="occupation.value" :key="occupation.value">{{ occupation.text }}</option>
                    </select>
                </div>
            </div>
    
            <div class="flex gap-4 md:grid md:grid-cols-2 col-span-3">
                <div class="w-full">
                    <label :for="'parishDeligation' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parish Deligation</label>
                    <select :name="'parishDeligation' + index" :id="'parishDeligation' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="familyMember.parishDeligation" @change="setData()">
                        <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="deligation in parishDeligations" :value="deligation.value" :key="deligation.value">{{ deligation.text }}</option>
                    </select>
                </div>
                <div class="w-full">
                    <label :for="'phone' + index" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                    <input type="tel" :name="'phone' + index" :id="'phone' + index" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91 98765 45678" required v-model="familyMember.phone" @input="setData()">
                </div>
            </div>
    
        </div>
    </div>

</template>


<script>

    export default {
        props: {
            index: {
                type: Number,
                required: true
            }
        },
        data() {
            return {

                familyMember: {
                    firstName: null,
                    lastName: null,
                    gender: 'male',
                    relationship: 'child',
                    age: null,
                    maritalStatus: 'married',
                    education: 'bachelor-degree',
                    occupation: 'self-employed',
                    parishDeligation: 'altar-server',
                    phone: null,
                },

                
                genders: [
                    { text: 'Male', value: 'male' },
                    { text: 'Female', value: 'female' },
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

        methods: {
            removeFamilyMember(index) {
                this.$emit('removeFamilyMember', index)
            },
            
            setData() {
                this.$emit('setData', {
                    index: this.index,
                    data: this.familyMember
                })
            }
        }
    }

</script>