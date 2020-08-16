import { all } from '../data/chartData.json';

const initialState = {
    chartData: all
};


const reducer = (state = initialState, action) => {
    if (action.type === 'ALL_SCHOOL_DATA') {
        return {
            chartData: action.payload
        }
    }
    if (action.type === 'FEMALE_SCHOOL_DATA') {
        return {
            chartData: action.payload
        }
    }
    if (action.type === 'MALE_SCHOOL_DATA') {
        return {
            chartData: action.payload
        }
    }
    return state;
};

export default reducer;