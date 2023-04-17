<template>

    <div class="my-3 py-3 border-b border-b border-gray-200 dark:border-gray-700">
        <div class="text-sm font-medium text-gray-900 dark:text-white">{{ question }}</div>
        <div class="flex items-center my-2 gap-4 sm:w-full md:w-2/3">
            <div class="flex items-center w-full">
                <span class="text-xs text-gray-800 dark:text-gray-400">No</span>
                <label class="flex mx-2 relative items-center cursor-pointer">
                    <input type="checkbox" id="company-news" class="sr-only">
                    <span class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                </label>
                <span class="text-xs text-gray-800 dark:text-gray-400">Yes</span>
            </div>

        </div>
        <div class="md:flex items-center mt-4 gap-16 sm:w-full w-full">
            <div class="my-2 flex items-center">
                <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-all" class="sr-only">checkbox</label>
                <p class="ml-2 text-sm text-gray-500 dark:text-gray-300">Two Wheelers</p>
            </div>

            <div class="my-2 flex items-center">
                <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-all" class="sr-only">checkbox</label>
                <p class="ml-2 text-sm text-gray-500 dark:text-gray-300">Three Wheelers</p>
            </div>

            <div class="my-2 flex items-center">
                <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-all" class="sr-only">checkbox</label>
                <p class="ml-2 text-sm text-gray-500 dark:text-gray-300">Four Wheelers</p>
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
    }
}

</script>