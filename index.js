const CAKE_ORDERED = "CAKE_ORDERED";

//Action
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
