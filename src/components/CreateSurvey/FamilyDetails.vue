<template>

    <div class="p-4 mt-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
        <h3 class="mb-4 text-xl font-bold dark:text-white">Family Members</h3>

        <FamilyMember
            v-for="(familyMember, index) in familyMembers"
            :key="index"
            :index="index"
            @setData="setData"
            @removeFamilyMember="removeFamilyMember(index)"
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
                familyMembers: [{}]
            }
        },
        components: {
            FamilyMember
        },
        methods: {
            addFamilyMember() {
                this.familyMembers.push({});
            },

            removeFamilyMember(index) {
                if (this.familyMembers.length > 1) {
                    this.familyMembers.splice(index, 1);
                } else {
                    alert('You must have at least one family member');
                }
            },

            setData(data) {
                this.familyMembers[data.index] = data.data;
                this.$emit('setData', this.familyMembers);
            }

            
        }
    }

</script>