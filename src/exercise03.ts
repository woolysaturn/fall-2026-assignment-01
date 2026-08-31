export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {

//item name, how many, price
//run a long calculator to check and add
  return inventory.reduce((total, [_name, quantity, price]) => {
    if(quantity > 5){
      return total + quantity * price;
    }  
    return total;
  }, 0)
}
