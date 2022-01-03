import axios from "axios";
import { message } from "antd";
export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
  await axios.post(`${process.env.REACT_APP_BACKEND}/api/bookings/bookcar`,reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your car booked Successfuly");

    setTimeout(()=> {
      window.location.href='/userbookings'

    },500);


  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: true });
    message.error("something went wrong,please try later");
  }
};


 
export const  getAllBookings=()=>async dispatch=>{

  dispatch({type:'LOADING', payload:true})
  
  try{
  
  const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/bookings/getAllBookings`)
  
  dispatch({type: "GET_ALL_BOOKINGS", payload:response.data })
  dispatch({type:'LOADING', payload:false})
  
  } catch (error){
      console.log(error)
      dispatch({type:'LOADING', payload:true})
  
  }
  
  }
  