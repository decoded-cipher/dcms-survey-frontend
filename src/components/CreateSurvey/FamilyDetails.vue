<template>

    <div class="p-4 mt-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
        <h3 class="mb-4 text-xl font-bold dark:text-white">Family Members</h3>

        <FamilyMember
            :key=0
            :index=0
            :generalInfo="this.generalInfo"
            :autoFill = true
            @setData="syncData"
        />

        
        <FamilyMember
            v-for="(familyMember, index) in familyMembers"
            :key="index"
            :index="index"
            @setData="setData"
            @removeFamilyMember="removeFamilyMember"
        />

        <div class="flex justify-start">
            <button class="flex items-center justify-center w-full md:w-1/5 px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" @click="addFamilyMember()">
                <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>Add Family Member</span>
            </button>
        </div>



    </div>

</template>

<script>

    import FamilyMember from '../../partials/FamilyMember.vue';
    
    export default {
        name: 'Login',
        data() {
            return {
                familyMembers: [],
                wholeFamily: []
            }
        },
        props: {
            generalInfo: {
                type: Object,
                required: true
            }
        },
        components: {
            FamilyMember
        },
        methods: {
            addFamilyMember() {
                this.familyMembers.push({
                    firstName: null,
                    lastName: null,
                    gender: null,
                    relationship: null,
                    age: null,
                    maritalStatus: null,
                    education: null,
                    occupation: null,
                    parishDeligation: null,
                    phone: null,
                });
                this.wholeFamily = [this.wholeFamily[0], ...this.familyMembers]
                this.$emit('setData', this.wholeFamily);
                console.table(this.wholeFamily);
            },

            removeFamilyMember(index) {
                console.log('removeFamilyMember', index);
                
                if (this.familyMembers[index]) {
                    this.familyMembers.splice(index, 1);
                }

                this.wholeFamily = [this.wholeFamily[0], ...this.familyMembers]
                this.$emit('setData', this.wholeFamily);
                // console.table(this.wholeFamily);
            },

            setData(data) {
                this.familyMembers[data.index] = data.data;
                this.wholeFamily = [this.wholeFamily[0], ...this.familyMembers]
                this.$emit('setData', this.wholeFamily);
                // console.table(this.wholeFamily);
            },

            syncData(data) {
                this.wholeFamily[0] = data.data;
                this.wholeFamily = [this.wholeFamily[0], ...this.familyMembers]
                this.$emit('setData', this.wholeFamily);
                // console.table(this.wholeFamily);
            }

            
        }
    }

</script>