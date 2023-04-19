<template>

    <div class="p-4 bg-white rounded-lg shadow sm:p-6 xl:p-8 dark:bg-gray-800">
        <h3 class="mb-4 text-xl font-bold dark:text-white">Socio-Economic Survey</h3>
        
        <!-- Question to know if the person owns any land -->
        <SimpleQuestion 
            question = "Do you own any land?"
            name = "land"
            inputType = "number"
            placeholder = "Eg: 1.53"
            @setData = "setData"
        />

        <!-- Question to know if the person owns any house -->
        <SimpleQuestion 
            question = "Do you own any house?"
            name = "house"
            inputType = "select"
            :options = "houseStatus"
            @setData = "setData"
        />

        <!-- Question to know if the person owns any vehicle -->
        <VehicleDetails
            question = "Do you own any vehicle?"
            name = "vehicle"
            inputType = "select"
            @setData = "setData"
        />


        <!-- Question to know if the person has any bank account -->
        <BankDetails
            question = "Do you have any bank account?"
            name = "bankAccount"
            inputType = "select"
            :options = "bankNames"
            @setData = "setData"
        />


        <!-- Question to know if the person has any insurance policy -->
        <SimpleQuestion 
            question = "Do you have any insurance policy?"
            name = "insurancePolicy"
            inputType = "select"
            :options = "insurancePolicy"
            @setData = "setData"
        />

        <!-- Question to know if the person has any investment -->
        <SimpleQuestion 
            question = "Do you have any investment?"
            name = "investment"
            inputType = "select"
            :options = "investmentOption"
            @setData = "setData"
        />

        <!-- Question to know if the person has any liabilities -->
        <SimpleQuestion 
            question = "Do you have any liabilities?"
            name = "liability"
            inputType = "select"
            :options = "liabilityOption"
            @setData = "setData"
        />

        <!-- Question to know if the family has any government/ semi-government/ aided school employee -->
        <SimpleQuestion 
            question = "Do you have any government employee in your family?"
            name = "govtJob"
            inputType = "select"
            :options = "govtEmployee"
            @setData = "setData"
        />

        <!-- Question to know if the family has any agricultural activity -->
        <SimpleQuestion 
            question = "Do you have any agricultural activity in your family?"
            name = "farming"
            inputType = "select"
            :options = "agriculturalActivity"
            @setData = "setData"
        />

        <!-- Question to know if the family runs any business -->
        <SimpleQuestion 
            question = "Do you have any business in your family?"
            name = "business"
            inputType = "select"
            :options = "businessActivity"
            @setData = "setData"
        />

        <!-- Question to know if the family has any migrant employee -->
        <SimpleQuestion 
            question = "Do you have any migrant employee in your family?"
            name = "migrant"
            inputType = "select"
            :options = "migrantEmployee"
            @setData = "setData"
        />

        <!-- Question to know if the family has any priest or religious leader or any other person who is dependent on the family -->
        <SimpleQuestion 
            question = "Do you have any priest or a priestly member in the family?"
            name = "priestlyMember"
            inputType = "select"
            :options = "priestlyMember"
            @setData = "setData"
        />

        <!-- Question to know whether the family has a ration card -->
        <SimpleQuestion 
            question = "Do you have a ration card?"
            name = "rationCard"
            inputType = "select"
            :options = "rationCard"
            @setData = "setData"
        />

    </div>

</template>


<script>

    import SimpleQuestion from '../../partials/SimpleQuestion.vue';
    import BankDetails from '../../partials/BankDetails.vue';
    import VehicleDetails from '../../partials/VehicleDetails.vue';

    export default {
        components: {
            SimpleQuestion,
            BankDetails,
            VehicleDetails,
        },
        data () {
            return {


                survey : {
                    land: null,
                    house: null,
                    vehicle: null,
                    bankAccount: null,
                    insurancePolicy: null,
                    investment: null,
                    liability: null,
                    govtJob: null,
                    farming: null,
                    business: null,
                    migrant: null,
                    priestlyMember: null,
                    rationCard: null,
                },


                panchayaths: [
                    { text: 'Vazhappally', value: 'vazhappally' },
                    { text: 'Aymanam', value: 'aymanam' },
                    { text: 'Athirampuzha', value: 'athirampuzha' },
                    { text: 'Ettumanoor', value: 'ettumanoor' },
                    { text: 'Kurichy', value: 'kurichy' },
                    { text: 'Thiruvarppu', value: 'thiruvarppu' }
                ],
                districts: [
                    { text: 'Kottayam', value: 'kottayam' },
                    { text: 'Alappuzha', value: 'alappuzha' },
                    { text: 'Pathanamthitta', value: 'pathanamthitta' },
                    { text: 'Idukki', value: 'idukki' }
                ],
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
                ],
                bankNames: [
                    { text: 'Allahabad Bank', value: 'allahabad-bank' },
                    { text: 'Andhra Bank', value: 'andhra-bank' },
                    { text: 'Axis Bank', value: 'axis-bank' },
                    { text: 'Bank of Baroda', value: 'bank-of-baroda' },
                    { text: 'Bank of India', value: 'bank-of-india' },
                    { text: 'Bank of Maharashtra', value: 'bank-of-maharashtra' },
                    { text: 'Canara Bank', value: 'canara-bank' },
                    { text: 'Central Bank of India', value: 'central-bank-of-india' },
                    { text: 'Corporation Bank', value: 'corporation-bank' },
                    { text: 'Dena Bank', value: 'dena-bank' },
                    { text: 'Federal Bank', value: 'federal-bank' },
                    { text: 'HDFC Bank', value: 'hdfc-bank' },
                    { text: 'ICICI Bank', value: 'icici-bank' },
                    { text: 'IDBI Bank', value: 'idbi-bank' },
                    { text: 'Indian Bank', value: 'indian-bank' },
                    { text: 'Indian Overseas Bank', value: 'indian-overseas-bank' },
                    { text: 'IndusInd Bank', value: 'indusind-bank' },
                    { text: 'Jammu and Kashmir Bank', value: 'jammu-and-kashmir-bank' },
                    { text: 'Karnataka Bank', value: 'karnataka-bank' },
                    { text: 'Karur Vysya Bank', value: 'karur-vysya-bank' },
                    { text: 'Kotak Mahindra Bank', value: 'kotak-mahindra-bank' },
                    { text: 'Oriental Bank of Commerce', value: 'oriental-bank-of-commerce' },
                    { text: 'Punjab and Sind Bank', value: 'punjab-and-sind-bank' },
                    { text: 'Punjab National Bank', value: 'punjab-national-bank' },
                    { text: 'RBL Bank', value: 'rbl-bank' },
                    { text: 'South Indian Bank', value: 'south-indian-bank' },
                    { text: 'State Bank of India', value: 'state-bank-of-india' },
                    { text: 'Syndicate Bank', value: 'syndicate-bank' },
                    { text: 'Tamilnad Mercantile Bank', value: 'tamilnad-mercantile-bank' },
                    { text: 'UCO Bank', value: 'uco-bank' },
                    { text: 'Union Bank of India', value: 'union-bank-of-india' },
                    { text: 'United Bank of India', value: 'united-bank-of-india' },
                    { text: 'Vijaya Bank', value: 'vijaya-bank' },
                    { text: 'Yes Bank', value: 'yes-bank' }
                ]
            }
        },

        methods: {
            setData(data) {
                
                if(data.checkbox === true) {
                    this.survey[data.name] = data.value;
                } 
                else {
                    this.survey[data.name] = null;
                }

                this.$emit('setData', this.survey);
            }
        }
    }


</script>