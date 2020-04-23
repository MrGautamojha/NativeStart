import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import { Container, Center } from 'rnfui';
import { Alert } from 'react-native';
import AppButton from '../AppButton/Appbutton';
import AppTheme from '../../../Config/AppTheme';
export default function AppRazorPay(){

    return(
        <Container>
            <Center allAxis >
            <AppButton onPress={() => {
    var options = {
    description: 'GAUTAM OJHA PAYMENT METHOD',
    image: 'https://i.pinimg.com/originals/d1/d2/66/d1d26618a7876afa7b99f2afebf6c790.jpg',
    currency: 'INR',
    key: 'rzp_test_q4Qz0jiMV0dBky',
    amount: '500000',
    name: 'Gautam Ojha',
    // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
    prefill: {
      email: 'gautamojha@gmail.com',
      contact: '8770535312',
      name: 'Gaurav Kumar'
    },
    theme: {color: AppTheme.color.primary}
  }
  RazorpayCheckout.open(options).then((data:any) => {
    // handle success
    Alert.alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error:any) => {
    // handle failure
    console.log(`Error: ${error.code} | ${error.description}`);
    
    Alert.alert(`Error: ${error.code} | ${error.description}`);
  });
}} children={'PAyment With RazorPay'}/>
          
          </Center>
        </Container>
    )
}