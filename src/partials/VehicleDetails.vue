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

        </div>
        <div v-show="checkboxValue" class="md:flex items-center mt-4 gap-16 sm:w-full w-full">
            <div class="my-2 flex items-center">
                <input id="two-wheeler" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" v-model="vehicleType.twoWheeler" @change="setData()">
                <label for="two-wheeler" class="sr-only">checkbox</label>
                <p class="ml-2 text-sm text-gray-500 dark:text-gray-300">Two Wheelers</p>
            </div>

            <div class="my-2 flex items-center">
                <input id="three-wheeler" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" v-model="vehicleType.threeWheeler" @change="setData()">
                <label for="three-wheeler" class="sr-only">checkbox</label>
                <p class="ml-2 text-sm text-gray-500 dark:text-gray-300">Three Wheelers</p>
            </div>

            <div class="my-2 flex items-center">
                <input id="four-wheeler" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" v-model="vehicleType.fourWheeler" @change="setData()">
                <label for="four-wheeler" class="sr-only">checkbox</label>
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
        }
    },
    data() {
        return {
            checkboxId: this.name + "_checkbox",
            checkboxValue: false,
            vehicleType: {
                twoWheeler: false,
                threeWheeler: false,
                fourWheeler: false
            }
        }
    },
    methods: {
        setData() {
            this.checkboxValue = document.getElementById(this.checkboxId).checked;

            if(this.checkboxValue == true) {

                if(document.getElementById("two-wheeler").checked == true) {
                    this.vehicleType.twoWheeler = true;
                } else {
                    this.vehicleType.twoWheeler = false;
                }

                if(document.getElementById("three-wheeler").checked == true) {
                    this.vehicleType.threeWheeler = true;
                } else {
                    this.vehicleType.threeWheeler = false;
                }

                if(document.getElementById("four-wheeler").checked == true) {
                    this.vehicleType.fourWheeler = true;
                } else {
                    this.vehicleType.fourWheeler = false;
                }
            }

            this.$emit('setData', {
                name: this.name,
                value: this.vehicleType,
                checkbox: document.getElementById(this.checkboxId).checked
            })
        }
    }
}

</script>