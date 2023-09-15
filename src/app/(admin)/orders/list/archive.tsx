import { Text, FlatList } from 'react-native';
import orders from '@assets/data/orders';
import OrderListItem from '@/components/OrderListItem';

export default function OrdersScreen() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
