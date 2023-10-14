import { Alert } from 'react-native';
import { supabase } from './supabase';
import {
  initPaymentSheet,
  presentPaymentSheet,
} from '@stripe/stripe-react-native';

const fetchPaymentSheetParams = async (amount: number) => {
  const { data, errpr } = await supabase.functions.invoke('payment-sheet', {
    body: { amount },
  });
  if (data) {
    console.log(data);
    return data;
  }
  Alert.alert('Error fetching payment sheet params');
  return {};
};

export const initialisePaymentSheet = async (amount: number) => {
  console.log('Initialising payment sheet, for: ', amount);

  const { paymentIntent, publishableKey, customer, ephemeralKey } =
    await fetchPaymentSheetParams(amount);

  if (!paymentIntent || !publishableKey) return;

  const result = await initPaymentSheet({
    merchantDisplayName: 'notJust.dev',
    paymentIntentClientSecret: paymentIntent,
    customerId: customer,
    customerEphemeralKeySecret: ephemeralKey,
    defaultBillingDetails: {
      name: 'Jane Doe',
    },
  });
  console.log(result);
};

export const openPaymentSheet = async () => {
  const { error } = await presentPaymentSheet();

  if (error) {
    Alert.alert(error.message);
    return false;
  }
  return true;
};
