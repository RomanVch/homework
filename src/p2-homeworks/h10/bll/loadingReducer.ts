const LOADING="LOADING",
 STOPLOADING = "STOP-LOADING"

const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case LOADING: {
            return  {...state,loading:true}}
        case STOPLOADING :{
            return {...state,loading:false}}
        default: return state;
    }
};

export const loadingAC = (): any => ({type:LOADING}); // fix any
export const stopLoadingAC = (): any => ({type:STOPLOADING}); // fix any
