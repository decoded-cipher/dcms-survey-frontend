<template>

    <div class="my-3 py-3 border-b border-b border-gray-200 dark:border-gray-700">
        <div class="text-sm font-medium text-gray-900 dark:text-white">{{ question }}</div>
        <div class="flex items-center my-2 gap-4 sm:w-full md:w-2/3">
            <div class="my-2 flex items-center w-full">
                <span class="text-xs text-gray-800 dark:text-gray-400">No</span>
                <label class="flex mx-2 relative items-center cursor-pointer">
                    <input type="checkbox" :id="this.checkboxId" class="sr-only" @change="setData()">
                    <span class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                </label>
                <span class="text-xs text-gray-800 dark:text-gray-400">Yes</span>
            </div>

            <div class="w-full">

                <input v-if="inputType === 'text' || inputType === 'number'" :name="name" :id="name" :type="inputType" :placeholder="placeholder" class="w-full md:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required @input="setData()" />
                                
                <select v-else-if="inputType === 'select'" :name="name" :id="name" class="w-full md:w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setData()">
                    <option class="text-xs md:text-sm px-4 py-1 text-gray-900 dark:text-white" v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
                </select>

            </div>
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
        placeholder: {
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
        }
    },
    methods: {
        setData() {
            this.$emit('setData', {
                name: this.name,
                value: document.getElementById(this.name).value,
                checkbox: document.getElementById(this.checkboxId).checked
            })
        }
    }

}

</script>