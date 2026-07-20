export const filterOrders = (history, search) => {
  return history.filter(
    (order) =>
      order.order_id.toString().includes(search) ||
      order.status
        .toLowerCase()
        .includes(search.toLowerCase())
  );
};