import request from '../utils/api'

// export const showError = (errorMessage) => {
//     return {
//       type: "SHOW_ERROR",
//       errorMessage: errorMessage
//     }
//   }

// export const  requestBag= (items) => {
//     return {
//       type: 'REQ_BAG',
//       payload:items
//     }
//   }
  
  
//   export const receiveBag = (items) => {
//     return {
//       type:'REC_BAG',
//       payload:items
//     }
//   }
  
export function addItems(id, items){
    let obj = {id, items}
    console.log(items)
    return function(dispatch){
        request('post', 'package/save', obj)
        .then(res => 
            console.log("I am at action: " + res))
    }
}