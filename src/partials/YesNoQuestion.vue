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
        name: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            checkboxId: this.name + "_checkbox",
            checkboxValue: false,
        }
    },
    methods: {
        setData() {
            this.checkboxValue = document.getElementById(this.checkboxId).checked;
            
            this.$emit('setData', {
                name: this.name,
                checkbox: this.checkboxValue,
            })
        }
    }

}

</script>