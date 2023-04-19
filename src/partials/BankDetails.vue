<template>

    <div class="my-3 py-3 border-b border-b border-gray-200 dark:border-gray-700">
        <div class="text-sm font-medium text-gray-900 dark:text-white">{{ question }}</div>
        <div class="flex items-center my-2 gap-4 sm:w-full md:w-2/3">
            <div class="flex items-center w-full">
                <span class="text-xs text-gray-800 dark:text-gray-400">No</span>
                <label class="flex mx-2 relative items-center cursor-pointer">
                    <input type="checkbox" :id="this.checkboxId" class="sr-only" @input="setData()">
                    <span class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                </label>
                <span class="text-xs text-gray-800 dark:text-gray-400">Yes</span>
            </div>
            <div v-show="checkboxValue" class="w-full">

                <select :name="name" :id="name" class="w-full md:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                    <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="option in options" :value="option.value">{{ option.text }}</option>
                </select>

            </div>
        </div>
        <div v-show="checkboxValue" class="md:flex items-center my-2 md:pr-5 gap-4 sm:w-full md:w-5/6">
            <input name="accountNumber" id="accountNumber" type="number" placeholder="Account Number" class="w-full md:w-1/3 my-3 md:my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @input="setData()" v-model="bankDetails.accountNumber"/>
            <input name="ifscCode" id="ifscCode" type="text" placeholder="IFSC Code" class="w-full md:w-1/3 my-3 md:my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase" @input="setData()" v-model="bankDetails.ifscCode"/>
        </div>
    </div>

</template>

<script>

export default {
    name: "SimpleQuestion",
    props: {
        question: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: false
        }
    },
    data() {
        return {
            checkboxId: this.name + "_checkbox",
            checkboxValue: false,
            bankDetails: {
                name: null,
                accountNumber: null,
                ifscCode: null
            }
        }
    },
    methods: {
        setData() {
            this.checkboxValue = document.getElementById(this.checkboxId).checked;
            
            if(this.checkboxValue == true) {
                if(document.getElementById(this.name).value) {
                    this.bankDetails.name = document.getElementById(this.name).value;
                } else {
                    this.bankDetails.name = null;
                }
            }



            this.$emit('setData', {
                name: this.name,
                value: this.bankDetails,
                checkbox: document.getElementById(this.checkboxId).checked
            })
        }
    }
}

</script>